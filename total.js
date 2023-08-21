let expenseString = "";

function total_returnText() {

    // print (required expenses * how many times per year) / 52 --> per week
    let allExpenses = 0;
    let count = 0;
    let name = "";

    for (let i = 0; i<allNames.length; i++){
        allExpenses = allFees[i] * allReps[i];
        count += 1;
        name = allNames[i];
    }
    expenseString += name + count + lExpenses

    // print (monthly payments * payb) / 52 --> per week
      
}

let monthlyString = "";

function interest_returnText() {
    let interestDec = 0;
    let totalPayments = 0;
    let monthlyPayment = 0;
    for (let i = 0; i<allAmounts.length; i++){
        interestDec = (allInterests[i]/100)/allCompounds[i];
        totalPayments = allPaybacks[i]*allTerms[i];
        monthlyPayment = allAmounts[i] / ((((1+interestDec)**totalPayments)-1)/(interestDec*((1+interestDec)**totalPayments)));
    }
    monthlyString += monthlyPayment + "<br>";
    document.getElementById("test").innerHTML = monthlyString;
}