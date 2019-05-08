export default class Input {
    constructor() {

        this.downkeys = [];

        document.onkeydown = (evt) => {
            this.downkeys[evt.code] = true;
            console.log(evt.code);
        };

        document.onkeyup = (evt) => {
            this.downkeys[evt.code] = false;
        };
    }

    isKeyDown(keyCode) {
        return this.downkeys[keyCode];

    };
}