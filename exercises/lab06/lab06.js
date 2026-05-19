// CLICK = change creature
$("#creature").click(function () {
  $(this).toggleClass("transformed");
  $("#status").text("The creature changed shape.");
});

// HOVER = show thought
$("#creature").hover(
  function () {
    $("#thought").show();
    $("#status").text("The creature is thinking...");
  },
  function () {
    $("#thought").hide();
    $("#status").text("The creature is waiting.");
  }
);