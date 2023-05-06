/** Importing modules */
import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersect } from "./snake.js"
import { update as updateFood, draw as drawFood } from "./food.js"
import { outsideGrid } from './grid.js'

/** Variables **/
let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

/**Game loop that tells browser when to render next frame */
function main(currentTime) {
    // Check if game over
    if (gameOver) {
        // Ask player if they want to restart
       if (confirm('You lost. Press ok to restart.')) {
        window.location = '/'
       }
       return
    }
    // Request next frame
    window.requestAnimationFrame(main)
    const secondSinceLastRender = (currentTime - lastRenderTime) / 1000
    // Limit game frame rate to speed of snake
    if (secondSinceLastRender < 1 / SNAKE_SPEED) return

    // Update render time
    console.log('Render')
    lastRenderTime = currentTime

    // Update game state
    update()
    draw()
}

// Request intial frame
window.requestAnimationFrame(main)

// Tracks changes made to the snake and food
function update() {
    updateSnake()
    updateFood()
    checkDeath()
}

// Displays the gameboard and changes made to it */
function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

// Tracks if the player has died */
function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersect()
}