// $("window").scrollLeft(function() {
//     $("#arrow").fadeOut();
// });

var lastScrollLeft = 0;
$('ul').scroll(function() {
    var documentScrollLeft = $('ul').scrollLeft();
    if (lastScrollLeft != documentScrollLeft) {
        //if the scroll changes hide the arrow
        $("#arrow").hide()
        lastScrollLeft = documentScrollLeft;
    }
});