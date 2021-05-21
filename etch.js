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
            tile.classList.add("filled");
        });
    }
}

function unfillBoard() {
    let tiles = document.getElementsByClassName("tile");
    for (let i=0; i < tiles.length; i++)
        tiles[i].classList.remove("filled");
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

initGame(16);
