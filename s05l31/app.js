function countUniqueValues(arr) {
    let totalNumber = 0;
    for (let i =0; i < arr.length +1 ; i++) {
    if (arr[i] !== arr[i +1]){
        totalNumber = totalNumber +1;
    }
}
    return totalNumber;
}

// function countUniqueValues(arr) {
//    let pI = 0;
//    let pJ = 0;
//  const newArr = arr.map(item => {
//      if(item === arr[pI +1]){

//         arr.splice(pI, 1, pI)
//          pI++
        
//      }
   
//  })
//   return arr.length
// }

console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([1, 1, 1, 1, 2])) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) //7
