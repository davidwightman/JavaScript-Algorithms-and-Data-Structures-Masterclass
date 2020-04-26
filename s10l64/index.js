function stringSearch(str, pattern) {
    var count = 0;
    // loop over the longer string
    for (var i = 0; i< str.length; i++ ){
        // loop over the shorter string
        for (var j = 0; j < pattern.length; j++) {
            if (pattern[j] !== str[i +j]) {
                break;
            }
            if (j === pattern.length -1) {
                count++;
            }
        }
    }
    
    // if the characters don't match, break out of the inner loop
    // if the characters do match, keep going
    // if you complete the linner loop and find a match incremennt the count of getMatchedCSSRules
    return count
}
console.log(stringSearch("lorie lol lololed", "lolol"))