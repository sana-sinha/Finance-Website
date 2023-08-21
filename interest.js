let monthlyString = "";
var allPayments = [];

function interest_returnText() {
    let interestDec = 0;
    let totalPayments = 0;
    let monthlyPayment = 0;
    for (let i = 0; i<allAmounts.length; i++){
        interestDec = (allInterests[i]/100)/allCompounds[i];
        totalPayments = allPaybacks[i]*allTerms[i];
        monthlyPayment = allAmounts[i] / ((((1+interestDec)**totalPayments)-1)/(interestDec*((1+interestDec)**totalPayments)));
        allPayments.push(monthlyPayment);
    }
    monthlyString += monthlyPayment + "<br>";
    document.getElementById("test").innerHTML = monthlyString;
}