"use client";

import { useEffect, useRef } from "react";

const vertexShader = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;
  uniform vec2 u_resolution;
  uniform float u_time;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(41.31, 289.91))) * 43758.5453);
  }

  void main() {
    vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
    float t = u_time * 0.19;
    float r = length(uv);
    float angle = atan(uv.y, uv.x);
    float vortex = sin(angle * 7.0 - r * 15.0 + t * 9.0);
    float ripple = sin(r * 28.0 - t * 6.0 + vortex * 1.6);
    float plume = smoothstep(1.24, 0.12, r) * (0.5 + 0.5 * ripple);
    float sparks = step(0.985, hash(floor(uv * 48.0 + t * 2.0))) * smoothstep(1.3, 0.18, r);
    vec3 night = vec3(0.016, 0.027, 0.09);
    vec3 blue = vec3(0.17, 0.30, 1.0);
    vec3 violet = vec3(0.58, 0.39, 1.0);
    vec3 lime = vec3(0.85, 0.96, 0.30);
    vec3 color = night;
    color += blue * plume * 0.65;
    color += violet * pow(max(vortex, 0.0), 5.0) * 0.48;
    color += lime * sparks * 1.15;
    color += vec3(0.08, 0.13, 0.37) * smoothstep(1.6, 0.0, r);
    gl_FragColor = vec4(color, 1.0);
  }
`;

function createShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  return gl.getShaderParameter(shader, gl.COMPILE_STATUS) ? shader : null;
}

export function WokField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const gl = canvas.getContext("webgl", { alpha: false, antialias: false });
    if (!gl) return;
    const vertex = createShader(gl, gl.VERTEX_SHADER, vertexShader);
    const fragment = createShader(gl, gl.FRAGMENT_SHADER, fragmentShader);
    if (!vertex || !fragment) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;

    const buffer = gl.createBuffer();
    if (!buffer) return;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, "a_position");
    const resolution = gl.getUniformLocation(program, "u_resolution");
    const time = gl.getUniformLocation(program, "u_time");
    let frame = 0;
    let start = performance.now();

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, window.innerWidth < 640 ? 1 : 1.5);
      canvas.width = Math.floor(canvas.clientWidth * ratio);
      canvas.height = Math.floor(canvas.clientHeight * ratio);
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    const draw = (now: number) => {
      gl.useProgram(program);
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.enableVertexAttribArray(position);
      gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
      gl.uniform2f(resolution, canvas.width, canvas.height);
      gl.uniform1f(time, (now - start) / 1000);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      frame = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    frame = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
    };
  }, []);

  return <canvas aria-hidden="true" className="wok-field" ref={canvasRef} />;
}
