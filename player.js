export default class Player
{
    constructor(color, size, positionX, positionY)
    {
        this.color = color
        this.width = size;
        this.height = size;
        this.position = {
            x: positionX,
            y: positionY
        };
    }

    draw(cx)
    {
        cx.fillStyle = this.color;
        cx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}