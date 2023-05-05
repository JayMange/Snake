// Code for the Snakes body

import { getInputDirection } from "./input.js"

// The speed of the snake in grid units per second
export const SNAKE_SPEED = 5
// This keeps track of the snakes body
const snakeBody =[{ x: 11, y: 11 }]
let newSegments = 0

// Code for moving the snake body
export function update() {
    addSegments()

    const inputDirection = getInputDirection()
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

// Start position of snake 
export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}

// This tracks the number of segments that ned to be added to the snake
export function expandSnake(amount) {
    newSegments += amount
}

// This checks the position of the snakes body while ignoring the head.
export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false
        return equalPositions(segment, position)
    })
}

// This returns the position of the snakes head segment
export function getSnakeHead() {
    return snakeBody[0]
}

// This checks to see if the snake head has intersected with any part of the snakes body
export function snakeIntersect() {
    return onSnake(snakeBody[0], { ignoreHead: true })
}

//  This function returns true if two positions are equal (i.e., have the same x and y coordinates)
function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

// This code makes the snake bigger when it eats food
function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }

    newSegments = 0
}