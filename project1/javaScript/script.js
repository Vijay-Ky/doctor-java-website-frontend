
$(document).ready(function () {
    var toggleButton = document.getElementById('toggleButton');
    var navbarMenu = document.getElementById('navbarMenu');

    // Toggle the opened class when the hamburger icon is clicked
    toggleButton.addEventListener('click', function () {
        toggleButton.classList.toggle('opened');
        navbarMenu.classList.toggle('opened'); // Show/Hide the navbar menu
    });
});


document.getElementById("currentYear").textContent = new Date().getFullYear();