var allNames = [];
var allFees = [];
var allReps = [];
var total = "";
let expensesString = "";


function expenses_returnText() {

    let name = document.getElementById("expensesName").value;
    let fee = document.getElementById("expensesValue").value;
    let rep = document.getElementById("expensesTime").value;

    allNames.push(name);
    allFees.push(fee);
    allReps.push(rep);

    total += name + ": $" + fee + ", " + rep + "x per year <br>";
    document.getElementById("expenses").innerHTML = total;

    expensesString += name + ": $" + ((fee*rep)/52) + " per week<br>"; 
    document.getElementById("all_expenses").innerHTML = expensesString;

}