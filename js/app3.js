$(document).ready(function(){

	$('.ryu').mouseenter(function() {

		/* alert('mouse entered ryu div') */

		$('.ryu-still').hide();
		$('.ryu-ready').show();
		$('.ryu-cool').hide();

	})

	.mouseleave(function(){

		$('.ryu-ready').hide();
		$('.ryu-still').show();
		$('.ryu-cool').hide(); // added to stop ryu from reappearing on mouseleave
	
	})

	.mousedown(function(){
		// console.log('mouse down');
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
		.animate(
	  		{'left': '300px'}, 500,
			 function() {
			    $(this).hide();
			    $(this).css('left', '-212px');
			  }
			)
	})

	// play hadouken sound
    // show hadouken and animate it to the right of the screen

	.mouseup(function(){
		// console.log('mouse up');

		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	}) // deleting the semicolon here

	 // ryu goes back to his ready position



 	/*$('body').on('keydown keyup',function(e){
      var xRyu = e.type=="keydown" ? '../images/ryu-cool.gif' : '../images/ryu-standing-still.png' ;
      if(e.which==88){
          $(this).css({'background-image': 'xRyu'});  
      	}
    }) */


	/*  working $('body').keydown(function(event){
	 	if (event.which == 88)
	 	{
	 		
	 		$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide();
			$('.ryu-cool').show(); */

			//.keyup(function()
			//	{alert('x key is let up')}

		}; // removed semicolon

		

	/* $(this).keyup(function()
	 	{
				alert('x key is let up');
				$('.ryu-cool').hide();
				$('.ryu-still').show();

		}
	 	//	{alert('x was pressed')}

	 	// $(".xpress").html("Key: " + event.which); */

	 	}); 

});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
};

/* .keydown(function(event){ 
    $("div").html("Key: " + event.which);


$(".ryu").keydown(function(event) {
  if ( event.which == 88 ) {
   event.preventDefault();
  }    

  alert('mouse entered ryu div')

  $(function() {
    var e = $.Event('keypress');
    e.which = 65; // Character 'A'
    $('item').trigger(e);
});


This worked to display the ascii code in the div

$(this).keydown(function(event){
	 	$(".xpress").html("Key: " + event.which);
	 	});

*/

