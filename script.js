// ── Typewriter ──
const phrases = [
  'Network Engineer',
  'NOC Engineer',
  'IT Support Specialist',
  'IT Technician',
  'Cybersecurity Graduate'
];
let pi = 0, ci = 0, deleting = false;
const tel = document.getElementById('ttext');

function type() {
  const word = phrases[pi];
  if (!deleting) {
    tel.textContent = word.slice(0, ++ci);
    if (ci === word.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    tel.textContent = word.slice(0, --ci);
    if (ci === 0) {
      deleting = false;
      pi = (pi + 1) % phrases.length;
    }
  }
  setTimeout(type, deleting ? 55 : 85);
}

setTimeout(type, 900);

// ── Scroll Reveal ──
const fades = document.querySelectorAll('.fade');
const io = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('in'), i * 65);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.07 });

fades.forEach(el => io.observe(el));

// ── Active Nav Highlight ──
const secs = document.querySelectorAll('section[id]');
const navAs = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let cur = '';
  secs.forEach(s => {
    if (window.scrollY >= s.offsetTop - 80) cur = s.id;
  });
  navAs.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${cur}` ? 'var(--blue2)' : '';
  });
});
