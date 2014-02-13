// window.onload = (function(){
//   alert("Works!");
// });


$(document).ready(function(){
	event.preventDefault();
  // alert("Works so far!");
	$(':submit').click(function(){
  // alert("Works so far!");
		var size = document.getElementById("building-size").value;
    // alert("Great!");
    alert("You submitted: " + size + ". Is that correct?");
	});
});
