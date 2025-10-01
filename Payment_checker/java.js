
const mycheckbox = document.getElementById("mycheckbox");
const visabtn = document.getElementById("visabtn");
const masterbtn = document.getElementById("masterbtn");
const paypalbtn = document.getElementById("paypalbtn");
const subresult = document.getElementById("subresult");
const paymentresult = document.getElementById("paymentresult");
const submitbtn = document.getElementById("submitbtn");

submitbtn.addEventListener("click", function(even) {
    even.preventDefault();
    if (mycheckbox.checked){
        subresult.innerHTML = "you have subscribed successfully";
    }else{
        subresult.innerHTML = "You are not subscribed";
    }

    if (visabtn.checked){
        paymentresult.innerHTML = "You have selected Visa as your payment method";
    }else if (masterbtn.checked){
        paymentresult.innerHTML = "You have selected MasterCard as your payment method";
    }else if (paypalbtn.checked){
        paymentresult.innerHTML = "You have selected PayPal as your payment method";
    }else{
        paymentresult.innerHTML = "You have not selected any payment method";   
    }
});

