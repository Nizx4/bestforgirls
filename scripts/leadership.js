// Leadership page JS: affirmations, changemakers, form
const affirmations = [
  "I am confident and capable.",
  "My voice matters.",
  "I can lead and inspire others.",
  "I am proud of who I am.",
  "I turn challenges into opportunities.",
  "I am brave enough to try new things.",
  "I believe in my dreams and goals.",
  "I am a force for positive change.",
  "I celebrate my uniqueness.",
  "I lift up others as I rise."
];

const changemakers = [
  {
    name: "Greta Thunberg",
    img: "assets/greta_thunberg.jpg",
    desc: "Climate activist inspiring youth worldwide."
  },
  {
    name: "Ruth Bader Ginsburg",
    img: "assets/ruth_bader_ginsburg.jpg",
    desc: "Supreme Court Justice and gender equality champion."
  },
  {
    name: "Moana (Disney)",
    img: "assets/moana.jpg",
    desc: "Fictional leader who follows her heart and helps her people."
  },
  {
    name: "Malala Yousafzai",
    img: "assets/malala_yousafzai.jpg",
    desc: "Nobel laureate and advocate for girls' education."
  },
  {
    name: "Shuri (Black Panther)",
    img: "assets/shuri.jpg",
    desc: "Brilliant scientist and tech leader of Wakanda."
  },
  {
    name: "Serena Williams",
    img: "assets/serena_williams.jpg",
    desc: "Tennis legend and advocate for women in sports."
  }
];

document.addEventListener('DOMContentLoaded', () => {
  // Affirmation
  const affirmationDiv = document.querySelector('.affirmation-block');
  const dailyAff = affirmations[Math.floor(Math.random() * affirmations.length)];
  affirmationDiv.innerHTML = `<blockquote>“${dailyAff}”</blockquote>`;
  // Changemakers
  const cardsDiv = document.querySelector('.changemaker-cards');
  cardsDiv.innerHTML = changemakers.map(c => `
    <div class="changemaker-card">
      <img src="${c.img}" alt="${c.name}">
      <h3>${c.name}</h3>
      <p>${c.desc}</p>
    </div>
  `).join('');
  // Form (static, no backend)
  const form = document.querySelector('.voice-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('form-message').textContent = "Thank you for sharing! (This is a static demo.)";
    form.reset();
  });
  // Hamburger menu
  const hamburger = document.getElementById('hamburger-menu');
  const navLinks = document.querySelector('.nav-links');
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
});
