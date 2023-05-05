const GRID_SIZE = 21

/**Randomizes food location on gameboard */
export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) +1,
        y: Math.floor(Math.random() * GRID_SIZE) +1
    }
}