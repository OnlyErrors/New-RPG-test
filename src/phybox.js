export default class Box {
    constructor(x, y, h, w) {
        this.pos = [x, y];
        this.size = [h, w];
    }

    draw(ctx) {
        ctx.strokeStyle = "red";
        ctx.strokeRect(this.pos[0], this.pos[1], this.size[0], this.size[1]);
    }
}