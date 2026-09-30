// SpendWise JavaScript Foundation

// Step 2: Store budgeting information
const appName = "SpendWise";

let budget = 50000;
let expenseName = "Lunch";
let expenseAmount = 500;


// Step 3: Collect user input
budget = Number(prompt("Enter your budget:"));
let expense = Number(prompt("Enter your expense:"));


// Step 4: Calculate the balance
let remaining = budget - expense;


// Step 5: Create reusable functions

function calculateBalance(budget, expense) {
    return budget - expense;
}

function calculateWeeklyBudget(monthlyBudget) {
    return monthlyBudget / 4;
}


// Step 6: Store returned results inside variables

let balance = calculateBalance(budget, expense);

let weeklyBudget = calculateWeeklyBudget(budget);


// Step 7: Display all results in the console

console.log("===== SpendWise Budget Summary =====");
console.log("App Name:", appName);
console.log("Budget:", budget);
console.log("Expense Name:", expenseName);
console.log("Expense Amount:", expenseAmount);
console.log("Entered Expense:", expense);
console.log("Remaining Balance:", balance);
console.log("Weekly Budget:", weeklyBudget);