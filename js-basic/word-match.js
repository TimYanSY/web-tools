const match = (first, second) => {
    //first or second falsy return null
    if (!first) {
        return null;
    }
    if (!second) {
        return null;
    }
    //different length, return null
    if (first.length != second.length) {
        return null;
    }
    //transfet first and second to lowercase
    first = first.toLowerCase();
    second = second.toLowerCase();
    //do the match
    let count = wordMatch(first, second);
    //return count
    return count;
};

function wordMatch(first, second) {
    let dict = new Object();
    for (let i = 0; i < first.length; i++) {
        if(dict[first.charAt(i)]) {
            dict[first.charAt(i)] = dict[first.charAt(i)] + 1;      
        } else {
            dict[first.charAt(i)] = 1;
        }
    }
    
    console.log(dict);
    
    let count = 0;
    for (let i = 0; i < second.length; i++) {
        if(dict[second.charAt(i)]){
            dict[second.charAt(i)] = dict[second.charAt(i)] - 1;
            count++;      
        } else {
           continue; 
        }
    }
    return count;
}

module.exports = match;
