"use strict";

var click = 0;
$(".pages").click(function () {
  click++;
  $(".pages").css("transform", "translateX(-" + click * 100 + "%)");

  if (click > 1) {
    click = -1;
  }
});
$(".iphone").click(function () {
  $(".phone_name").text($(this).text());
  $(".phone").css("width", $(this).attr("w"));
  $(".screen").css("height", $(this).attr("h"));
});
$(".wiggle").click(function () {
  interval = 0;
});
interval = 7;
setInterval(function () {
  $(".phone").css("left", "");

  if (interval < 7) {
    if (interval % 2 == 0) {
      $(".phone").css("left", "-10px");
    } else if (interval % 2 == 1) {
      $(".phone").css("left", "10px");
    }
  } else {
    $(".phone").css("left", "");
  }

  interval++;
  console.log(interval);
}, 100);
rotate = 1;
$(".turn").click(function () {
  $(".phone").css("transform", "rotate(" + rotate * 360 + "deg)");
  rotate++;
});