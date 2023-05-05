// This defines variables to store the current input direction and the last input direction.
let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

// Add an event listener for keydowns
window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            // This prevents the snake from reversing direction
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

export function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection
}