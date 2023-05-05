let lastRenderTime = 0
const SNAKE_SPEED = 2

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

}

function draw() {
    
}