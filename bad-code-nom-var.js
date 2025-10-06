let userAccountBalance = 1000;
let withdrawalAmount;
let accountServiceFee = 50;
let minimumAccountBalance = 100;

function processWithdrawal(requestedAmount) {
    withdrawalAmount = requestedAmount;
    
    if (userAccountBalance >= withdrawalAmount + accountServiceFee) {
        userAccountBalance = userAccountBalance - withdrawalAmount - accountServiceFee;
        console.log("Withdrawal successful. New balance: " + userAccountBalance);
    } else if (userAccountBalance >= withdrawalAmount) {
        userAccountBalance = userAccountBalance - withdrawalAmount;
        console.log("Withdrawal successful but no service fee applied. New balance: " + userAccountBalance);
    } else {
        console.log("Insufficient funds");
    }
    
    if (userAccountBalance < minimumAccountBalance) {
        console.log("Warning: Account balance is below minimum threshold");
    }
}

// Test the function
processWithdrawal(200);
processWithdrawal(800);
processWithdrawal(100);
