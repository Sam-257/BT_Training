const $ = id => document.getElementById(id);

window.onload = () => {
    $("add").onclick = addTransaction;
}

let incomes = [];
let expenses = [];

const clearInputs = () => {
    $('description').value = null;
    $('amount').value = null;
}

const addTransaction = () => {
    let checker = $('incomeExpense').value;
    let transaction = {
        description: $('description').value,
        amount: parseInt($('amount').value)
    }
    checker == '+' ? incomes.push(transaction):expenses.push(transaction);
    clearInputs();
    display('income', incomes);
    display('expense', expenses);
    let sumOfIncomes = sumOfAmounts(incomes);
    let sumOfExpenses = sumOfAmounts(expenses)
    $('displayIncome').innerHTML = sumOfIncomes;
    $('displayMoney').innerHTML = sumOfIncomes - sumOfExpenses;
    $('displayExpense').innerHTML = sumOfExpenses;
}

const display = (transactionType, transactions) => {
    let parent = transactionType == 'income' ? $('incomes') : $('expenses');
    parent.innerHTML = '';
    for(let transaction of transactions){
        let li = document.createElement('li');
        li.innerHTML = transaction.description + ': ' + transaction.amount;
        parent.appendChild(li);
    }
}

const sumOfAmounts = (transactions) => {
    let amounts = transactions.map(item => item.amount);
    return amounts.reduce((a,b) => a+b,0);
}   