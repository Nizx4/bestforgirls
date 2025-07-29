// About page JS: creator bios
const bios = [
  {
    name: "Ava Chen",
    img: "assets/about.jpg",
    desc: "Designer & STEM advocate. Loves empowering girls through creativity."
  },
  {
    name: "Sofia Patel",
    img: "assets/about.jpg",
    desc: "Writer & mentor. Passionate about education and leadership."
  },
  {
    name: "Jasmine Rivera",
    img: "assets/about.jpg",
    desc: "Developer & wellness enthusiast. Believes in tech for good."
  },
  {
    name: "Fatima Al-Mansouri",
    img: "assets/about.jpg",
    desc: "Robotics coach and advocate for girls in engineering."
  },
  {
    name: "Emily Johnson",
    img: "assets/about.jpg",
    desc: "Artist and mental health champion. Loves building inclusive communities."
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const bioDiv = document.getElementById('bio-cards');
  bioDiv.innerHTML = bios.map(bio => `
    <div class="bio-card">
      <img src="${bio.img}" alt="${bio.name}">
      <h3>${bio.name}</h3>
      <p>${bio.desc}</p>
    </div>
  `).join('');
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
