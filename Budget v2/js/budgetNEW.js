// BudgetNEW.js

/*-- GLOBAL VARIABLES ------------------------------------------------------------------------*/







/*-- ON PAGE LOAD ---------------------------------------------------------------------------*/

$(document).ready(function() {

	initClickEvents();

	$("#nav-control-add-expense").trigger('click');
});




/*-- FUNCTIONS -----------------------------------------------------------------------------*/


/*----------------- INIT FUNCTIONS -----------------*/

function initClickEvents() {
	$(".nav-expander").unbind('click').click(function() {
		var navWidth = $("#nav-cont").outerWidth();
		var infoWidth = $("#info-cont").outerWidth();
		
		if ($("#info-cont").position().left < 0) {
			$("#info-cont").css("left", navWidth);
		}
		else {
			$("#info-cont").css("left", -infoWidth);
		}
	});
	
	$(".account").unbind('click').click(function() {
		$(".account").removeClass("account-active");
		$(this).addClass("account-active");
		$(".account-balance").css("right", "-27px");
		$(this).find($(".account-balance")).css("right", "0px");

		$(".category").removeClass("category-active");
		$(".category-budget").css("right", "-27px");
		$(".category").css("height", "25px");
	});

	$(".category").unbind('click').click(function() {
		$(".category").removeClass("category-active");
		$(this).addClass("category-active");
		$(".category-budget").css("right", "-27px");
		$(this).find($(".category-budget")).css("right", "0px");
		$(".category").css("height", "25px");
		$(this).css("height", "70px");

		$(".account").removeClass("account-active");
		$(".account-balance").css("right", "-27px");
	});

	$("#nav-control-add-expense").unbind('click').click(function() {
		var formWidth = $("#form-cont").outerWidth();

		if (parseInt($("#form-cont").css("right")) < 0) {
			$("#form-cont").css("right", 0);
		}
	});

	$(".form-button-cancel").unbind('click').click(function() {
		$("#form-cont").css("right", -300);
	});

	$(".form-button-new-cat").unbind('click').click(function() {
		var $box = $(this).parent().find($(".form-new-cat-box"));

		if ($box.height() <= 0) {
			$box.css("height","200px");
			$box.css("margin-top","-42px");
			$(this).val("Use Existing Category");
			$()
		}
		else {
			$box.css("height", "0px");
			$box.css("margin-top", "0px");
			$(this).val("Create New Category");
		}
	});

	$("html").unbind('click').click(function() {
		if (!$("#form-cont").is(":hover") && parseInt($("#form-cont").css("right")) >= 0) {
			$("#form-cont").css("right", -300);
		}
	});
}


/*----------------- AJAX FUNCTIONS -----------------*/

function ajax(file, type, data) {
	/*
	var userid = getUserId();
	data.userid = userid;
	
	$.ajax({
		url: "/php/" + file,
		type: type,
		async: false,
		data: data,
	    	failure: function(data){
	    		alert("Operation failed: " + file + ", " + type);
	    		return false;
	    	},
	    	success: function(data){
			return data;
	    	}
	});
	*/
}

function insertExpense() {
	var file = "insert_expense.php";
	var type = "POST";
	var data = {date: "2/8/18", description: "Description", category: 1, amount: 150.40};
	var errors = '';
	
	//check for errors
	
	if (errors) {
	
	}
	else {
		var submit = ajax(file, type, data);
		
		if (submit) {
			console.log("Success");
			//refresh page, or re-load expenses
		}
	}
}




/*----------------- MISC. FUNCTIONS -----------------*/






