let allNames = [];
let allFees = [];
let allReps = [];
let total = "";

function returnText() {

    let name = document.getElementById("expensesName").value;
    let fee = document.getElementById("expensesValue").value;
    let rep = document.getElementById("expensesTime").value;

    allNames.push(name);
    allFees.push(fee);
    allReps.push(rep);

    total += name + ": $" + fee + ", " + rep + "x per year <br>";

    document.getElementById("expenses").innerHTML = total;
}