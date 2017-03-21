$(document).ready(function() {
  $("h1").fadeIn(2000);
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
  $(".fadeout").hover(function() {
    $( this ).fadeOut(3000);
  });
  $("button").click(function() {
    $(".intro").fadeToggle("slow", "linear");
  });
});
