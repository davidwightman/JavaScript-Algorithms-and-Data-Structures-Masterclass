function validAnagram (str1, str2) {
    let counter1 = {}
    let counter2 = {}
    for (let val of str1){
        if (counter1[val] === undefined) {
           counter1[val] = 1
           } else {
        counter1[val]++
           }
    }
    for (let val of str2){
        if (counter2[val] === undefined) {
            counter2[val] = 1
            } else {
        counter2[val]++
            }
    }
    for (let key in counter1){
        if (!(key in counter2)) {
            return false
        }
        if (counter1[key] !== counter2[key]){
            return false
        }
    }
    return true
}
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'naagram')) // true