let lastRenderTime = 0

/**Game loop that tells browser when to render next frame */
function main(currentTime) {
    const secondSinceLastRender = (currentTime - lastRenderTime) / 1000
    window.requestAnimationFrame(main)
    lastRenderTime = currentTime
    console.log(secondSinceLastRender)
}

window.requestAnimationFrame(main)