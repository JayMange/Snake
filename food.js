import { onSnake, expandSnake } from "./snake.js"
import { randomGridPosition } from "./grid.js"

/**Code for food and making the snake bigger */
let food = getRandomFoodPosition()
const INITIAL_EXPANSION_RATE = 1
let currentExpansionRate = INITIAL_EXPANSION_RATE

export function update() {
    if (onSnake(food)) {
        expandSnake(currentExpansionRate)
        currentExpansionRate++
        food = getRandomFoodPosition()
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

/**Randomizes food position */
function getRandomFoodPosition() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}