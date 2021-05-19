function initTiles () {
    const GRID_SIZE = 16;

    for (let x = 0; x < GRID_SIZE**2; x++) {
        let tile = document.createElement("div");
        tile.className = "tile";

        document.querySelector(".container").appendChild(tile);
        tile.addEventListener("mouseover", () => {
            tile.classList.add("filled");
        });
    }
}

function resetBoard() {
    let tiles = document.getElementsByClassName("tile");
    for (let i=0; i < tiles.length; i++) {
        tiles[i].classList.remove("filled");
    }
    console.log("reset");
}

const resetBtn = document.querySelector("#resetButton");
resetBtn.addEventListener("click", ()=>{
    resetBoard();
});

initTiles();
