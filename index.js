// Add active class to the current button (highlight it)
window.onload = function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav .nav-section ul li a");

  function updateActiveSection() {
    let maxVisibleArea = 0;
    let activeSection = null;

    sections.forEach((section) => {
      const visibleArea = getVisibleArea(section);
      if (visibleArea > maxVisibleArea) {
        maxVisibleArea = visibleArea;
        activeSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((a) => {
      a.classList.remove("active");
      if (a.getAttribute("href") == "#" + activeSection) {
        a.classList.add("active");
      }
    });
  }

  function getVisibleArea(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth;
    const visibleHeight =
      Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
    const visibleWidth =
      Math.min(rect.right, windowWidth) - Math.max(rect.left, 0);
    return visibleHeight * visibleWidth;
  }

  window.addEventListener("scroll", updateActiveSection);
  window.addEventListener("resize", updateActiveSection);
};
// var navBar = document.getElementById("nav");
// var navLinks = navBar.getElementsByClassName("nav-link-ltr");
// for (var i = 0; i < navLinks.length; i++) {
//   navLinks[i].addEventListener("click", function () {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }
