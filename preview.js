const fs = require('fs')
const map = JSON.parse(fs.readFileSync('./data/map.json').toString())

let output = ''

map.forEach(row => {
    let strRow = ''

    row.forEach(col => {
        if(col === 1){
            strRow += "#"
        }else{
            strRow += " "
        }
        strRow += " "
    })

    output += strRow+'\n'
    
})

console.log(output)