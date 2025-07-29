// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Scroll animation observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(section => observer.observe(section));

// Hover effect
document.querySelectorAll('.project').forEach(project => {
  project.addEventListener('mouseenter', () => project.style.transform = 'translateX(5px) scale(1.02)');
  project.addEventListener('mouseleave', () => project.style.transform = 'translateX(0) scale(1)');
});

// Typing effect
const titles = ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver', 'Creative Thinker'];
let currentTitle = 0, currentChar = 0, isDeleting = false;

function typeEffect() {
  const titleElement = document.querySelector('.title');
  const current = titles[currentTitle];
  if (!isDeleting) {
    titleElement.textContent = current.substring(0, currentChar + 1);
    currentChar++;
    if (currentChar === current.length) {
      isDeleting = true;
      setTimeout(typeEffect, 2000);
      return;
    }
  } else {
    titleElement.textContent = current.substring(0, currentChar - 1);
    currentChar--;
    if (currentChar === 0) {
      isDeleting = false;
      currentTitle = (currentTitle + 1) % titles.length;
    }
  }
  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

setTimeout(typeEffect, 1000);
