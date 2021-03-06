$(document).ready(function(){

	$('.ryu')  // select ryu now do functions

	.mouseenter(function() {

		hideAll();
		$('.ryu-ready').show();
		
	}) // end mouseenter


	.mouseleave(function(){

		hideAll();
		$('.ryu-still').show();
		
	})


	.mousedown(function(){
		//stopPropagation();
		playHadouken();
		hideAll();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
		.animate(
	  		{'left': '300px'}, 500,
			 function() {
			    $(this).hide();
			    $(this).css('left', '-212px');
			  });
	})  // end mousedown


	.mouseup(function(){
		hideAll();
		$('.ryu-ready').show();
	});  // end mouseup ryu goes back to his ready position


	$('body')
	.keydown(function(event){
	 	if (event.which == 88)
	 	{
	 		hideAll();
			$('.ryu-cool').show(); 
		}
	})

	.keyup(function(){
			//alert("x key is let up");
			
			hideAll();
			$('.ryu-still').show();

		});  // semicolon should come after methods used on the single selection
	
}); // end document ready

	// play hadouken sound
    // show hadouken and animate it to the right of the screen


function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
};

function hideAll() {
	$('.ryu-still').hide();
	$('.ryu-ready').hide();
	$('.ryu-throwing').hide();
	$('.ryu-cool').hide(); 
};


/* 1. after hadouken throw ryu ready is apearing under existing ry div
seems like it's not properly hiding ryu ready after haduken throw.
bubble? or possibly just need to hide ryu ready. 

1. hideAll function fixed this

2. after pressing x - next mouseclick does not throw hadouken
second mouse click does. Is Ryu not in focus or other issue?
*/


