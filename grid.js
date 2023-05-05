const GRID_SIZE = 21

// Randomizes food location on gameboard 
export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) +1,
        y: Math.floor(Math.random() * GRID_SIZE) +1
    }
}

// This function checks if the snake has gone outside of the grid available and returns "true" if it falls outside the grid and "false" if inside the grid
export function outsideGrid(position) {
    return (
        position.x < 1 || position.x > GRID_SIZE ||
        position.y < 1 || position.y > GRID_SIZE
    )
}