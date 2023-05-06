// Initialize input direction and last input direction
let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

// Listen for keydown events
window.addEventListener('keydown', e => {
    // Change input direction based on key pressed
    switch (e.key) {
        case 'ArrowUp':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: -1 }
            break
        case 'ArrowDown':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: 1 }
            break
        case 'ArrowLeft':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: -1, y: 0 }
            break
        case 'ArrowRight':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: 1, y: 0 }
            break
    }
})

// Get the current input direction
export function getInputDirection() {
    // Update last input direction and return current input direction
    lastInputDirection = inputDirection
    return inputDirection
}