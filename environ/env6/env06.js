$("#day-btn").click(function () {
  $("body").removeClass("night").addClass("day");
  $("#forest-text").text("It is daytime in the Cyber Forest.");
});

$("#night-btn").click(function () {
  $("body").removeClass("day").addClass("night");
  $("#forest-text").text("It is nighttime in the Cyber Forest.");
});