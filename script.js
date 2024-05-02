document.addEventListener('DOMContentLoaded', function() {
    // Example of JavaScript to dynamically change the theme or add interactivity
    const header = document.querySelector('header');
    header.addEventListener('click', function() {
        document.body.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    });
});
