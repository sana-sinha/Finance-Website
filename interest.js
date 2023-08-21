let allAmounts = [];
let allTerms = [];
let allInterests = [];
let allCompounds = [];
let allPaybacks = [];

let tot = "";

function returnText() {

    let amount = document.getElementById("loanAmount").value;
    let term = document.getElementById("loanTerm").value;
    let interest = document.getElementById("interestRate").value;
    let comp = document.getElementById("compound").value;
    let payb = document.getElementById("payback").value;

    allAmounts.push(amount);
    allTerms.push(term);
    allInterests.push(interest);
    allCompounds.push(comp);
    allPaybacks.push(payb);

    tot += "$" + amount + ", " + term + " month term, " + interest + "% interest, compounded " + comp + ", paid back every " + payb + "<br>";

    document.getElementById("loans").innerHTML = tot;
}