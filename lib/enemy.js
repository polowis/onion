class Enemy{
    constructor(game, px, py, width, height, image, path){
        this.health = 250;
        this.armor = 0;
        this.dead = false;
        this.on_screen = false;
        this.despawn_off_screen = true;
	    this.despawn_distance = Math.max(this.width, this.height);
    }
}