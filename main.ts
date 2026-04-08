/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Illia
 * Created on: Apr 2026
 * This program Rock - Paper - Scissors
*/


let score = 0
let randomNumber = 0

basic.showIcon(IconNames.Happy)
input.onGesture(Gesture.Shake, function () {
    randomNumber = randint(0, 2)
    
    // Rock
    if (randomNumber == 0) {
        basic.showIcon(IconNames.Square)

    }

    // Paper
    if (randomNumber == 1) {
        basic.showIcon(IconNames.Chessboard)
    }

    // Scissors
    if (randomNumber == 2) {
        basic.showIcon(IconNames.Scissors)
    }

    basic.pause(5000)
    basic.clearScreen()
})

// add score if won
input.onButtonPressed(Button.A, function () {
        score += 1
        basic.showNumber(score)
})

// show score
input.onButtonPressed(Button.B, function () {
    basic.showNumber(score)
})
