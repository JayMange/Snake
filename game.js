/** Snake code linked */
import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from "./snake.js"

let lastRenderTime = 0
const gameBoard = document.getElementById('game-board')

/**Game loop that tells browser when to render next frame */
function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondSinceLastRender < 1 / SNAKE_SPEED) return


    console.log('Render')
    lastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
}

function draw() {
    drawSnake(gameBoard)
}