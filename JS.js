
// putting an amount as budget and distribute them % wise in categories

var bugetinput = document.getElementById("OPEXamt")
var snw = document.getElementById("snw")
var trans = document.getElementById("trans")
var uti = document.getElementById("uti")
var ren = document.getElementById("ren")
var mns = document.getElementById("mns")
var mnr = document.getElementById("mnr")



function bugetdistirbution() {
    let buget = bugetinput.value
    snw.value = buget*20/100
    trans.value = buget*.25
    uti.value = buget*.10
    ren.value = buget*.10
    mns.value = buget*.15
    mnr.value = buget*.20
}


// putting expenses with respect to date and categories

var inputexpenses = document.getElementById("inputexpenses");
var formForInput = document.getElementById("formForInput");
var expensesInTable = document.getElementById("expensesInTable");
var balance = document.getElementById("expinput");

document.getElementById("expbtn").addEventListener("click", function(){
    addExpenses('occured');
});

formForInput.addEventListener("btn", function(event){
    event.preventDefault();
    submitTransaction();
});

function submitTransaction() {
    var idate = document.getElementById("idate").value;
    var categorytype = document.getElementById("categorytype").value;
    var amountinput = parseFloat(document.getElementById("amountinput").value);
    var idabillnuminput = document.getElementById("billnuminput").value;

    // creating row
    var newRow = expensesInTable.insertRow();

    // creating new cells for date, category, amount, and billnumber
    var dateCell = newRow.insertCell(); 
    var categoryCell = newRow.insertCell();
    var amountCell = newRow.insertCell(); 
    var billnumberCell = newRow.insertCell(); 
     
    document.getElementById("idate").value ="";
    document.getElementById("categorytype").value ="";
    document.getElementById("amountinput").value ="";
    document.getElementById("billnuminput").value ="";
 
    inputexpenses.style.display = "none";
     
}

function calculationOfBlance() {
    var totalBudget = 0;
    var totalExpense = 0;

    for (let i = 0; i < expensesInTable.rows.length; i++) {
        var row = expensesInTable.rows[i];
        var amount = parseFloat(row.cells[2].textContent);
        
        if (row.cells[3].textContent === "Salaries & Wages") {
            totalExpense += amount;
        } else if (row.cells[3].textContent === "Transportation"){
            totalExpense += amount;
        }

        
        
    }
}

