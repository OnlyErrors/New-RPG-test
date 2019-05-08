import GameObject from "./gameObject";
import Renderable from "./Renderable";
import Box from "./phybox";


export default class Map extends GameObject {
    constructor(mapjson, mapImg) {
        super();

        const SCALE = 3;

        this.Renderable = new Renderable(mapImg, SCALE, 0, 240, 24, 10, 1);

        this.data = mapjson;

        this.data.layers.forEach(layer => {
            if (layer.type == "objectgroup") {
                layer.objects.forEach(obj => {
                    console.log(obj);
                    this.addChild(new Box(obj.x, obj.y, obj.width, obj.Height));
                });
            }
        });


    }

    draw(ctx) {

        this.data.layers.forEach(layer => {
            if (layer.type == "tilelayer") {
                //will happen to each layer
                let x = 0;
                let y = 0;
                layer.data.forEach((value, index) => {
                    this.Renderable.frame = value - 1;
                    x = index % layer.width;
                    y = Math.floor(index / layer.width);
                    ctx.save();
                    ctx.translate(
                        this.position[0] + x * this.Renderable.subWidth * this.Renderable.scale,
                        this.position[1] + y * this.Renderable.subHeight * this.Renderable.scale);
                    this.Renderable.draw(ctx);
                    ctx.restore();
                });
            }
        });
        super.draw(ctx);
    }
}