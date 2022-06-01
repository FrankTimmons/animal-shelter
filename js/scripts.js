$(document).ready(function() {
  $("button#dark").click(function() {
    $(".animal-profiles").addClass("animal-profiles-dark");
    $(".animal-profiles").removeClass("animal-profiles");
    $(".light-body").addClass("dark-body");
    $(".light-body").removeClass("light-body");
    $(".intro-light").addClass("intro-dark");
    $(".intro-light").removeClass("intro-light");
    $(".btn-light").toggle();
    $(".btn-dark").toggle();
  });

  $("button#light").click(function() {
    $(".animal-profiles-dark").addClass("animal-profiles");
    $(".animal-profiles").removeClass("animal-profiles-dark");
    $(".dark-body").addClass("light-body");
    $(".dark-body").removeClass("dark-body");
    $(".intro-dark").addClass("intro-light");
    $(".intro-dark").removeClass("intro-dark");
    $(".btn-dark").toggle();
    $(".btn-light").toggle();
  });
});