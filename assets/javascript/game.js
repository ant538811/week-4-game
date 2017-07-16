	var number = Math.floor((Math.random() * 120) + 1);
	var blue = Math.floor((Math.random() * 12) + 1);
	var red = Math.floor((Math.random() * 12) + 1);
	var yellow = Math.floor((Math.random() * 12) + 1);
	var green = Math.floor((Math.random() * 12) + 1);
	var sum = 0;
	var wins = 0;
	var losses = 0;

	$(".numberdisplay").html(number);

	$(".redcrystal").click(function() {
		changeValues(red);
	});

	$(".bluecrystal").click(function() {
		changeValues(blue);
	});

	$(".yellowcrystal").click(function() {
		changeValues(yellow);
	});

	$(".greencrystal").click(function() {
		changeValues(green);
	});
	
	function newGame() 
	{
		number = Math.floor((Math.random() * 120) + 1);
		$(".numberdisplay").html(number);
		blue = Math.floor((Math.random() * 12) + 1);
		red = Math.floor((Math.random() * 12) + 1);
		yellow = Math.floor((Math.random() * 12) + 1);
		green = Math.floor((Math.random() * 12) + 1);
		sum = 0;
		$(".guessdisplay").html(sum);
	};

	function changeValues(color) 
	{
		sum += color;
		$(".guessdisplay").empty();
		$(".guessdisplay").append(sum);
		if (sum > number) 
		{
			losses++;
			$("#loseCount").html(losses);
			newGame();
		}
		
		else if (sum == number) 
		{
			wins++;
			$("#winCount").html(wins);
			newGame();
			

		};
	};