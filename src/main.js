import Engine from "./engine";
import Player from "./player";
import Map from "./map";

import testmap from "./map/testmap.json";
import mapTiles from "./images/dungeon_sheet.png"

let engine = new Engine();

let map = new Map(testmap, mapTiles);
engine.addObject(map);

let player = new Player(50, 50);

engine.addObject(player);

engine.update = (dt) => {

    if (engine.input.isKeyDown("KeyW")) {
        player.translate(0, -100 * dt);
        player.facing = 1;
    }

    if (engine.input.isKeyDown("KeyS")) {
        player.translate(0, 100 * dt);
        player.facing = 3;
    }

    if (engine.input.isKeyDown("KeyA")) {
        player.translate(-100 * dt, 0);
        player.facing = 4;
    }

    if (engine.input.isKeyDown("KeyD")) {
        player.translate(100 * dt, 0);
        player.facing = 2;
    }

    if (!engine.input.isKeyDown("KeyW") &&
        !engine.input.isKeyDown("KeyS") &&
        !engine.input.isKeyDown("KeyA") &&
        !engine.input.isKeyDown("KeyD"))
        player.facing = 0;
};
