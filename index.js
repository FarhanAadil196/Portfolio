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


const educateBtn = document.getElementById("education");
const experienceBtn = document.getElementById("experience");
const skillBtn = document.getElementById("skill");

const education = document.getElementById("educates");
const experience = document.getElementById("experiences");
const skills = document.getElementById("skills");

const activeColor = "#2563EB"; // Professional blue

function resetTabs() {
    // Reset buttons
    [educateBtn, experienceBtn, skillBtn].forEach(btn => {
        btn.style.backgroundColor = "transparent";
        btn.style.color = "#111827";
        btn.style.borderRadius = "30px";
    });

    // Hide all content
    education.style.display = "none";
    experience.style.display = "none";
    skills.style.display = "none";
}

function activateTab(button, section) {
    resetTabs();

    button.style.backgroundColor = activeColor;
    button.style.color = "#ffffff";

    section.style.display = "block";
}

// Event Listeners
educateBtn.addEventListener("click", () => {
    activateTab(educateBtn, education);
});

experienceBtn.addEventListener("click", () => {
    activateTab(experienceBtn, experience);
});

skillBtn.addEventListener("click", () => {
    activateTab(skillBtn, skills);
});

// Default tab when page loads
activateTab(educateBtn, education);

const links = document.querySelectorAll('.blank').forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
});


function reset1ButtonColors() {
    homebtn.style.borderBottom = "transparent";
    projectbtn.style.borderBottom = "transparent";
    contactbtn.style.borderBottom = "transparent";
    aboutbtn.style.borderBottom = "transparent";
}
let homebtn = document.getElementById('homebtn');
let aboutbtn = document.getElementById('aboutbtn');
let projectbtn = document.getElementById('projectbtn');
let contactbtn = document.getElementById('contactbtn');

homebtn.addEventListener('click' , () => {
    reset1ButtonColors();
    homebtn.style.borderBottom = '1px solid white';
})

aboutbtn.addEventListener('click' , () => {
    reset1ButtonColors();
    aboutbtn.style.borderBottom = '1px solid white';
})

projectbtn.addEventListener('click' , () => {
    reset1ButtonColors();
    projectbtn.style.borderBottom = '1px solid white';
})

contactbtn.addEventListener('click' , () => {
    reset1ButtonColors();
    contactbtn.style.borderBottom= '1px solid white';
})

let hero = document.getElementById('home')
let about = document.getElementById('about')
let projects = document.getElementById('projects')
let contact = document.getElementById('contact')

hero.addEventListener("scroll", (event) => {
    lastKnownScrollPosition = window.scrollY;
});

about.addEventListener('scroll' , () => {
    btn.style.backgroundColor='black';
})

const sentences = ["Junior Associate",
  "Mortgage Operations Professional",
  "Policy Production Specialist",
  "React Developer"];
let part = 0;
let index = 0;
let interval = 100;
const typingText = document.getElementById('typing-text');

function typeSentence() {
  let currentSentence = sentences[part];

  typingText.textContent = currentSentence.slice(0, index++);

  if (index > currentSentence.length) {
    setTimeout(() => {
      index = 0;
      part = (part + 1) % sentences.length; // Switch to next sentence
      setTimeout(typeSentence, interval); // Start typing the next sentence
    }, 1000); // Pause before moving to the next sentence
  } else {
    setTimeout(typeSentence, interval); // Continue typing
  }
}

typeSentence(); // Start the typing effect
