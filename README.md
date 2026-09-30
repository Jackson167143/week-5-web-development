# SpendWise Personal Budget & Expense Tracker

## Project Overview

SpendWise is a personal budget and expense tracker built using **HTML and CSS**.

For this week's Visual Design Challenge, I improved the existing Budget Tracker by applying a consistent color palette, custom typography, form styling, expense table styling, and the CSS Box Model.

No new functionality was added. The focus was entirely on improving the visual appearance and user experience of the existing project.

## What I Built

I improved the Budget Tracker by creating a clean and organized interface with:

* A page heading section
* An Add Expense form
* An Expense Table
* A consistent color theme
* Custom Google Fonts
* Styled buttons and form controls
* Table borders and spacing
* Alternating table row colors
* Rounded corners
* Responsive styling for smaller screens

## What Each Part Does

### 1. Page Heading

The page heading introduces the **SpendWise Budget Tracker**.

It uses a separate card-style section with:

* A clear heading
* Supporting text
* Custom typography
* Background color
* Padding
* Border
* Rounded corners

This makes the heading visually separate from the rest of the page.

### 2. Add Expense Form

The Add Expense form allows users to enter expense information.

The form contains fields for:

* Expense name
* Amount
* Category
* Date

CSS was used to improve the appearance of the form by adding:

* Input borders
* Padding
* Rounded corners
* Consistent spacing
* Focus effects
* A styled button

### 3. Expense Table

The Expense Table displays recorded expenses.

The table contains:

* Name
* Amount
* Category
* Date

CSS styling was added to make the table easier to read.

The table includes:

* A colored header
* Cell padding
* Borders
* Alternating row colors
* Hover effects
* Rounded corners

### 4. Color Palette

A consistent color palette was selected for the application.

CSS variables are used to store the main colors so they can be reused throughout the stylesheet.

Example:

```css
:root {
    --primary-color: #2563eb;
    --accent-color: #10b981;
    --background-color: #f3f6fb;
    --card-color: #ffffff;
    --heading-color: #172033;
    --text-color: #374151;
}
```

This makes the design consistent and easier to maintain.

### 5. Typography

Google Fonts are used to improve the appearance and readability of the application.

* **Poppins** is used for headings.
* **DM Sans** is used for body text, labels, forms, buttons, and table content.

The different fonts create a clear visual hierarchy.

### 6. CSS Box Model

The CSS Box Model was used throughout the project.

The project uses:

* **Margin** to create space between sections.
* **Padding** to create space inside cards, inputs, buttons, and table cells.
* **Borders** to define sections and form controls.
* **Border radius** to create rounded and modern elements.

The page heading, Add Expense form, and Expense Table are presented as separate visual cards.

### 7. Responsive Design

The application is designed to work on different screen sizes.

A media query is used below **768px** to adjust the layout for smaller screens.

```css
@media (max-width: 768px) {
    /* Mobile styles */
}
```

The responsive design can be tested using the browser's **DevTools Device Toolbar**.

## Technologies Used

* HTML5
* CSS3
* Google Fonts
* CSS Custom Properties
* CSS Box Model
* Responsive CSS
* Flexbox

## Project Files

```text
SpendWise/
│
├── index.html
├── style.css
└── README.md
```

### `index.html`

Contains the structure and content of the SpendWise Budget Tracker, including the page heading, Add Expense form, and Expense Table.

### `style.css`

Contains all the visual styling for the application, including colors, fonts, spacing, borders, buttons, table styling, and responsive design.

### `README.md`

Contains information about the project, what was built, the technologies used, and what each part of the project does.

## How to Run

1. Open the SpendWise project folder.
2. Make sure `index.html` and `style.css` are in the same folder.
3. Open `index.html` in a web browser.
4. Use the browser's DevTools Device Toolbar to test the responsive design.

## Author

**Lemuya Jackson**

## Project

**SpendWise Personal Budget & Expense Tracker**

**Assignment:** Visual Design Challenge (CSS)
