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
    // Checks the user entered a building size:
    if(size =="") {
      alert("Please enter a building size");
      return;
    //Checks the user entered a building size greater than or equal to 100,000 sqft: 
    } else if(parseInt(size) < 100000) {
        alert("Building size must be larger than 100,000 sqft");
        return;
    //Checks the user entered a name: 
    } else if(name.length == 0) {
        alert("Please eneter your name");
        return;
    } else {
        var size = parseInt(size);
        alert("Thanks, " + name + ". You submitted: " + size + " sqft.");
    };
  });
});
