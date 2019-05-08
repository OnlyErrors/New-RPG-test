export default class Box {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
    }

    isInside(x,y){
        let isInX = x>this.x && x<this.x+this.w;
        let isInY = y>this.y && x<this.y+this.h;
        console.log(isInX&&isInY);
    }

    draw(ctx) {
        ctx.strokeStyle = "red";
        ctx.strokeRect(this.x,this.y,this.w,this.h);
    }
}