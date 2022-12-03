const fs = require('fs')
const puzzle_input_string = fs.readFileSync('input.txt', 'utf8');

max = 0
eleves = puzzle_input_string.split('\r\n\r\n')

eleves.forEach( elve => {
    calories = elve.split('\r\n').reduce((sum, a) => sum + Number(a), 0);
    if(calories>max)
    {
       max = calories
    }
})

console.log(max)
