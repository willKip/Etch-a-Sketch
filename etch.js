function initTiles (gridSize) {
    // handle out of range sizes; over 100 risks performance issues
    if (gridSize > 100) gridSize = 100;
    else if (gridSize <= 0) gridSize = 1;

    let board = document.querySelector(".container");

    // Clear tiles from board
    while (board.firstChild) board.removeChild(board.firstChild);

    board.style.setProperty("--tileSize", gridSize)

    for (let x = 0; x < gridSize**2; x++) {
        let tile = document.createElement("div");
        tile.className = "tile";

        board.appendChild(tile);
        tile.addEventListener("mouseover", () => {
            fillTile(tile);
        });
    }
}

// On mouse hover, increment the hsl hue of tile by 5, from 0 to 360
function fillTile(tile) {
    tile.style.setProperty("background-color",
        `hsl(${tileColorValue}, 90%, 70%)`);
    tileColorValue = (tileColorValue + 5) % (360 + 5);
}

function unfillBoard() {
    let tiles = document.getElementsByClassName("tile");
    for (let i=0; i < tiles.length; i++)
        tiles[i].style.setProperty("background-color", "white");
    tileColorValue = 0;
}

function changeGridSize() {
    let newSize = prompt("Enter the new grid size (1-100)", "16");

    if (getComputedStyle(document.querySelector(".container"))
        .getPropertyValue("--tileSize") === newSize)
        unfillBoard();
    else
        initTiles(newSize);
}

function initGame(initSize) {
    document.querySelector("#resetButton").addEventListener(
        "click", ()=>{unfillBoard();});
    document.querySelector("#changeGridSize").addEventListener(
        "click", ()=>{changeGridSize();});

    initTiles(initSize);
}

let tileColorValue = 0;
initGame(16);
