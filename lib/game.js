class Game{
    constructor(canvas){
        this.canvas = canvas;
        this.entities = [];
        this.entitiesToAdd = [];
        this.entitiesToRemove = [];

        this.gameSystems = {};
        this.particleSystems = {};

        this.backgroundColor = '#000';

    }

    draw(ctx){
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        ctx.fillStyle =  this.backgroundColor;
        ctx.fillRect(0, 0,this.canvas.width, this.canvas.height);
    }

    /**
     * Add entity
     */
    addEntity(entity){
        this.entitiesToAdd.push(entity);
    }

    /**
     * 
     */
    removeEntity(entity){
        if(this.entities.indexOf(entity) !== -1){
            this.entitiesToRemove.push(entity);
        }
    }
}
