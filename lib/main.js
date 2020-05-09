function preload(){
    let assets = {
        images: {
            fighter: "../assets/fighter.png",
            fighter_missile: "../assets/fighter_missile.png",
            fighter_torpedo: "../assets/fighter_torpedo.png",
            mini_fighter: "../assets/mini_fighter.png"
        }
    }
    loadAssets(assets)

}

function main(){
    let canvas = document.querySelector("#game_canvas");
    let ctx = canvas.getContext('2d');
    new Game(canvas).draw(ctx)
}
preload()
main()
