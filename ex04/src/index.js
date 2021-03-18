// Create a monitorListArray array here
var monitorListArray = ["Apple", "Peach", "Berry"];
// End of monitorListArray array

function myMonitorsFunction(arr) {
    var newMonitorsList = [...arr];
       //Only change code below this line
    var monitorsList = [];
    for(var i = 0; i < monitorListArray.length; i++){
        var temp = [];
        temp.push(newMonitorsList[i], i+1);
        monitorsList.push(temp);
     }
return monitorsList;   
    //Only change code above this line
}

console.log(myMonitorsFunction(monitorListArray)); //Change this line
module.exports = myMonitorsFunction;