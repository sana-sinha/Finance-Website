function returnText() {
    let name = document.getElementById("expensesName").value;
    let fee = document.getElementById("expensesValue").value;
    let rep = document.getElementById("expensesTime").value;
    document.getElementById("expenses").innerHTML = name + fee + rep;
}