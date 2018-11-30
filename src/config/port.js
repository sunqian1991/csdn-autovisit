class Port {
  constructor() {
    this.instance = null;
    this.port = 5800;
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new Port();
    }
    return this.instance;
  }

  getPort = () => (this.port)
}

module.exports = Port;
