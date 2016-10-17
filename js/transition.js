$(document).ready(function() {

$("body").css("display", "none");
$("img").css("display", "none");

$("body").fadeIn(700);
$("img").fadeIn(700);

$("a").click(function(event){
event.preventDefault();
linkLocation = this.href;
$("body").fadeOut(400, redirectPage);
$("img").fadeOut(400, redirectPage);	
});

function redirectPage() {
window.location = linkLocation;
}

});