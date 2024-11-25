// Initialize AOS Library
AOS.init({
  duration: 1000,
  once: true,
});

// Initialize Typed.js for Typing Animation
var typed = new Typed('.typed-text', {
  strings: ["NITISH KUMAR", "a passionate programmer", "Flutter developer"],
  typeSpeed: 100,    // Adjusted typing speed
  backSpeed: 50,     // Adjusted backspacing speed
  loop: true,
});

// Initialize Rellax.js for Parallax Scrolling
var rellax = new Rellax('[data-rellax-speed]');

// Initialize Particles.js for Background Particles
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded');
});

// Preloader Animation
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  preloader.style.display = 'none';

  // Animate Skill Bars if already in view
  checkSkillBars();

  // Apply saved theme preference
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
  }
});

// Scroll-to-Top Button Functionality
const scrollBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Theme Toggle Functionality
const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');

  // Save theme preference in localStorage
  if (document.body.classList.contains('light-mode')) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }
});

// Page Transitions and Navigation Controls
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.control'); 
const allSections = document.querySelector('main');

function pageTransitions() {
  // Active Button Click
  sectBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      let currentBtn = document.querySelector('.active-btn');
      currentBtn.classList.remove('active-btn');
      this.classList.add('active-btn');

      // Display Active Section
      const id = this.dataset.id;
      sections.forEach(section => {
        section.classList.remove('active');
      });
      const activeSection = document.getElementById(id);
      activeSection.classList.add('active');
    });
  });
}

pageTransitions();

// Animated Skill Bars
function animateSkillBars() {
  const progressSpans = document.querySelectorAll('.progress span');
  progressSpans.forEach(span => {
    span.style.width = span.getAttribute('data-progress');
  });
}

// Trigger Skill Bars Animation on Scroll
function checkSkillBars() {
  const skillsSection = document.querySelector('.about-stats');
  if (skillsSection) {
    const skillsPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (skillsPosition < screenPosition) {
      animateSkillBars();
      window.removeEventListener('scroll', checkSkillBars);
    }
  }
}

window.addEventListener('scroll', checkSkillBars);

// Reveal Timeline Items on Scroll
function revealTimelineItems() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach(item => {
    const itemPosition = item.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (itemPosition < screenPosition - 100) {
      item.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealTimelineItems);

// Initial Call to Reveal Timeline Items
revealTimelineItems();

// Contact Form Validation
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', function(event) {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    if (name.value.trim() === '' || email.value.trim() === '') {
      event.preventDefault();
      alert('Please fill in all required fields.');
    }
  });
}
