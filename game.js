/** Snake code linked */
import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersect } from "./snake.js"
import { update as updateFood, draw as drawFood } from "./food.js"
import { outsideGrid } from './grid.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

/**Game loop that tells browser when to render next frame */
function main(currentTime) {
    if (gameOver) {
       if (confirm('You lost. Press ok to restart.')) {
        window.location = '/'
       }
       return
    }

    window.requestAnimationFrame(main)
    const secondSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondSinceLastRender < 1 / SNAKE_SPEED) return


    console.log('Render')
    lastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

/**This tracks changes made to the snake and food */
function update() {
    updateSnake()
    updateFood()
    checkDeath()
}

/**This displays the gameboard and changes made to it */
function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

/**This tracks the players deaths */
function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersect()
}