console.log("video 27")

const scores = [10, 8, 3, 7, 5]

//read data
// scores.forEach((element, index) => {
//     console.log("index = ", index, " value = ", element)
// })

//modify data
const scoresx2 = scores.map((value, index) => {
    return value * 2; 
})

const otherScoresx2 = scores.map((value, index) => value * 2)

console.log("scores = ", scores)
console.log("scoresx2 = ", scoresx2)
console.log("scoresx2 = ", otherScoresx2)