const fs = require('fs')
const rucksacks = fs.readFileSync('input.txt', 'utf8');

let count = 0
rucksacks.split("\r\n").forEach(rucksack => {
    const first_half = rucksack.slice(0, Math.ceil(rucksack.length / 2))
    const second_half = rucksack.slice(Math.ceil(rucksack.length / 2))
    const deplicated = {}
    for(let c of first_half){
        if(second_half.includes(c) && !deplicated[c])
        {
            deplicated[c] = true
            count+=score(c)
        }
    }
} )


function score(s){
    n = s.toLowerCase().charCodeAt(0) - 97 + 1
    if(s.toUpperCase() == s){
      return n + 26
    }else
    return n
}


console.log(count)
