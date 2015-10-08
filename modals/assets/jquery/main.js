var $overlay = $("<div id='overlay'></div>");
var $image = $("<img>");
var $caption = $("<p></p>"); 
//Add Image to Overlay//
$overlay.append($image);
//Add Caption to Overlay//
$overlay.append($caption);
//add overlay//
$("body").append($overlay);

$("#gallery a").click(function(event){
	event.preventDefault();
	var imageLocation = $(this).attr("href");
	//update overlay with the image linked in the link//
	$image.attr("src",imageLocation);
	//show overlay//
	$overlay.show();
	//get child alt attribute and set caption//
	var captionText = $(this).children("img").attr("alt");
	$caption.text(captionText);
});
//when overlay is clicked//
$overlay.click(function(){
	$overlay.hide();
});
