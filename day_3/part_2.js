const fs = require('fs')
const rucksacks = fs.readFileSync('input.txt', 'utf8');

let count = 0
let current_group = []
rucksacks.split("\r\n").forEach(rucksack => {
    current_group.push(rucksack)    
    if(current_group.length == 3){
      const deplicated = {}
      const [first,second,third] = current_group
      for(let c of first){
        if( !deplicated[c] && second.includes(c) && third.includes(c) )
        {
            deplicated[c] = true
            count+=score(c)
        }
      }
      current_group.length = 0
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
