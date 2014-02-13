// window.onload = (function(){
//   alert("Works!");
// });


$(document).ready(function(){
	event.preventDefault();
  // alert("Works so far!");
	$(':submit').click(function(){
  // alert("Works so far!");
		var size = document.getElementById("size").value;
    var name = document.getElementById("name").value;
    // alert("Great!");
    alert("Thanks, " + name + ". You submitted: " + size + " sqft. Is that correct?");
	});
});
