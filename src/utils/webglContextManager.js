// Global WebGL context manager for mobile devices
class WebGLContextManager {
  constructor() {
    this.activeContexts = new Set();
    this.maxContexts = 6; // Conservative limit for mobile
  }

  canCreateContext() {
    return this.activeContexts.size < this.maxContexts;
  }

  registerContext(id) {
    this.activeContexts.add(id);
  }

  unregisterContext(id) {
    this.activeContexts.delete(id);
  }

  getActiveCount() {
    return this.activeContexts.size;
  }

  isContextActive(id) {
    return this.activeContexts.has(id);
  }
}

export const webglContextManager = new WebGLContextManager();
