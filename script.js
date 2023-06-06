// Custom JavaScript

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // Calculate the years and months of experience
  var startDate = new Date("2022-03-01");
  var currentDate = new Date();
  var totalMonths = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + (currentDate.getMonth() - startDate.getMonth());
  var years = Math.floor(totalMonths / 12);
  var months = totalMonths % 12;

  // Update the HTML elements with the calculated values
  document.getElementById("years").innerText = years + " years";
  document.getElementById("months").innerText = months + " months";
});

