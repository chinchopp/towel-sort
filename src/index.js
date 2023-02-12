module.exports = function towelSort (matrix) {
  let result = []
  if (typeof matrix != 'object'){
    return []
  }
  for (let i = 0; i < matrix.length; i++){
  if (i % 2 != 0){
  matrix[i].reverse()
  }
  }
  matrix.forEach((el) => {
   el.map((elem) => {result.push(elem)})
  })
  return result
}
