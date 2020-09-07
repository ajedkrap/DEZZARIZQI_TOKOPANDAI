function sittingArrangement (persons, division) {
  let arrangement = []
  if (division < 1) return "Invalid Number"
  else {
    const totalPerson = persons.length
    let step = 0
    while (step < persons.length){
      let seat = []
      for (let i = 0; i < division; i++){
        seat.push(persons[step])
        step++
      }
      arrangement.push(seat)
    }
  }
  for (let x = 0; x < arrangement.length; x++){
    for (let y = 0; y < arrangement[x].length; y++){
      if (typeof arrangement[x][y] === 'undefined'){
        arrangement[x][y] = "Kursi Kosong"
      }
    }
  }
  return arrangement
}

const arr1 = sittingArrangement([ 'dewi', 'shinta', 'ani', 'agus', 'puji' ], 2)
const arr2 = sittingArrangement([ 'Yosia', 'asgard', 'adrisa' ], 3)
const arr3 = sittingArrangement([ 'Lukman', 'Adam', 'Dimas', 'Hansin', 'Orion' ], 4)

console.log(arr1)
console.log(arr2)
console.log(arr3)
