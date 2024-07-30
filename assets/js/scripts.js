function toggleMobileMenu() {
    document.getElementById("menu").classList.toggle("active")
}

document.addEventListener('DOMContentLoaded', function() {
    var projectsLink = document.querySelector('a[href="#projects-section"]'); // Find the 'Projects' link
    projectsLink.addEventListener('click', function(event) { // Listen for click events on the 'Projects' link
        event.preventDefault(); // Prevent the default anchor link behavior
        var heroSection = document.getElementById('hero-section'); // Find the 'hero-section'
        var endOfHeroSection = heroSection.offsetTop + heroSection.offsetHeight; // Calculate the end position of the 'hero-section'
        window.scrollTo({
            // Scroll to the end of the 'hero-section'
            top: endOfHeroSection,
            behavior: 'smooth'
        });
    });

    var experienceLink = document.querySelector('a[href="#experience-section"]'); // Find the 'Projects' link
    experienceLink.addEventListener('click', function(event) { // Listen for click events on the 'Projects' link
        event.preventDefault(); // Prevent the default anchor link behavior
        var projSection = document.getElementById('projects-section'); // Find the 'hero-section'
        var endOfProjSection = projSection.offsetTop + projSection.offsetHeight; // Calculate the end position of the 'hero-section'
        window.scrollTo({
            // Scroll to the end of the 'hero-section'
            top: endOfProjSection,
            behavior: 'smooth'
        });
    });

    var aboutMeLink = document.querySelector('a[href="#about-me-section"]'); // Find the 'Projects' link
    aboutMeLink.addEventListener('click', function(event) { // Listen for click events on the 'Projects' link
        event.preventDefault(); // Prevent the default anchor link behavior
        var expSection = document.getElementById('experience-section'); // Find the 'hero-section'
        var endOfExpSection = expSection.offsetTop + expSection.offsetHeight; // Calculate the end position of the 'hero-section'
        window.scrollTo({
            // Scroll to the end of the 'hero-section'
            top: endOfExpSection,
            behavior: 'smooth'
        });
    });

});