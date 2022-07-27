"use strict";

$(document).ready(function () {
  console.log('HesSchool Hello!'); // menu

  $(".header-menu-icon").click(function (e) {
    e.preventDefault();
    $(this).siblings('ul').slideToggle();
  });
});
//# sourceMappingURL=all.js.map
