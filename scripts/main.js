// Main JS for BestForGirls.com homepage
// Rotating quotes and facts, hamburger menu, etc.

const quotes = [
  {
    text: "There is no limit to what we, as women, can accomplish.",
    author: "Michelle Obama"
  },
  {
    text: "The most courageous act is still to think for yourself. Aloud.",
    author: "Coco Chanel"
  },
  {
    text: "You are your best thing.",
    author: "Toni Morrison"
  },
  {
    text: "Girls should never be afraid to be smart.",
    author: "Emma Watson"
  },
  {
    text: "I raise up my voice—not so that I can shout, but so that those without a voice can be heard.",
    author: "Malala Yousafzai"
  }
];

const facts = [
  "Women make up 28% of the STEM workforce in the U.S.",
  "Marie Curie was the first woman to win a Nobel Prize.",
  "Girls who play sports are more likely to graduate from college.",
  "Ada Lovelace is considered the world's first computer programmer.",
  "Reading just 20 minutes a day exposes you to 1.8 million words a year!"
];

function rotateQuote() {
  const q = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('rotating-quote').innerHTML =
    `<blockquote>“${q.text}”<footer>— ${q.author}</footer></blockquote>`;
}

function rotateFact() {
  const f = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById('did-you-know').innerHTML =
    `<strong>Did you know?</strong> ${f}`;
}

document.addEventListener('DOMContentLoaded', () => {
  rotateQuote();
  rotateFact();

  // Hamburger menu for mobile
  const hamburger = document.getElementById('hamburger-menu');
  const navLinks = document.querySelector('.nav-links');
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close menu on nav link click (mobile UX)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
});
