//getting the elements for the css magic
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navBarLinks = document.getElementsByClassName('nav-bar-links')[0];

console.log("In the script, trying to get the element");

toggleButton.addEventListener('click', ()=> {
    navBarLinks.classList.toggle('active');
});