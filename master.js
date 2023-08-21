function debt_returntext() {
    let debt = document.getElementById("debt").value;
}

let allNames = [];
let allFees = [];
let allReps = [];
let total = "";

function expenses_returnText() {

    let name = document.getElementById("expensesName").value;
    let fee = document.getElementById("expensesValue").value;
    let rep = document.getElementById("expensesTime").value;

    allNames.push(name);
    allFees.push(fee);
    allReps.push(rep);

    total += name + ": $" + fee + ", " + rep + "x per year <br>";

    document.getElementById("expenses").innerHTML = total;
}

function income_returntext() {
    let income = document.getElementById("income").value;
}


let tot = "";
// making arrays
let allAmounts = [];
let allTerms = [];
let allInterests = [];
let allCompounds = [];
let allPaybacks = [];

function loan_returnText() {

    let amount = parseInt(document.getElementById("loanAmount").value);
    let term = parseInt(document.getElementById("loanTerm").value);
    let interest = parseInt(document.getElementById("interestRate").value);
    let comp = document.getElementById("compound").value;
    let payb = document.getElementById("payback").value;

    if (comp == "monthly"){
        comp = 12;
    }
    else if (comp == "annually"){
        comp = 1;
    }
    else if (comp == "semi-annually"){
        comp = 2;
    }
    else if (comp == "semi-monthly"){
        comp = 24;
    }
    else if (comp == "biweekly"){
        comp = 104;
    }
    else if (comp == "weekly"){
        comp = 52;
    }
    else if (comp == "daily"){
        comp = 365.25;
    }
  
    if (payb == "month"){
        payb = 12;
    }
    else if (payb == "day"){
        payb = 365.25;
    }
    else if (payb == "week"){
        payb = 52;
    }
    else if (payb == "two-weeks"){
        payb = 26;
    }
    else if (payb == "half-month"){
        payb = 24;
    }
    else if (payb == "quarter"){
        payb = 4;
    }
    else if (payb == "six-months"){
        payb = 2;
    }
    else if (payb == "year"){
        payb = 1;
    }

    allAmounts.push(amount);
    allTerms.push(term);
    allInterests.push(interest);
    allCompounds.push(comp);
    allPaybacks.push(payb);

    // printed items! successfully pushed --> arrays
    for (let i = 0; i<allAmounts.length; i++){
        tot += "$" + allAmounts[i] + ", " + allTerms[i] + " month term, " + allInterests[i] + "% interest, compounded " + allCompounds[i] + " times per year, paid back " + allPaybacks[i] + " times per year.<br>";
    }

    document.getElementById("loans").innerHTML = tot;
}

/*
let interestDec = 0;
let totalPayments = 0;
let monthlyPayment = 0;*/

function interest_returnText() {
    /*let interestDec = (interest/100)/comp;
    let totalPayments = payb*term;
    let monthlyPayment = amount / ((((1+interestDec)^totalPayments)-1)/(interestDec*((1+interestDec)^totalPayments)));*/
    let interestDec = 0;
    let totalPayments = 0;
    let monthlyPayment = 0;
    for (let i = 0; i<allAmounts.length; i++){
        interestDec = (allInterests[i]/100)/allCompounds[i];
        totalPayments = allPaybacks[i]*allTerms[i];
        monthlyPayment = allAmounts[i] / ((((1+interestDec)**totalPayments)-1)/(interestDec*((1+interestDec)**totalPayments)));
    }
    document.getElementById("test").innerHTML = monthlyPayment;
}