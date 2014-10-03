$(document).ready(function(){

	$('.ryu')  // select ryu now do functions

	.mouseenter(function() {

		$('.ryu-still').hide();
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
		$('.ryu-cool').hide();

	}) // end mouseenter


	.mouseleave(function(){

		$('.ryu-ready').hide();
		$('.ryu-throwing').hide();
		$('.ryu-still').show();
		$('.ryu-cool').hide(); // added to stop ryu from reappearing on mouseleave
	
	})


	.mousedown(function(){
		//stopPropagation();
		playHadouken();
		$('.ryu-still').hide();
		$('.ryu-ready').hide();
		$('ryu-cool').hide();
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
		// console.log('mouse up');

		$('.ryu-throwing').hide();
		$('.ryu-cool').hide();  //  added to fix bug with extra ryu
		$('.ryu-ready').show();
	});  // end mouseup ryu goes back to his ready position


	$('body')
	.keydown(function(event){
	 	if (event.which == 88)
	 	{
	 		$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide();
			$('.ryu-cool').show(); 
		}
	})

	.keyup(function(){
			//alert("x key is let up");
			$('.ryu-still').show();
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide();
			$('.ryu-cool').hide(); 

		});  // semicolon should come after methods used on the single selection
	
}); // end document ready

	// play hadouken sound
    // show hadouken and animate it to the right of the screen


function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
};




/* after hadouken throw ryu ready is apearing under existing ry div
seems like it's not properly hiding ryu ready after haduken throw.

bubble? or possibly just need to hide ryu ready. 

hiding all the divs in all the functions seems to fix the bug
there's still sometimes the need to mousedown 2x on ryu to get him
to shoot the hadouken after he does the cool pose.*/


