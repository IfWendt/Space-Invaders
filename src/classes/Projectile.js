class Projectile {
    constructor(position, velocity) {
        this.position = position;
        this.width = 3;
        this.height = 20;
        this.velocity = velocity;
    }

    draw(ctx) {
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        this.position.y += this.velocity;
    }
}

export default Projectile;