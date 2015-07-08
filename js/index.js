$(function() {
//starter code

	$('#submit').click(compare);

	function compare () {
		
		var a = $('#a').val();
		a = parseInt(a);

		var b = $('#b').val();
		b = parseInt(b);

		if (a < b) {
			$('#comparison').html('<');
		} else if (a > b) {
			$('#comparison').html('>');
		} else if(a == b) {
			$('#comparison').html('=');
		}
	}



	//click event

	//track 2 inputs and comparison value

	//compare the two input values

	//conditional 

	//if a < b

	//if a > b

	//if a == b

	//manipululate 'comparison' html w/ either >, > or ==

});