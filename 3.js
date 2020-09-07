function changeVocal(string){
  let split = []
  // let split = string.split('')
  for (let a = 0; a < string.length; a++){
    split.push(string.charAt(a))
  }
  let vocal = ["a","i","u","o","e"]
  let step = 0
  for(let x = 0; x < split.length; x++ ){
    for(let y = 0; y < vocal.length; y++){
      if(split[x] === vocal[y]){
        if((step % 2) === 0){
          split[x] = "$"
        } else {
          split[x] = "#"
        }
        step++
      }
    }
  }
  return split.join('')
}


let kata = "i love javascript"

console.log(changeVocal(kata))
