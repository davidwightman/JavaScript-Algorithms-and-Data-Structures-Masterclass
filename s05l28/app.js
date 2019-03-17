function validAnagram(word1, word2){
    if (word1.length !== word2.length){
        return false
    }
    let word1Obj = {}
    let word2Obj = {}
    for (let val of word1){
       if (word1Obj[val] === undefined) {
        word1Obj[val] = 1
       } else {
        word1Obj[val]++ 
       }
    }
    for (let val of word2){
        if (word2Obj[val] === undefined) {
         word2Obj[val] = 1
        } else {
         word2Obj[val]++ 
        }
     }
    for (let key in word1Obj){
        if (!(key in word2Obj)) {
            return false
        }
        if (word1Obj[key] !== word2Obj[key]){
            return false
        }
    }
    return true;
}
console.log(validAnagram('rat', 'car')) //false
console.log(validAnagram('qwerty', 'qeywrt')) //true
console.log(validAnagram('texttwisttime', 'timetwisttext')) //true
console.log(validAnagram('awesome', 'awesom')) //false
