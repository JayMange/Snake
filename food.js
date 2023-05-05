// These are imports from snake.js and grid.js
import { onSnake, expandSnake } from "./snake.js"
import { randomGridPosition } from "./grid.js"

// This declares a variable food and assigns it a random position returned by the getRandomFoodPosition() function
let food = getRandomFoodPosition()
const INITIAL_EXPANSION_RATE = 1
let currentExpansionRate = INITIAL_EXPANSION_RATE

// This function checks if the snake has collided with the food, and calls the expandSnake() function to make the snake bigger and assigns a new position to the food
export function update() {
    if (onSnake(food)) {
        expandSnake(currentExpansionRate)
        currentExpansionRate++
        food = getRandomFoodPosition()
    }
}

// This is for the start position of food
export function draw(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}

// This randomizes the food position
function getRandomFoodPosition() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}