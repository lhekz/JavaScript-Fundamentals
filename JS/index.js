// User's card information
let mycardInfo = {
    name: "Lhekz Dev",
    accountNo: "2828289090",
    balance: 100000.00, 
    pin: "0012",
    bank: "ACCESS ",
   
};



function transferMoney() {
   
    alert("Welcome to the ATM. Please follow the instructions to transfer money.");


//  Enter PIN
let enteredPin = prompt("Please enter your PIN:");
if (enteredPin === mycardInfo.pin) {}
 else {
    alert("Incorrect PIN. Transaction cancelled.");
    return;
}


let transferOption = prompt("Do you want to:\n1. Withdraw\n2. Transfer");
let withdrawAmount;

switch (transferOption) {
    
        case '1':
            let withdrawAmount = Number(prompt("Enter the amount you wish to withdraw (minimum ₦50):"));
           
            if (withdrawAmount >= 50) {
                if (withdrawAmount <= mycardInfo.accountNo) { 
                    let confirmWithdrawal = confirm(`Proceed with withdraw ₦${withdrawAmount} `);


                    if (confirmWithdrawal) {
                        mycardInfo.accountNo - withdrawAmount;
                        alert(`₦${withdrawAmount} withdraw Transaction Successfully .\nNew Balance: ₦${mycardInfo.balance - withdrawAmount}`);

                    } else {
                        alert("Withdrawal cancelled.");
                    }

                    
                } 
                
                
                else {
                    alert("Insufficient funds in account.");
                }
            } else {
                alert("Invalid amount. Please enter an amount above ₦50.");
            }
            break;
    
            case '2':
                let accountType = prompt(
                    "Please select an account type:\n" +
                    "UBA\n" +
                    "ACCESS\n" +
                    "WEMA\n" +
                    "JAIZ\n" +
                    "POLARIS"
                );
            
                //
                if (mycardInfo.bank.includes(accountType)) {
                    let enteredAccountNo = prompt("Please type the account number to transfer to:");
                    
              
                    if (enteredAccountNo === mycardInfo.accountNo) {
                        alert("Receiver's name: " + mycardInfo.name + "\n" + 
                              "Receiver's account number: " + mycardInfo.accountNo + "\n" + 
                              "Bank name: " + accountType);
                        
let transferAmount = Number(prompt("Enter the amount you wish to transfer (minimum ₦50):"));
    let confirmation = confirm(
    "You are about to transfer ₦" + transferAmount + ".\n" +
    "Current Balance: ₦" + mycardInfo.balance + "\n" +
    "Remaining Balance: ₦" + (mycardInfo.balance - transferAmount) + "\n" +
    "Do you want to proceed?"
);

if (confirmation === false) {
    alert("Transaction cancelled.");
    return;
}
                    
                        
                        if (transferAmount >= 50) {
                            mycardInfo.balance -= transferAmount;
                            alert(`₦${transferAmount} transferred successfully.\nNew Balance: ₦${mycardInfo.balance}`);
                        } 
                        else {
                            alert("Invalid amount. Please enter an amount above ₦50.");
                        }
                    }
                    
                    else {
                        alert("Invalid account number. Transaction cancelled.");
                    }
                } else {
                    alert("Account selection failed. Please try again.");
                }
                break;
            
            default:
                alert("Invalid option selected.");
                break;
}


// let newPage = prompt("Do you want to:\n1. Perform another transaction.  \n2. Exit");

//     switch (newPage) {
//         case '1':
//             transferMoney();
            
//             break;
//         case '2':
//         default:
//             alert("Thank you for using the ATM. Goodbye!");
//             break;
//     }

  
    

    

// // Deduct the transfer amount from the balance
// mycardInfo.balance -= transferAmount;

// // Display the success message with the updated balance
// alert("₦" + transferAmount + " transferred successfully.\n" + 
//       "New Balance: ₦" + mycardInfo.balance);


            function checkAccountBalance() {
            
                alert("₦" + mycardInfo.balance);
               
            }
   

    let user = prompt("Do you want to:\n1. Perform another transaction\n2. Check your account balance\n3. Exit");

    switch (user) {
        case '1':
            transferMoney();


        case '2':
            checkAccountBalance();
            if (checkAccountBalance) {
                alert("₦" + mycardInfo.balance)
                return;
            }
            transferMoney();
          
            
            break;
        case '3':
        default:
            alert("Thank you for using the ATM. Goodbye!");
            break;
    }
}







// Start again
transferMoney();