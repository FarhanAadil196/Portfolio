// let design = document.getElementById('Design')
// gsap.fromTo("#h-name", { opacity: 0, x: -150 }, { duration: 2, opacity: 1,x: 0 });
// gsap.fromTo("#h-para", { opacity: 0, x: -150 }, { duration: 2, opacity: 1, x: 0 });
 // Navbar Fade In
 gsap.fromTo(".nav-links li", {
    autoAlpha: 0,    // Start with opacity 0 (invisible)
    y: -50           // Move it upward off the screen
}, {
    autoAlpha: 1,    // End at opacity 1 (fully visible)
    y: 0,            // End at its natural position
    duration: 1,     // Duration of the animation
    delay: 0.1,      // Start the animation with a slight delay
    stagger: 0.2     // Stagger animation for each li
});

// gsap.fromTo("#header", { opacity: 0 , y: -100}, { duration: 1.5, opacity: 1, y: 0});
// gsap.fromTo("#heroimg", { opacity: 0 , x:   100}, { duration: 1.5, opacity: 1, x: 0});
// gsap.fromTo("#container", { opacity: 0 }, { duration: 2, opacity: 1});
// gsap.fromTo("#cv-btn", { opacity: 0 }, { duration: 2, opacity: 1});

window.onscroll = function () {
    changeBackgroundColor();
};

function changeBackgroundColor() {
    let header = document.getElementById('header');
    let navlink = document.getElementById('navlink')
    let scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        header.style.backgroundColor = '#1E3E62';
        navlink.style.backgroundColor = '#1E3E62';
        let name = document.getElementById('name').style.color = "#FF6500"
    } else {
        let name = document.getElementById('name').style.color = "white"
        header.style.backgroundColor = 'transparent';
        navlink.style.backdropFilter = 'blur(7px)';
        navlink.style.backgroundColor = 'transparent';
    }
}

let educatebtn = document.getElementById('education');
let experiencebtn = document.getElementById('experience');
let skillbtn = document.getElementById('skill');
let education = document.getElementById('educates');
let experience = document.getElementById('experiences');
let skills = document.getElementById('skills');


function resetButtonColors() {
    educatebtn.style.backgroundColor = "transparent";
    experiencebtn.style.backgroundColor = "transparent";
    skillbtn.style.backgroundColor = "transparent";
}


educatebtn.addEventListener('click', () => {
    resetButtonColors(); // Reset all button colors
    educatebtn.style.backgroundColor = "#FF6500"; // Set active button color
    educatebtn.style.borderRadius = "30px"; // Set active button color
    education.style.display = "block";
    experience.style.display = "none";
    skills.style.display = "none";
});


experiencebtn.addEventListener('click', () => {
    resetButtonColors(); // Reset all button colors
    experiencebtn.style.backgroundColor = "#FF6500"; // Set active button color
    experiencebtn.style.borderRadius = "30px";  // Set active button color
    education.style.display = "none";
    experience.style.display = "block";
    skills.style.display = "none";
});


skillbtn.addEventListener('click', () => {
    resetButtonColors(); // Reset all button colors
    skillbtn.style.backgroundColor = "#FF6500"; // Set active button color
    skillbtn.style.borderRadius = "30px";  // Set active button color
    education.style.display = "none";
    experience.style.display = "none";
    skills.style.display = "block";
});


const links = document.querySelectorAll('.blank').forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
});



