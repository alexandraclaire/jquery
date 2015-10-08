//Wait until document loads then run jquery

/*$(document).ready(function() {
	$("button").click(function() {
		$("p").hide();
	});
}); */

/*$("button").click(function(){
	$("p").toggle();
}); ----this toggle means hide and show, so like
with the hamburger nav*/

/*$(document).ready(function() {
	$("button").click(function() {
		$(".demo").slideToggle(1000);
	});
}); --- slide up and down */

/*$(document).ready(function() {
	$("button").click(function() {
		$(".demo").animate(
			{left:'+250px',
			 opacity:'0.5',
			 height:'200px',
			 width:'toggle'
		});
	});
});*/


/*$(document).ready(function() {
	$("#one").click(function(){
		$("#two").slideDown(10000);
	});
	$('#stop').click(function(){
		$('#two').stop();
	});
});	*/
/* Inserting content:
append
prepend
after
before
e.g.
$("p").before("Some appended text"); */

/*Removing content:
remove - removes the selected element and its child elements.
empty - empties the parent of its child elements.
e.g. 
$("p").empty (".test, .demo"); */

/*adding classes
addClass("insertclasshere") */
/*Removing classes 
removeClass("insertclasshere")*/
/*others with classes
toggleClass("insertclasshere");
css();
*/

/*$("button").click(function(){
	alert("You are awesome!")
});--- makes an alert box say what you want*/

/*$("p").css ({
	"background-color":"pink",

})-- changes styling in the decided element*/

$("button").click(function(){
	var txt = "";
	txt += "Outer Width: " + $(".demo").outerWidth() + "</br>";
	txt += "Outer Height: " + $(".demo").outerHeight();
	$(".demo").html(txt);
});








