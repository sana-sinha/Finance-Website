let expenseString = "";

function total_returnText() {

    // print (required expenses * how many times per year) / 52 --> per week
    let allExpenses = 0;
    let name = "";

    for (let i = 0; i<allNames.length; i++){
        allExpenses = (parseInt(allFees[i]) * parseInt(allReps[i]))/52;
        name = allNames[i];
        expenseString += name + ": " + allExpenses + "<br>";
    }

    // print (monthly payments * payb) / 52 --> per week
    document.getElementById("final").innerHTML = expenseString;
}