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
    var lighting = document.getElementById("lighting").value;
    // alert("Great!");
    if(name.length == 0) {
      alert("Please enter your name.");
      return;
    }
    else if(parseInt(size) < 100000) {
      alert("Building size must be larger than 100,000 sqft");
    }
    else if(size == "") {
       alert("Please enter a building size");
    }
    else {
      var size = parseInt(size)
      alert(typeof size)
      alert("Thanks, " + name + ". You submitted: " + size + " sqft.");
    }
	});
});
