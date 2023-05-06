const GRID_SIZE = 21

// Randomizes food location on gameboard
export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) +1,
        y: Math.floor(Math.random() * GRID_SIZE) +1
    }
}

// This function checks whether a given position is outside the game board grid
export function outsideGrid(position) {
    return (
        position.x < 1 || position.x > GRID_SIZE ||
        position.y < 1 || position.y > GRID_SIZE
    )
}