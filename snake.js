/* Code for the Snakes body **/

import { getInputDirection } from "./input.js"

// Snake speed
export const SNAKE_SPEED = 5
// Starting postition
const snakeBody =[{ x: 11, y: 11 }]
let newSegments = 0

// Code for moving the snake body
export function update() {

    // Makes snake bigger when it eats food
    addSegments()

    // Get user input direction
    const inputDirection = getInputDirection()

    // Update the position of the snake body segments
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    // Move the head of the snake based on user direction
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

// Draw the snake on the game board 
export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}

// Expand the snake by a specified amount
export function expandSnake(amount) {
    newSegments += amount
}

// Check if a given position is on the snake
export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false
        return equalPositions(segment, position)
    })
}

// Get the position of the head of the snake
export function getSnakeHead() {
    return snakeBody[0]
}

// Check if the snake has intersected itself
export function snakeIntersect() {
    return onSnake(snakeBody[0], { ignoreHead: true })
}

// Check if two positions are equal
function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

// Add new segments to the snake body 
function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }

    newSegments = 0
}