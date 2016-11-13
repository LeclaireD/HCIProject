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


});

