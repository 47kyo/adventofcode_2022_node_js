const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf8');


let count = 0
class Section {
    constructor(section) {
        this.ids = {}
        for (var i = Number(section[0]); i <= Number(section[1]); i++) {
          this.ids[i] = true
      }
    }
    overlap(other_section){
      for(const key in this.ids){
        if(other_section.ids[key])
        {
          return true
        }
      }
    }
  }

  

input.split("\r\n").forEach(line => {
    pair = line.split(',')
    const section_1 = new Section(pair[0].split('-'))
    const section_2 = new Section(pair[1].split('-'))
    if(section_1.overlap(section_2))
    count++
} )

console.log(count)


