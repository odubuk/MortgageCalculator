var term;
var apr;
var amt;
var mPmt;

function getValues(){
    var amt = parseInt(document.getElementById('amt').value);   //The total loan amount entered by the user.
    var apr = parseFloat(document.getElementById('apr').value);   //The interest rate entered by the user.
    var term = parseInt(document.getElementById('trm').value);   //The length of the mortgage (in years) entered by the user.
    var interest = (amt * (apr * .01)) / term;
    if (isNaN(amt) || isNaN(apr) || isNaN(term)){
        alert('Please enter a valid number for each field.');
    }else{
    term *= 12;
    mPmt = ((amt / term) + interest).toFixed(2);
    console.log(mPmt);
    document.getElementById("pmt").innerHTML = "$" + mPmt;
    }
}

function resetPayment(){
    document.getElementById("pmt").innerHTML = "$0.00";
}

document.getElementById('calc').addEventListener('click', getValues)
document.getElementById('reset').addEventListener('click', resetPayment)


