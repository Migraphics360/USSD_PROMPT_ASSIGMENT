// let opr = prompt("welcome to calculator\nyou have to select an operator then two other number.\n Add) Addition, \n Sub) Substraction, \n Div) Division \n Mul) Multiplication, \n Modu) Modulus")
git 
// let num1 = parseInt(prompt("enter first number"))
// let num2 = parseInt(prompt("enter second number"))

// //Introduction to conditional statement

// if (opr === "Add") {
//     let ans = num1 + num2
//     let message = "Addition of " + num1 + " and " + num2 + " is =" + ans
//     alert(message)
// } else if (opr === "Sub") {
//     let ans = num1 - num2
//     let message = "Substraction of " + num1 + " and " + num2 + " is =" + ans
//     alert(message)
// } else if (opr === "Mul") {
//     let ans = num1 * num2
//     let message = "Multiplication of " + num1 + " and " + num2 + " is =" + ans
//     alert(message)
// } else if (opr === "Div") {
//     let ans = num1 / num2
//     let message = "Division of " + num1 + " and " + num2 + " is =" + ans
//     alert(message)
// } else if (opr === "Modu") {
//     let ans = num1 % num2
//     let message = "Multiplication of " + num1 + " and " + num2 + " is =" + ans
//     alert(message)
// } else {
//     alert("Please reload and select a valid operator")
// }




let accBal = 5000;

let ussd = prompt("Please enter ussd code", "*770#");
if (ussd === "*770#") {
    prompt("1) MTN-NG \n 2) Airtel NG")

} else {
    prompt("enter the correct code", "*770#")
}


let menu1 = prompt("ALERT!!!\nPlease do not disclose your Fidelity Bank Online\nBanking Password/Token. ATM PIN or BVN to\nanyone. We will never ask for it.\n\nEnter 1 to proceed")
let menu2 = prompt("Selet Menu.\n1> Open Account\n 2> Balance \n 3> Airtime \n 4> Transfer \n 5> Cardless Withdrawal \n 6> Bill Payments \n 7> FastLoan \n 8> Collections \n 9> Next")
if (menu2 === "3") {
    prompt("Select phone to recharge\n 1> This Phone \n 2> Another phone")
    let Airtime = parseInt(prompt("enter amount"));
    let re = accBal - Airtime
    if (re === accBal - Airtime) {
        prompt("Confirm airtime recharge for 08140255664 \n 1> Yes \n 2> No")

    } if (re === accBal - Airtime == "1") {
        alert("Recharge Sucessful\nyour account balance is " + re);
    } else {
        alert("dail *770#")
    }


} else if (menu2 === "4") {
parseInt(prompt("enter amount")); 
} if (menu2 === "4") {
   prompt("Enter destination account")

// let transfer = parseInt("number")
// let currBal = accBal-transfer
//     if(currBal === accBal-transfer == "number"){
        alert("Transaction Successful")

    }else{
        alert("dail *770#")
    }















