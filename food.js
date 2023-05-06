import { onSnake, expandSnake } from "./snake.js"
import { randomGridPosition } from "./grid.js"

// Set initial postition of food
let food = getRandomFoodPosition()

// Set expand rate and track expansion
const INITIAL_EXPANSION_RATE = 1
let currentExpansionRate = INITIAL_EXPANSION_RATE

// Update function for checking if snake eats food
export function update() {
    if (onSnake(food)) {
        expandSnake(currentExpansionRate)
        currentExpansionRate++
        food = getRandomFoodPosition()
    }
}

// Draw function for rendering the food on the game board
export function draw(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}

// Randomizes food position
function getRandomFoodPosition() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}