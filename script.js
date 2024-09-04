
const projectCarousel = document.querySelector('.project-carousel');
const projectItems = document.querySelectorAll('.project-item');
const totalProjects = projectItems.length;
let currentIndex = 0;

const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

// Function to toggle arrow visibility
function toggleArrows() {
    leftArrow.classList.toggle('hidden', currentIndex === 0);
    rightArrow.classList.toggle('hidden', currentIndex === totalProjects - 1);
}

// Initial check to hide left arrow at the start
toggleArrows();

rightArrow.addEventListener('click', debounce(() => {
    if (currentIndex < totalProjects - 1) {
        currentIndex++;
        projectCarousel.style.transform = `translateX(-${currentIndex * 100}vw)`;
        toggleArrows();
    }
}, 250));  // Adjust debounce delay as needed

leftArrow.addEventListener('click', debounce(() => {
    if (currentIndex > 0) {
        currentIndex--;
        projectCarousel.style.transform = `translateX(-${currentIndex * 100}vw)`;
        toggleArrows();
    }
}, 250));

// Debounce function to prevent rapid clicks
function debounce(func, delay) {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}
// Open sidebar
document.getElementById("menu-bar").onclick = function() {
    document.getElementById("sidebar").classList.add("open");
}

// Close sidebar with close button
document.getElementById("closebtn").onclick = function() {
    document.getElementById("sidebar").classList.remove("open");
}

// Close sidebar when clicking outside of it
document.addEventListener("click", function(event) {
    var sidebar = document.getElementById("sidebar");
    var menuBar = document.getElementById("menu-bar");
    if (!sidebar.contains(event.target) && !menuBar.contains(event.target)) {
        sidebar.classList.remove("open");
    }
});