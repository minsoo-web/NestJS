$(function() {
  $("#search-icon").click(function() {
    $(".hide-search").toggleClass("none-hide");
  });
});

$(function() {
  $("#hide-search-input").focus(function() {
    $("#hide-search-modal").toggleClass("big-modal");
  });
});

$(function() {
  $("#hamburger label").click(function() {
    $("body").css("overflow", "hidden");
  });
  $("#whole-wrapper").click(function() {
    $("body").css("overflow", "auto");
  });
});
