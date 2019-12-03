function validAnagram(a, b) {
    if (a.length !== b.length) {
        return false
    }
    const aObject = {}
    const bObject = {}
    for( let i of a) {
        aObject[i] = aObject[i] ? aObject[i] + 1 : 1
    }
    for( let j of b) {
        bObject[j] = bObject[j] ? bObject[j] + 1 : 1
    }

    for (let i in aObject) {
        if (aObject[i] !== bObject[i]) {
            return false
        }
    }
    return true
}
console.log(validAnagram('', ''))
console.log(validAnagram('aaz', 'zza'))
console.log(validAnagram('anagram', 'nagaram'))
console.log(validAnagram('rat', 'car'))
console.log(validAnagram('awesome', 'awesom'))