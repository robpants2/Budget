<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
  		<meta name="viewport" content="width=device-width, initial-scale=1">
  		
  		<!-- CSS -->
		<link rel="stylesheet" href="./css/budgetNEW.css" type="text/css">
		<!-- <link rel="stylesheet" href="./css/calendar.css" type="text/css"> -->

		<!-- JavaScript -->
		<script src="https://code.jquery.com/jquery-3.2.1.js"></script>
		<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
		<script type="text/javascript" src="./js/budgetNEW.js"></script>
		<!-- <script type="text/javascript" src="./js/calendar.js"></script> -->
		
		<title>Budget</title>
	</head>
	<body>
		<div id="nav-cont">
			<div id="nav-control-cont">
				<div id="nav-control-add-expense" class="nav-control">Add</div>
				<div id="nav-control-spending" class="nav-control">Spend</div>
				<div id="nav-control-transfer" class="nav-control">Transf</div>
				<div id="nav-control-recurring" class="nav-control">Recur</div>
			
			</div>
			<div id="nav-expand-cont" class="nav-expander">
				<div id="nav-expand-arrow">Expnd</div>
			</div>
		</div>
		
		<div id="info-cont">
			<div id="info-search-cont">
				<input id="info-search" type="text" name="info-search" placeholder="Search Expenses">
				<input id="info-search-submit" type="button" value="Search">
			</div>
			

			<!-- Accounts -->
			<div id="info-account-cont" class="info-item">
				<div class="info-item-title-cont">
					<span>Title</span>
					<span style="float: right">+</span>
				</div>
				<div class="info-item-head">
					<span>Name</span>
					<span style="float: right;">Balance</span>
				</div>

				<div class="info-item-table">
					<div class="account">
						<div class="account-name">Account Name asdfasdf as df asdf asdf asd fa sdfa sdfa sdf asd f</div>
						<div class="account-balance">
							<div class="account-balance-value">$150.50</div>
							<div class="account-edit">E</div>
						</div>
					</div>
					<div class="account">
						<div class="account-name">Account Name</div>
						<div class="account-balance">
							<div class="account-balance-value">$150.50</div>
							<div class="account-edit">E</div>
						</div>
					</div>
					<div class="account">
						<div class="account-name">Account Name</div>
						<div class="account-balance">
							<div class="account-balance-value">$150.50</div>
							<div class="account-edit">E</div>
						</div>
					</div>

				</div>
			</div>
			

			<!-- Categories -->
			<div id="info-category-cont" class="info-item">
				<div class="info-item-title-cont">
					<span>Title</span>
					<span style="float: right">+</span>
				</div>
				<div class="info-item-head">
					<span>Name</span>
					<span style="float: right;">Budget</span>
				</div>

				<div class="info-item-table">

					<div class="category">
						<div class="category-name">Category Name</div>
						<div class="category-budget">
							<div class="category-budget-value">$200.45</div>
							<div class="category-edit">E</div>
						</div>
						<div class="category-info">
							<div class="category-info-item">
								<div class="category-info-item-month">Feb. 2018: </div>
								<div class="category-info-item-value">$150.20 (90%)</div>
							</div>
							<div class="category-info-item">
								<div class="category-info-item-month">Jan. 2018: </div>
								<div class="category-info-item-value">$150.20 (125%)</div>
							</div>
						</div>
					</div>
					<div class="category">
						<div class="category-name">Category Name</div>
						<div class="category-budget">
							<div class="category-budget-value">$200.45</div>
							<div class="category-edit">E</div>
						</div>
						<div class="category-info">
							<div class="category-info-item">
								<div class="category-info-item-month">Feb. 2018: </div>
								<div class="category-info-item-value">$150.20 (90%)</div>
							</div>
							<div class="category-info-item">
								<div class="category-info-item-month">Jan. 2018: </div>
								<div class="category-info-item-value">$150.20 (125%)</div>
							</div>
						</div>
					</div>
					<div class="category">
						<div class="category-name">Category Name</div>
						<div class="category-budget">
							<div class="category-budget-value">$200.45</div>
							<div class="category-edit">E</div>
						</div>
						<div class="category-info">
							<div class="category-info-item">
								<div class="category-info-item-month">Feb. 2018: </div>
								<div class="category-info-item-value">$150.20 (90%)</div>
							</div>
							<div class="category-info-item">
								<div class="category-info-item-month">Jan. 2018: </div>
								<div class="category-info-item-value">$150.20 (125%)</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		
		</div>

		<div id="form-cont">
			<div id="form-add-expense">
				<div class="form-title">Add Item</div>
			</div>
		</div>

	</body>
</html>