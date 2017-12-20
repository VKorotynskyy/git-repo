document.addEventListener("DOMContentLoaded", function(e) {
    alert("hello");
 
});



var vowelMatches = /[euoia]/g;
var source = "The kittens don't have mittens.";
var match;
while(match = vowelMatches.exec(source)) {
    console.log(`${match[0]} was found at ${match.index} index`);
}

function filter_list(l) {
var res = [];
            for(var item=0;item<l.length;item++)
            {
                if (typeof l[item] === "number")
                {
                    res.push(l[item]);
                }
  
            }
            return res;
}

function filter_list(l) {
    return l.filter(v => typeof v == "number")
}


console.log(sumArray([6, 2, 1, 8, 10]));

function sumArray(array) {
    let l = array.length;
    let newArr =[];
// for(let i=0; i< l; i++) {
//     if (array[i] == Math.max(array)) {
//         return null;
//     } else if (array[i] == Math.min(array)) {
//         return null;
//     } else {
//         newArr.push(array[i]);
//     }
//     }
console.log(sumArray([6, 2, 1, 8, 10]));

function sumArray(array) {
    let max = Math.max.apply(null, array);
    let min = Math.min.apply(null, array);
    let l = array.length;
    let newArr =[];
    for(let i=0; i< l; i++) {
        array[i] !== min || max ? parseFloat(newArr +=(array[i])) : array[i].slice();
        // if (array[i] === max) {
        //     return false;
        // } else if (array[i] === min) {
        //     return false;
        // } else {
        //     newArr.push(array[i]);
        // }
    } 
    return newArr;
}