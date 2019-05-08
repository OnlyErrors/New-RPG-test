import GameObject from "./gameObject";
import Renderable from "./Renderable";
import maleImg from "./images/male.png";

export default class Player extends GameObject {
    constructor(x, y) {
        super();

        this.position = [x, y];

        this.facing = 0;

        this.renderables = [
            new Renderable(maleImg, 1, 18, 0, 9, 4, 15),
            new Renderable(maleImg, 1, 1, 6, 9, 4, 15),
            new Renderable(maleImg, 1, 27, 6, 9, 4, 15),
            new Renderable(maleImg, 1, 19, 6, 9, 4, 15),
            new Renderable(maleImg, 1, 9, 6, 9, 4, 15)
        ];
    }

    draw(ctx) {
        ctx.save();

        ctx.translate(this.position[0], this.position[1]);

        this.renderables[this.facing].draw(ctx);

        ctx.restore();
    }
}