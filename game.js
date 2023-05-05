// Import functions from other modules
import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersect } from "./snake.js"
import { update as updateFood, draw as drawFood } from "./food.js"
import { outsideGrid } from './grid.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')
const startMenu = document.getElementById('start-menu')
const startButton = document.getElementById('start-button')

// Game loop that tells browser when to render next frame
function main(currentTime) {
    // If the game is over, asks the player to start again
    if (gameOver) {
        startMenu.style.display = 'flex'
        startButton.innerText = 'Restart Game'
        return
       return
    }

    // Requests the next frame
    window.requestAnimationFrame(main)
    const secondSinceLastRender = (currentTime - lastRenderTime) / 1000

    // Only updates if the specified time has passed
    if (secondSinceLastRender < 1 / SNAKE_SPEED) return

    // Update the game state and render the game board
    console.log('Render')
    lastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

// This tracks changes made to the snake and food
function update() {
    updateSnake()
    updateFood()
    checkDeath()
}

// This displays the gameboard with the snake and food
function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

// This tracks the players deaths
function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersect()
}