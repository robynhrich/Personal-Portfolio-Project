$("#about-me-button").click(function () {
  document.location.href =
    "https://robynhrich.netlify.app/#aboutme" + $(this).attr("id");
});

$("#contact-button").click(function () {
  document.location.href =
    "https://robynhrich.netlify.app/contact.html" + $(this).attr("id");
});

$("#portfolio-button").click(function () {
  document.location.href =
    "https://robynhrich.netlify.app/portfolio.html" + $(this).attr("id");
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
