"use strict"
let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(scores) {
    let allScores = scores.length
    let sum = 0
    let average = 0
    for (let i = 0; i < allScores; i += 1) {
        sum += scores[i];
        average = sum / allScores
    }
    console.log(average.toFixed(2));
}
getAverage(myScores)
getAverage(yourScores)