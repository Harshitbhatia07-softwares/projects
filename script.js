const billAmount = document.getElementById("billAmount")
const tipAmount = document.getElementById("tipPercentage")
const TotalAmount = document.getElementById("total")

function Calculates()
{
    const billPay = billAmount.value;
    const tipPay = tipAmount.value;
    const totalPaid = billPay * (1 + tipPay / 100) ;
    TotalAmount.innerText = totalPaid;
}