/* ==========================================================================
   SILK.JS — Vanilla WebGL port of the React Bits Silk component
   Renders the GLSL silk wave shader on a <canvas> element.
   ========================================================================== */

class SilkEffect {
  constructor(canvas, options = {}) {
    this.canvas = canvas;
    this.gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!this.gl) { console.warn('Silk: WebGL not supported.'); return; }

    this.opts = {
      speed:          options.speed          ?? 5,
      scale:          options.scale          ?? 1,
      color:          options.color          ?? '#7B7481',
      noiseIntensity: options.noiseIntensity ?? 1.5,
      rotation:       options.rotation       ?? 0,
    };

    this.time      = 0;
    this.lastTime  = performance.now();
    this.animFrame = null;

    this._resizeBound = () => this.resize();

    this._init();
    this.resize();
    window.addEventListener('resize', this._resizeBound);
    this._animate();
  }

  // ── Helpers ─────────────────────────────────────────────────────────────
  _hexToRGB(hex) {
    hex = hex.replace('#', '');
    return [
      parseInt(hex.slice(0, 2), 16) / 255,
      parseInt(hex.slice(2, 4), 16) / 255,
      parseInt(hex.slice(4, 6), 16) / 255,
    ];
  }

  _createShader(type, src) {
    const gl     = this.gl;
    const shader = gl.createShader(type);
    gl.shaderSource(shader, src);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error('Silk shader compile error:', gl.getShaderInfoLog(shader));
      return null;
    }
    return shader;
  }

  // ── Init WebGL ───────────────────────────────────────────────────────────
  _init() {
    const gl = this.gl;

    /* ---- Vertex Shader ---- */
    const vertSrc = `
      attribute vec2 aPosition;
      attribute vec2 aUv;
      varying   vec2 vUv;
      void main() {
        vUv         = aUv;
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `;

    /* ---- Fragment Shader (identical GLSL to the React Bits component) ---- */
    const fragSrc = `
      precision mediump float;
      varying vec2  vUv;
      uniform float uTime;
      uniform vec3  uColor;
      uniform float uSpeed;
      uniform float uScale;
      uniform float uRotation;
      uniform float uNoiseIntensity;

      const float e = 2.71828182845904523536;

      float noise(vec2 texCoord) {
        float G = e;
        vec2  r = (G * sin(G * texCoord));
        return fract(r.x * r.y * (1.0 + texCoord.x));
      }

      vec2 rotateUvs(vec2 uv, float angle) {
        float c   = cos(angle);
        float s   = sin(angle);
        mat2  rot = mat2(c, -s, s, c);
        return rot * uv;
      }

      void main() {
        float rnd     = noise(gl_FragCoord.xy);
        vec2  uv      = rotateUvs(vUv * uScale, uRotation);
        vec2  tex     = uv * uScale;
        float tOffset = uSpeed * uTime;

        tex.y += 0.03 * sin(8.0 * tex.x - tOffset);

        float pattern = 0.6 +
          0.4 * sin(5.0 * (tex.x + tex.y +
                           cos(3.0 * tex.x + 5.0 * tex.y) +
                           0.02 * tOffset) +
                    sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));

        vec4 col = vec4(uColor, 1.0) * vec4(pattern) - rnd / 15.0 * uNoiseIntensity;
        col.a    = 1.0;
        gl_FragColor = col;
      }
    `;

    const vert = this._createShader(gl.VERTEX_SHADER,   vertSrc);
    const frag = this._createShader(gl.FRAGMENT_SHADER, fragSrc);
    if (!vert || !frag) return;

    this.program = gl.createProgram();
    gl.attachShader(this.program, vert);
    gl.attachShader(this.program, frag);
    gl.linkProgram(this.program);
    if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
      console.error('Silk program link error:', gl.getProgramInfoLog(this.program));
      return;
    }

    // Full-screen quad: [x, y, u, v] × 4 vertices
    const verts = new Float32Array([
      -1, -1,  0, 0,
       1, -1,  1, 0,
      -1,  1,  0, 1,
       1,  1,  1, 1,
    ]);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);

    gl.useProgram(this.program);

    const aPos = gl.getAttribLocation(this.program, 'aPosition');
    const aUv  = gl.getAttribLocation(this.program, 'aUv');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 16, 0);
    gl.enableVertexAttribArray(aUv);
    gl.vertexAttribPointer(aUv,  2, gl.FLOAT, false, 16, 8);

    // Cache uniform locations
    this.u = {
      time:    gl.getUniformLocation(this.program, 'uTime'),
      color:   gl.getUniformLocation(this.program, 'uColor'),
      speed:   gl.getUniformLocation(this.program, 'uSpeed'),
      scale:   gl.getUniformLocation(this.program, 'uScale'),
      rot:     gl.getUniformLocation(this.program, 'uRotation'),
      noise:   gl.getUniformLocation(this.program, 'uNoiseIntensity'),
    };

    const rgb = this._hexToRGB(this.opts.color);
    gl.uniform3f(this.u.color, rgb[0], rgb[1], rgb[2]);
    gl.uniform1f(this.u.speed, this.opts.speed);
    gl.uniform1f(this.u.scale, this.opts.scale);
    gl.uniform1f(this.u.rot,   this.opts.rotation);
    gl.uniform1f(this.u.noise, this.opts.noiseIntensity);
  }

  // ── Resize canvas to match parent ───────────────────────────────────────
  resize() {
    const parent = this.canvas.parentElement;
    if (!parent) return;
    const w = parent.offsetWidth;
    const h = parent.offsetHeight;
    if (this.canvas.width !== w || this.canvas.height !== h) {
      this.canvas.width  = w;
      this.canvas.height = h;
      this.gl.viewport(0, 0, w, h);
    }
  }

  // ── Render loop ──────────────────────────────────────────────────────────
  _animate() {
    const now   = performance.now();
    const delta = (now - this.lastTime) / 1000;
    this.lastTime = now;
    this.time    += delta;

    const gl = this.gl;
    gl.uniform1f(this.u.time, this.time);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    this.animFrame = requestAnimationFrame(() => this._animate());
  }

  // ── Cleanup ──────────────────────────────────────────────────────────────
  destroy() {
    if (this.animFrame) cancelAnimationFrame(this.animFrame);
    window.removeEventListener('resize', this._resizeBound);
  }
}

/* ── Mount silk backgrounds on DOMContentLoaded ──────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Each entry: { selector, options }
  const SILK_TARGETS = [
    {
      selector: '.testimonials-section',
      opts: {
        speed:          4,
        scale:          1.2,
        color:          '#2a1008',   // deep warm mahogany
        noiseIntensity: 1.8,
        rotation:       0.3,
      }
    },
    {
      selector: '.footer',
      opts: {
        speed:          3,
        scale:          1.0,
        color:          '#150b05',   // near-black mahogany
        noiseIntensity: 1.2,
        rotation:       -0.2,
      }
    },
  ];

  SILK_TARGETS.forEach(({ selector, opts }) => {
    const section = document.querySelector(selector);
    if (!section) return;

    // Ensure the section is a positioning context
    const pos = window.getComputedStyle(section).position;
    if (pos === 'static') section.style.position = 'relative';

    // Create & insert canvas behind existing content
    const canvas = document.createElement('canvas');
    canvas.className = 'silk-canvas';
    section.insertBefore(canvas, section.firstChild);

    new SilkEffect(canvas, opts);
  });
});
