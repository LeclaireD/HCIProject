$(document).ready(function(){

 $("#header").load("header.html"); 


$('#selectmovie').click(function(){
location.href = "newpage.html"
window.location.href='movieselector.html';
});
$('#selecttime').click(function(){
window.location.href='timeselector.html';
});

$('#letuschoose').click(function(){
window.location.href='letuschoose.html';
});

$('#paymentpage').click(function(){
window.location.href='paymentpage.html';
});
$('#seatselector').click(function(){
window.location.href='seatselector.html';
});

/*Adam stuff*/

$('#m1').click(function(){
	document.getElementById("poster").src = "../images/juice.jpg"
	document.getElementById("movieName").innerHTML = "Beetle Juice"
	document.getElementById("movieTime").innerHTML = "Not Chosen"
	document.getElementById("seatselector").disabled = true;
	document.getElementById("seatselector").className = "stylebuttonsOff";
	
	document.getElementById("m1t1").className = "timeButtonOn"
	document.getElementById("m1t1").disabled = false;
	document.getElementById("m1t2").className = "timeButtonOn"
	document.getElementById("m1t2").disabled = false;
	document.getElementById("m1t3").className = "timeButtonOn"
	document.getElementById("m1t3").disabled = false;
	/*Others off*/
	document.getElementById("m2t1").className = "timeButton"
	document.getElementById("m2t1").disabled = true;
	document.getElementById("m2t2").className = "timeButton"
	document.getElementById("m2t2").disabled = true;
	document.getElementById("m2t3").className = "timeButton"
	document.getElementById("m2t3").disabled = true;
	
	document.getElementById("m3t1").className = "timeButton"
	document.getElementById("m3t1").disabled = true;
	document.getElementById("m3t2").className = "timeButton"
	document.getElementById("m3t2").disabled = true;
	document.getElementById("m3t3").className = "timeButton"
	document.getElementById("m3t3").disabled = true;
	});

$('#m2').click(function(){
	document.getElementById("poster").src = "../images/eleven.jpeg"
	document.getElementById("movieName").innerHTML = "Ocean's Elven"
	document.getElementById("movieTime").innerHTML = "Not Chosen"
	document.getElementById("seatselector").disabled = true;
	document.getElementById("seatselector").className = "stylebuttonsOff"
	
	document.getElementById("m2t1").className = "timeButtonOn"
	document.getElementById("m2t1").disabled = false;
	document.getElementById("m2t2").className = "timeButtonOn"
	document.getElementById("m2t2").disabled = false;
	document.getElementById("m2t3").className = "timeButtonOn"
	document.getElementById("m2t3").disabled = false;
	/*Others off*/
	document.getElementById("m1t1").className = "timeButton"
	document.getElementById("m1t1").disabled = true;
	document.getElementById("m1t2").className = "timeButton"
	document.getElementById("m1t2").disabled = true;
	document.getElementById("m1t3").className = "timeButton"
	document.getElementById("m1t3").disabled = true;
	
	document.getElementById("m3t1").className = "timeButton"
	document.getElementById("m3t1").disabled = true;
	document.getElementById("m3t2").className = "timeButton"
	document.getElementById("m3t2").disabled = true;
	document.getElementById("m3t3").className = "timeButton"
	document.getElementById("m3t3").disabled = true;
	});

$('#m3').click(function(){
	document.getElementById("poster").src = "../images/skyfall.jpg"; 
	document.getElementById("movieName").innerHTML = "Skyfall"
	document.getElementById("movieTime").innerHTML = "Not Chosen"
	document.getElementById("seatselector").disabled = true;
	document.getElementById("seatselector").className = "stylebuttonsOff"
	
	document.getElementById("m3t1").className = "timeButtonOn"
	document.getElementById("m3t1").disabled = false;
	document.getElementById("m3t2").className = "timeButtonOn"
	document.getElementById("m3t2").disabled = false;
	document.getElementById("m3t3").className = "timeButtonOn"
	document.getElementById("m3t3").disabled = false;
	/*Others off*/
	document.getElementById("m1t1").className = "timeButton"
	document.getElementById("m1t1").disabled = true;
	document.getElementById("m1t2").className = "timeButton"
	document.getElementById("m1t2").disabled = true;
	document.getElementById("m1t3").className = "timeButton"
	document.getElementById("m1t3").disabled = true;
	
	document.getElementById("m2t1").className = "timeButton"
	document.getElementById("m2t1").disabled = true;
	document.getElementById("m2t2").className = "timeButton"
	document.getElementById("m2t2").disabled = true;
	document.getElementById("m2t3").className = "timeButton"
	document.getElementById("m2t3").disabled = true;
	});

$('#m1t1').click(function(){document.getElementById("movieTime").innerHTML = "3:20pm"
							document.getElementById("seatselector").disabled = false;
							document.getElementById("seatselector").className = "stylebuttons";});
$('#m1t2').click(function(){document.getElementById("movieTime").innerHTML = "4:20pm"
							document.getElementById("seatselector").disabled = false;
							document.getElementById("seatselector").className = "stylebuttons";});
$('#m1t3').click(function(){document.getElementById("movieTime").innerHTML = "8:15pm"
							document.getElementById("seatselector").disabled = false;
							document.getElementById("seatselector").className = "stylebuttons";});
$('#m2t1').click(function(){document.getElementById("movieTime").innerHTML = "11:00am"
							document.getElementById("seatselector").disabled = false;
							document.getElementById("seatselector").className = "stylebuttons";});
$('#m2t2').click(function(){document.getElementById("movieTime").innerHTML = "1:15pm"
							document.getElementById("seatselector").disabled = false;
							document.getElementById("seatselector").className = "stylebuttons";});
$('#m2t3').click(function(){document.getElementById("movieTime").innerHTML = "4:20pm"
							document.getElementById("seatselector").disabled = false;
							document.getElementById("seatselector").className = "stylebuttons";});
$('#m3t1').click(function(){document.getElementById("movieTime").innerHTML = "4:20pm"
							document.getElementById("seatselector").disabled = false;
							document.getElementById("seatselector").className = "stylebuttons";});
$('#m3t2').click(function(){document.getElementById("movieTime").innerHTML = "8:30pm"
							document.getElementById("seatselector").disabled = false;
							document.getElementById("seatselector").className = "stylebuttons";});
$('#m3t3').click(function(){document.getElementById("movieTime").innerHTML = "9:00pm"
							document.getElementById("seatselector").disabled = false;
							document.getElementById("seatselector").className = "stylebuttons";});

	/*idk what i am doing 
$("#one").click(function(){
    $("#oneTime”).hide();
});


$("#three").click(function(){
    $("m2").toggle();
});

$("#five").click(function(){
    $("m3").hide();
});

$("#seven").click(function(){
    $("p").hide();
});

$(“#nine”).click(function(){
    $("p").hide();
		
		
});*/
});

