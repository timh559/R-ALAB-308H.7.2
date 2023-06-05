
class BankAccount {
  static accountNumGenerator = 1000;

  constructor(ownerName, balance) {
    this.ownerName = ownerName;
    this.balance = balance;
    this.accountNumber = BankAccount.accountNumGenerator;
    BankAccount.accountNumGenerator++;
  }
  withdraw(amount) {
    if (amount > 0) {
      if (amount <= this.balance) {
        this.balance = this.balance - amount;
        console.log("===========================================================================");
        console.log(`Hello ${this.ownerName}, You have successfully withdrew ${amount}, your current balance is ${this.balance}`);
        console.log("===========================================================================");
        } else {
        console.log("===========================================================================");
        console.log("You don't have enough funds to withdraw this amount");
        console.log("===========================================================================");
        }
    } else {
        console.log("===========================================================================");
        console.log("Please enter a valid amount");
        console.log("===========================================================================");
    }
  }
  deposit(amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log("===========================================================================");
        console.log(`Hello ${this.ownerName}, You have successfully deposited ${amount}, your current balance is ${this.balance}`);
        console.log("===========================================================================");
    } else {
        console.log("===========================================================================");
        console.log("Please enter a valid amount");
        console.log("===========================================================================");
    }
  }
}
class CheckingAccount extends BankAccount {
    constructor(ownerName, balance, overdraftEnabled) {
        super(ownerName, balance);
        this.overdraftEnabled = overdraftEnabled;
        this.accountType = "Checking";
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance = this.balance - amount;
            console.log("===========================================================================");
            console.log(`Hello ${this.ownerName}, You have successfully withdrew ${amount}, your current balance is ${this.balance}`);
            console.log("===========================================================================");
        } else if (this.overdraftEnabled) {
            this.balance = this.balance - amount;
            console.log("===========================================================================");
            console.log(`Hello ${this.ownerName}, You have successfully withdrew ${amount}, your account is currently overdrawn with a negative balance of ${Math.abs(this.balance)}`);
            console.log("===========================================================================");
        } else {
            console.log("===========================================================================");
            console.log("You currently do not have overdraft enabled");
            console.log("===========================================================================");

        }
    }
}
class SavingsAccount extends BankAccount {
    constructor(ownerName, balance) {
        super(ownerName, balance);
        this.accountType = "Savings";
    }
    withdraw(amount) {
        console.log("===========================================================================");
        console.log("This account is currently not set up for withdrawls");
        console.log("===========================================================================");
    }
}

let customer1 = new BankAccount("Tim", 100);
let customer2 = new BankAccount("Ryan", 0);
console.log(customer1);
console.log(customer2);
customer1.deposit(1000);
customer2.deposit(1000);
console.log(customer1);
console.log(customer2);
customer1.withdraw(10000);
customer2.withdraw(100);
console.log(customer1);
console.log(customer2);

let customer1Checking = new CheckingAccount("Tim", 1000, true);
let customer2Checking = new CheckingAccount("Ryan", 1000, false);
console.log(customer1Checking);
console.log(customer2Checking);
customer1Checking.deposit(1000);
customer2Checking.deposit(1000);
console.log(customer1Checking);
console.log(customer2Checking);
customer1Checking.withdraw(10000);
customer2Checking.withdraw(10000);
console.log(customer1Checking);
console.log(customer2Checking);

let customer1savings = new SavingsAccount("Tim", 1000);
let customer2savings = new SavingsAccount("Ryan", 1000);
console.log(customer1savings);
console.log(customer2savings);
customer1savings.deposit(1000);
customer2savings.deposit(1000);
console.log(customer1savings);
console.log(customer2savings);
customer1savings.withdraw(10000);
customer2savings.withdraw(100);
console.log(customer1savings);
console.log(customer2savings);

