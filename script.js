const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const closeIcon = document.getElementById('close-icon');

// Open Navbar with Hamburger Icon
hamburger.addEventListener('click', () => {
    navLinks.classList.add('active');
});

// Close Navbar with Close Icon
closeIcon.addEventListener('click', () => {
    navLinks.classList.remove('active');
});










// Function to toggle the 'liked' state of the like icon
function toggleLike(icon) {
    icon.classList.toggle('liked');
}
