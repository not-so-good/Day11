//Only change code below this line
var myNestedArray = [];

function myNestedFunction(arr) {
    myNestedArray.push(...arr);
    return myNestedArray;
}

//Only change code above this line

console.log(myNestedFunction([["Toblerone", 5], ["Milka", 3]])); //Change this line
module.exports = myNestedFunction;