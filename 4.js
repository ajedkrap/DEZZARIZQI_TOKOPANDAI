function triangle(string) {
  let row = string.length
  let result = ""
  for (let a = row; a >= 0; a--)  {
    for (let b = a; b >= 0; b--)    {
      result += " "
    }
    if (a % 2 === 0) {
      for (let c = a; c < row; c++) {
        result += string.charAt(c)
      }
    } else {
      for (let c = row; c >= a; c--) {
        result += string.charAt(c)
      }

    }
    result += "\n"
  }
  console.log(result)
}

  triangle("javascript")
