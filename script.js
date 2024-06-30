function addExpense() {
    var expenseName = document.getElementById('expense-name').value.trim();
    var expenseAmount = parseFloat(document.getElementById('expense-amount').value);

    if (expenseName === '' || isNaN(expenseAmount) || expenseAmount <= 0) {
        alert('Please enter valid expense name and amount.');
        return;
    }

    // Create expense object
    var expense = {
        name: expenseName,
        amount: expenseAmount
    };

    // Get existing expenses from localStorage or initialize empty array
    var expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    // Add new expense to array
    expenses.push(expense);

    // Save updated expenses array back to localStorage
    localStorage.setItem('expenses', JSON.stringify(expenses));

    // Clear input fields
    document.getElementById('expense-name').value = '';
    document.getElementById('expense-amount').value = '';

    // Update expenses list and total
    updateExpensesList();
}

// Function to update expenses list and total
function updateExpensesList() {
    var expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    var expensesList = document.getElementById('expenses-list');
    var totalExpenses = document.getElementById('total-expenses');
    var total = 0;

    // Clear current list
    expensesList.innerHTML = '';

    // Populate list and calculate total
    expenses.forEach(function(expense, index) {
        var li = document.createElement('li');
        li.className = 'expense-item';
        li.innerHTML = `<span>${expense.name}</span>: Rs ${expense.amount.toFixed(2)} `;
        
        // Create delete button
        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        deleteButton.onclick = function() {
            deleteExpense(index);
        };
        li.appendChild(deleteButton);
        
        expensesList.appendChild(li);
        total += expense.amount;
    });

    // Update total expenses
    totalExpenses.textContent = total.toFixed(2);
}

// Function to delete an expense
function deleteExpense(index) {
    var expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses.splice(index, 1);

    // Save updated expenses array back to localStorage
    localStorage.setItem('expenses', JSON.stringify(expenses));

    // Update expenses list and total
    updateExpensesList();
}

// Initial call to populate expenses on page load
updateExpensesList();
