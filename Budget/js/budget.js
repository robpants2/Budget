
/*-- GLOBAL VARIABLES ------------------------------------------------------------------------*/
var controls = [
	new Control("Control 1", "icon"),
	new Control("Control 2", "icon"),
];

var accounts = [
	new Account("Account 1"),
	new Account("Account 2"),
	new Account("Account 3"),
	new Account("Account 4"),
];

var categories = [
	new Category("Deposit", -1),
	new Category("Transfer", -1),
	new Category("Misc.", -1),
	new Category("Category 1", 125.99),
	new Category("Category 1", 125.99),
];

var expense = new Expense("12/15/17", "Desc.", "Misc.", 125.99);


/*-- ON PAGE LOAD --------------------------------------------------------------------------*/
$(document).ready(function() {

	//Generating random expenses (Delete at some point)
	for (i=0; i<accounts.length; i++) {
		var random = Math.floor(Math.random() * 100);
		for (j=0; j<random; j++) {
			accounts[i].addExpense(expense);
		}
	}

	//Get accounts from DB
	//Get categories from DB
	//Test Comment

	init_controls();
	init_accounts();
	init_categories();
	init_expenses();

});


/*-- FUNCTIONS -----------------------------------------------------------------------------*/

function Expense(date, description, category, amount) {
	//Add ID
	this.date = date;
	this.description = description;
	this.category = category;
	this.amount = amount;
}

function Account(name) {
	this.id = createUniqueId();
	this.name = name;
	this.expenses = [
		new Expense("12/15/17", "Starting Balance", "Deposit", 200)
	];

	this.addExpense = function(expense) {
        this.expenses.push(expense);
    };
}

function Control(name, icon) {
	this.name = name;
	this.icon = icon;
}

function Category(name, budget) {
	//Add ID
	this.name = name;
	this.budget = budget;
}

function init_categories() {
	for (i=0; i<categories.length; i++) {
		$("#categories-content-cont").append('' +
			'<div>' + categories[i].name + '</div>' +
		'');
	}
}

function init_controls() {
	for (i=0; i<controls.length; i++) {
		$("#controls-content-cont").append('' +
			'<div>' + controls[i].name + '</div>' +
		'');
	}
}

function init_accounts() {
	for (i=0; i<accounts.length; i++) {
		var msg = '<div class="account" accountid=' + accounts[i].id + '>' + accounts[i].name + '</div>';
		$("#accounts-content-cont").append(msg);
	}

	$(".account").click(function() {
		$(".account").removeClass("account-focus");
		$(this).addClass("account-focus");

		loadExpenses(getAccountById($(this).attr("accountid")));
	});
}

function init_expenses() {
	loadExpenses(accounts[0]);
	$(".account").first().addClass("account-focus");

	$(".expense").click(function() {
		//Fill in
	});
}

function loadExpenses(account) {
	var expenses = account.expenses;
	var balance = 0;

	//$("#expenses-table > tbody").empty();
	$(".expense").remove();
	$("#expenses-content-cont").scrollTop(0);

	for (i=0; i<expenses.length; i++) {
		var amountColor = (checkBalanceAdd(expenses[i].category) ? "green" : "");
		var msg = '';

		if (amountColor == "green") {
			balance += expenses[i].amount;
		}
		else {
			balance -= expenses[i].amount;
		}

		var balanceColor = (balance<0 ? "red" : "");

		msg += '<tr class="expense">';
		msg += '<td>' + expenses[i].date + '</td>';
		msg += '<td>' + expenses[i].description + '</td>';
		msg += '<td>' + expenses[i].category + '</td>';
		msg += '<td>$<span class=' + amountColor + '>' + expenses[i].amount + '</span></td>';
		msg += '<td>$<span class=' + balanceColor + '>' + balance.toFixed(2) + '</span></td>';
		msg += '</tr>';

		$("#expenses-table > tbody").prepend(msg);
	}
}

function checkBalanceAdd(category) {
	var add = false;

	return (category == "Deposit" || category == "Transfer");
}

function getAccountById(accountId) {
	for (i=0; i<accounts.length; i++) {
		if (accounts[i].id == accountId) {
			return accounts[i];
			break;
		}
	}
}

function createUniqueId() {
	var string = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var id = "";

	for(i=0; i<10; i++) {
		id += string.charAt(Math.floor(Math.random() * string.length) + 1);
	}

	return id;
}

function addAccount(name) {
	var account = new Account(name);
	accounts.push(account);
}

function addExpense() {

}

function addCategory() {

}
