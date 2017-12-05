$(document).ready(function() {
// Add items to to do list on submit of form and then clear value
 $('#button').on('click', function(e){
 	e.preventDefault();
  	console.log('clicked!');
  	var newTask = $('#input').val();
  	$('ul').append('<li>' + newTask + '</li>');
  	 // Clear input box after item added
  	 $('#input').val('');

  });
 	$('#container').on('click', 'li', function(){
 		$(this).toggleClass('strike');
 	$()

 	});
 	$('#clear').on('click', function(){
 		$('ul').empty();
 	});
});

 

