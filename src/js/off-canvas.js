import $ from "jquery";

$(document).ready(function () {
  $('[data-toggle="offcanvas"]').on("click", function () {
    $(".sidebar-offcanvas").toggleClass("active");
  });
});
