const fs = require('fs')
const puzzle_input_string = fs.readFileSync('input.txt', 'utf8');

let max1 = 0
let max2 = 0
let max3 = 0

eleves = puzzle_input_string.split('\r\n\r\n')

eleves.forEach(elve => {
    calories = elve.split('\r\n').reduce((sum, a) => sum + Number(a), 0);
    if(calories > max1)
    {
        max3 = max2
        max2 = max1
        max1 = calories
    }else if(calories > max2){
        max3 = max2
        max2 = calories
    }else if(calories > max3){
        max3 = calories
    }
    
})    
console.log(max1+max2+max3)

