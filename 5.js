function naikAngkot(arrPenumpang) {
  const rute = ['A', 'B', 'C', 'D', 'E', 'F']
  let naikDari
  let tujuan
  let bayar = 0
  let result = []
  for (let x = 0; x < arrPenumpang.length; x++) {
    if (arrPenumpang[x].length < 1) {
      return result
    } else {
      const dataPenumpang = {}
      const [penumpang, asal, ke] = arrPenumpang[x]
      let a, b = 0
      for (let i = 0; i< rute.length; i++){
        if (rute[i] === asal){
          a = i
        }
        if(rute[i]=== ke){
          b = i
        }
      }
      dataPenumpang.penumpang = penumpang
      dataPenumpang.naikDari = asal
      dataPenumpang.tujuan = ke
      dataPenumpang.bayar= Math.abs(a-b)*2000
      result.push(dataPenumpang)
    }
  }
  return result
}



console.log(naikAngkot([
  ['Dimitri', 'B', 'F'],
  ['Icha', 'A', 'B']
]))
