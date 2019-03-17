const naive = (str, subString) => {
    let countOfMatches = 0
    //loop over the larger string
    for(let i = 0; i < str.length; i++){
        //loop over the shorter string
        for (let j = 0; j < subString.length; j++){
            //if the characters don't match, break out of the inner loop
            if (str.charAt(i + j) !== subString.charAt(j)) {
               break
            } else {
                // if the characters do match keep going
                
                
                //if you complete the inner loop and find a match increment the count of matches
                if (j === subString.length -1) {
                    countOfMatches++
                }
            }
        }   
    }
    return countOfMatches
}
console.log(naive('hi there i am damid', 'am'))