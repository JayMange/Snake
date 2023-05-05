import { onSnake, expandSnake } from "./snake.js"

let food = { x: 10, y: 1 }
const INITIAL_EXPANSION_RATE = 1
let currentExpansionRate = INITIAL_EXPANSION_RATE

export function update() {
    if (onSnake(food)) {
        expandSnake(currentExpansionRate)
        currentExpansionRate++
        food = { x: 20, y: 10 }
    }
}

/** Start position of food */
export function draw(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}