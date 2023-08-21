
let tot = "";
// making arrays
var allAmounts = [];
var allTerms = [];
var allInterests = [];
var allCompounds = [];
var allPaybacks = [];

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
    tot += "$" + amount + ", " + term + " month term, " + interest + "% interest, compounded " + comp + " times per year, paid back " + payb + " times per year.<br>";
    document.getElementById("loans").innerHTML = tot;
}