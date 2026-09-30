# SpendWise

## Project Description

SpendWise is a simple budget tracking web application. It allows users to enter their budget and expenses and calculates their remaining balance and weekly budget using JavaScript.

The project demonstrates basic JavaScript concepts including variables, data types, user input, calculations, functions, and console output.

## Technologies Used

* **HTML** – Used to create the structure of the SpendWise webpage.
* **CSS** – Used to style the application and make it visually appealing.
* **JavaScript** – Used to collect user input, perform calculations, create reusable functions, and display results.

## Project Files

```text
SpendWise/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### index.html

Contains the structure of the SpendWise application, including the header, dashboard cards, budget section, and footer.

### style.css

Contains the styling for the SpendWise application, including colors, spacing, cards, buttons, layout, and responsive design.

### script.js

Contains the JavaScript functionality of the application.

The JavaScript file:

1. Creates variables for budgeting information.
2. Collects budget and expense information using `prompt()`.
3. Calculates the remaining balance.
4. Contains reusable budget calculation functions.
5. Calculates the weekly budget.
6. Displays the results in the browser console.
7. Displays the budget results on the webpage.

## JavaScript Functions

### calculateBalance()

This function calculates the remaining balance.

```javascript
function calculateBalance(budget, expense) {
    return budget - expense;
}
```

### calculateWeeklyBudget()

This function calculates the weekly budget by dividing the monthly budget by four.

```javascript
function calculateWeeklyBudget(monthlyBudget) {
    return monthlyBudget / 4;
}
```

## Example

If the user enters:

```text
Budget: KSh 50,000
Expense: KSh 500
```

The application calculates:

```text
Remaining Balance: KSh 49,500
Weekly Budget: KSh 12,500
```

## How to Run the Project

1. Open the SpendWise project in Visual Studio Code.
2. Make sure all four files are present.
3. Open `index.html` using Live Server.
4. Enter the requested budget when prompted.
5. Enter the expense when prompted.
6. Open the browser Developer Tools using `F12`.
7. Select the **Console** tab.
8. View the SpendWise calculations and results.

## Assignment Requirements Completed

* [x] Created and linked `script.js`.
* [x] Created variables for budgeting information.
* [x] Collected user input using JavaScript prompts.
* [x] Calculated the remaining balance.
* [x] Created reusable budget calculation functions.
* [x] Stored returned function results in variables.
* [x] Displayed results in the browser console.

## Conclusion

SpendWise demonstrates how JavaScript can be used to transform a static webpage into an interactive budgeting application. The project uses variables, user input, calculations, functions, and console output to process basic financial information.
