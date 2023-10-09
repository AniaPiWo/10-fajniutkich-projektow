class drawingApp {
  constructor() {
    this.canvas - document.querySelector('#canvas');
    this.#init();
  }

  #init() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');
  }
}

const app = new drawingApp();
app.init();
