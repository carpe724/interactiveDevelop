class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');

        // exercise

        this.ctx.fillStyle = `rgb(200,0,0)`;
        this.ctx.fillRect(10,10,50,50);

        // exercise

        this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;
        this.ctx.scale(this.pixelRatio, this,this.pixelRatio);
    }

    animate() {
        window.requestAnimationFrame(this.animate.bind(this));

        // this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    }
}

window.onload = () => {
    // new App();
    draw();
}

function draw() {
    var canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    if (canvas.getContext) {
      var ctx = canvas.getContext("2d");

      ctx.fillStyle = "rgb(200,0,0)";
      ctx.fillRect (10, 10, 50, 50);

      ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
      ctx.fillRect (30, 30, 50, 50);
    }
  }