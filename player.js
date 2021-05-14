export default class Player
{
    constructor(size, gameWidth, gameHeight)
    {
        this.width = size;
        this.height = size;
        this.position = {
            x: gameWidth / 2 - this.width / 2 ,
            y: gameHeight / 2 - this.height / 2
        };
    }

    draw(cx)
    {
        cx.fillStyle = '#0f0';
        cx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(dT)
    {
        if (!dT) return;
        this.position.x += 5 / dT;
    }
}