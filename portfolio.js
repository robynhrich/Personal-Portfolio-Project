$("#about-button").click(function () {
  document.location.href = "#aboutme";
});

$("#contact-button").click(function () {
  document.location.href = "/contact.html";
});

$("#home-contact-button").click(function () {
  document.location.href = "/contact.html";
});

$("#portfolio-button").click(function () {
  document.location.href = "/portfolio.html";
});

$("#email-button").click(function () {
  document.location.href = "mailto:robynhrich@icloud.com" + $(this).attr("id");
});

$("#linkedin-button").click(function () {
  document.location.href =
    "https://www.linkedin.com/in/robyn-h-richardson-5039a7252/" +
    $(this).attr("id");
});

$("#github-button").click(function () {
  document.location.href = "https://github.com/robynhrich" + $(this).attr("id");
});
