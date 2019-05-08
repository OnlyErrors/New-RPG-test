import GameObject from "./gameObject";
import Input from "./input";

export default class Engine {
    constructor() {
        document.body.style.margin = "0px";
        document.body.style.overflow = "hidden";
        document.body.style.imageRendering = "pixelated"
        this.canvas = document.createElement("canvas");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        //this.canvas.style.width = window.innerWidth+"px";
        //this.canvas.style.height = window.innerHeight+"px";

        this.phyDebug = false;

        document.body.appendChild(this.canvas);

        this.ctx = this.canvas.getContext("2d");
        this.ctx.imageSmoothingEnabled = false;

        this.lastTime = new Date().getTime();

        this.objs = [];
        this.colliders = [];

        this.input = new Input();

        window.requestAnimationFrame(this.loop.bind(this));
    }

    addObject(obj) {
        if (obj instanceof GameObject) {
            this.objs.push(obj);
        } else {
            console.error("Invalid Object Added. Not GameObject")
        }
    }

    addColliders(colliders) {
        colliders.forEach(colliders => {
            this.colliders.push(colliders);
        });
    }

    loop() {
        let time = new Date().getTime();
        let dt = (time - this.lastTime) / 1000;

        //do updates here
        if (this.update)
            this.update(dt);

        this.ctx.fillStyle = "#303030";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        //do drawing here
        this.objs.forEach(obj => {
            obj.draw(this.ctx);
        });

        if (this.phyDebug) {
            this.colliders.forEach(colliders => {
                colliders.draw(this.ctx);
            });
        }

        this.lastTime = time;
        window.requestAnimationFrame(this.loop.bind(this));
    }

}