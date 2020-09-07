function triangle(){
  let row = 6
  let content = 1
  let result = ""
  for (let a = row; a > 0 ; a-- ){
    for (let b = a-1 ; b > 0; b--){
      result += " "
    }
    for (let c = 0; c < content; c++){
      if (c % 2 === 0){
        result += "X"
      } else {
        result += "O"
      }
    }
    content = content + 2
    result += "\n"
  }
  console.log(result)
}

triangle()
