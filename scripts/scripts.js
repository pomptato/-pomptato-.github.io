/*Javascript to get the menu to go up */
/*This returns an array, and gets the first element in that array (which is 0)*/

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})
