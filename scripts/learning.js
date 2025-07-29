// Learning page JS: STEM stars, DIY projects, book club, quiz
const stemStars = [
  {
    name: "Katherine Johnson",
    img: "assets/katherine_johnson.jpg",
    bio: "NASA mathematician who helped put humans on the moon."
  },
  {
    name: "Ada Lovelace",
    img: "assets/ada_lovelace.jpg",
    bio: "The world's first computer programmer."
  },
  {
    name: "Mae Jemison",
    img: "assets/mae_jemison.jpg",
    bio: "First Black woman in space."
  },
  {
    name: "Reshma Saujani",
    img: "assets/reshma_saujani.jpg",
    bio: "Founder of Girls Who Code."
  },
  {
    name: "Maryam Mirzakhani",
    img: "assets/maryam_mirzakhani.jpg",
    bio: "First woman to win the Fields Medal in mathematics."
  },
  {
    name: "Gitanjali Rao",
    img: "assets/gitanjali_rao.jpg",
    bio: "Inventor and TIME’s Kid of the Year 2020."
  }
];

const diyProjects = [
  {
    title: "DIY Desk Organizer",
    emoji: "🪑",
    desc: "Make your own colorful desk organizer from recycled materials!",
    link: "article.html#diy1"
  },
  {
    title: "Study Tips for Finals",
    emoji: "📚",
    desc: "Smart strategies to ace your tests and reduce stress.",
    link: "article.html#study1"
  },
  {
    title: "Intro to Coding: Draw with Scratch",
    emoji: "💻",
    desc: "Try your first coding project using Scratch—no experience needed!",
    link: "article.html#coding1"
  },
  {
    title: "Friendship Bracelets",
    emoji: "👩",
    desc: "Create colorful bracelets and learn about patterns and symmetry.",
    link: "article.html#diy2"
  },
  {
    title: "Mini Plant Terrarium",
    emoji: "🌳",
    desc: "Build a tiny plant world in a jar—science and decor in one!",
    link: "article.html#diy3"
  }
];

const bookClub = {
  title: "The Confidence Code for Girls",
  img: "assets/learning.jpg",
  quote: "Confidence is a skill, not a trait. You can build it!",
  review: "A must-read for any girl ready to take on the world. Inspiring, practical, and fun."
};

const bookClub2 = {
  title: "Hidden Figures (Young Readers Edition)",
  img: "assets/learning.jpg",
  quote: "You are no less than anyone else.",
  review: "The inspiring story of brilliant women who helped launch the first astronauts—perfect for STEM lovers."
};

const quiz = {
  question: "Which learning style fits you best?",
  options: [
    "Visual (I like pictures, diagrams, and colors)",
    "Auditory (I remember what I hear)",
    "Kinesthetic (I learn by doing)",
    "Reading/Writing (I love notes and lists)"
  ],
  results: [
    "You learn best with visuals! Try drawing, color-coding, and using charts.",
    "You learn best by listening! Try podcasts, discussions, or reading aloud.",
    "You learn best by doing! Try hands-on projects, experiments, and movement.",
    "You learn best by reading and writing! Try making lists, notes, and summaries."
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  // STEM Stars
  const biosDiv = document.querySelector('#stem-stars .mini-bios');
  biosDiv.innerHTML = stemStars.map(star => `
    <div class="mini-bio">
      <img src="${star.img}" alt="${star.name}">
      <div><strong>${star.name}</strong><br><span>${star.bio}</span></div>
    </div>
  `).join('');
  // DIY Projects
  const projDiv = document.querySelector('#diy-projects .project-cards');
  projDiv.innerHTML = diyProjects.map(proj => `
    <div class="project-card">
      <span class="diy-emoji" aria-label="${proj.title}" role="img">${proj.emoji}</span>
      <h3>${proj.title}</h3>
      <p class="project-desc">${proj.desc}</p>
      <div class="project-card-btn-row">
        <a href="${proj.link}" class="btn-card">Try It</a>
      </div>
    </div>
  `).join('');
  // Book Club (alternate between two books)
  const bookDiv = document.querySelector('#book-club .book-of-month');
  const book = Math.random() > 0.5 ? bookClub : bookClub2;
  bookDiv.innerHTML = `
    <div class="book-card">
      <img src="${book.img}" alt="${book.title}">
      <h3>${book.title}</h3>
      <blockquote>“${book.quote}”</blockquote>
      <p>${book.review}</p>
    </div>
  `;
  // Quiz with interactive result
  const quizDiv = document.getElementById('reflection-quiz');
  quizDiv.innerHTML = `
    <div class="quiz-box">
      <h3>Quick Reflection</h3>
      <p>${quiz.question}</p>
      <ul>
        ${quiz.options.map((opt, i) => `<li><label><input type="radio" name="quiz" value="${i}"> ${opt}</label></li>`).join('')}
      </ul>
      <div id="quiz-result" style="margin-top:1em;color:var(--teal);"></div>
    </div>
  `;
  quizDiv.querySelectorAll('input[name="quiz"]').forEach(input => {
    input.addEventListener('change', e => {
      const idx = parseInt(e.target.value);
      quizDiv.querySelector('#quiz-result').textContent = quiz.results[idx];
    });
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
