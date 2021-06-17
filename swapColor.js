const fs = require('fs')
const map = JSON.parse(fs.readFileSync('./data/map.json').toString())

let black = 0
let white = 0

map.forEach((row,y) => {

    row.forEach((px,x) => {
        if(px === 0){
            black++
            map[y][x] = 1
        }else{
            white++
            map[y][x] = 0
        }
    })
})

console.log(`Before:\nblack:${black}\nwhite: ${white}`)
fs.writeFileSync('./data/map.json',JSON.stringify(map))