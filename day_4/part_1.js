const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf8');


let count = 0

class Section {
    constructor(section) {
        this.from = Number(section[0])
        this.to = Number(section[1])
    }

    fully_contains(other_section ){
        if(other_section.from >= this.from && other_section.to <= this.to  )
        {
          return true
        }
    }
  }

  

input.split("\r\n").forEach(line => {
    pair = line.split(',')
    const section_1 = new Section(pair[0].split('-'))
    const section_2 = new Section(pair[1].split('-'))
    if(section_1.fully_contains(section_2) || section_2.fully_contains(section_1) )
    count += 1
} )

console.log(count)


