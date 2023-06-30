const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var dropdowns = document.getElementsByClassName("dropdown-content");
  for (var i = 0; i < dropdowns.length; i++) {
    dropdowns[i].classList.add("hidden");
  }
});

function toggleDropdown(dropdownId) {
  var dropdown = document.getElementById(dropdownId);
  var link = document.getElementById(dropdownId + "Link");

  var dropdowns = document.getElementsByClassName("dropdown-content");
  var links = document.getElementsByClassName("dropbtn");

  for (var i = 0; i < dropdowns.length; i++) {
    var currentDropdown = dropdowns[i];
    var currentLink = links[i];

    if (currentDropdown === dropdown) {
      currentDropdown.classList.toggle("hidden");
      currentDropdown.classList.toggle("fade-in");
      currentLink.classList.toggle("active");
    } else {
      currentDropdown.classList.add("hidden");
      currentDropdown.classList.remove("fade-in");
      currentLink.classList.remove("active");
    }
  }
}

window.addEventListener("click", function (event) {
  var dropdowns = document.getElementsByClassName("dropdown-content");
  var links = document.getElementsByClassName("dropbtn");

  var isDropdownClick = false;

  for (var i = 0; i < dropdowns.length; i++) {
    if (event.target === dropdowns[i] || event.target === links[i]) {
      isDropdownClick = true;
      break;
    }
  }

  if (!isDropdownClick) {
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      var openLink = links[i];
      if (openDropdown.classList.contains("fade-in")) {
        openDropdown.classList.remove("fade-in");
        openDropdown.classList.add("hidden");
        openLink.classList.remove("active");
      }
    }
  }
});

var dropdownLinks = document.querySelectorAll(".dropdown-content a");
for (var i = 0; i < dropdownLinks.length; i++) {
  dropdownLinks[i].addEventListener("mouseenter", function () {
    this.style.color = "#fa65b1";
  });

  dropdownLinks[i].addEventListener("mouseleave", function () {
    if (!this.classList.contains("active")) {
      this.style.color = "";
    }
  });
}

var navLinks = document.querySelectorAll(".nav li:not(.dropdown) a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("mouseenter", function () {
    for (var j = 0; j < navLinks.length; j++) {
      if (!navLinks[j].classList.contains("active")) {
        navLinks[j].style.color = "";
      }
    }
    if (
      !this.classList.contains("active") &&
      !this.classList.contains("initiative") &&
      !this.classList.contains("border-first-button") // Exclude "border-first-button" class
    ) {
      this.style.color = "#fa65b1";
    }
  });

  navLinks[i].addEventListener("mouseleave", function () {
    if (
      !this.classList.contains("active") &&
      !this.classList.contains("initiative") &&
      !this.classList.contains("border-first-button") // Exclude "border-first-button" class
    ) {
      this.style.color = "";
    }
  });
}
