// article.js – dynamically loads article content by hash from lifestyleArticles
const articles = [
  // Style Tips
  {
    id: "style1",
    section: "Style Tips",
    title: "5 Effortless Everyday Outfits",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    content: `<p>Discover simple, stylish looks you can put together in minutes—perfect for school, work, or weekends!<br><ul><li>Classic jeans & tee</li><li>Comfy dress & sneakers</li><li>Denim jacket layers</li><li>Bright skirt & neutral top</li><li>Soft joggers & hoodie</li></ul></p>`
  },
  {
    id: "style2",
    section: "Style Tips",
    title: "Accessorize Like a Pro",
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80",
    content: `<p>Accessories can transform any outfit. Try:<ul><li>Layered necklaces</li><li>Statement earrings</li><li>Patterned scarves</li><li>Fun hair clips</li></ul></p>`
  },
  {
    id: "style3",
    section: "Style Tips",
    title: "Wardrobe Essentials for Teens",
    img: "assets/lifestyle.jpg",
    content: `<p>Build your confidence with these essentials:<ul><li>Fitted jeans</li><li>White tee</li><li>Comfy sneakers</li><li>Cardigan or denim jacket</li><li>Little black dress</li></ul></p>`
  },
  // Clean Beauty
  {
    id: "beauty1",
    section: "Clean Beauty",
    title: "Natural Skincare for Teens",
    img: "assets/lifestyle.jpg",
    content: `<p>Gentle routines and clean products to keep your skin glowing and healthy. <br>Tip: Always remove makeup before bed and use SPF daily!</p>`
  },
  {
    id: "beauty2",
    section: "Clean Beauty",
    title: "DIY Face Masks with Kitchen Ingredients",
    img: "assets/lifestyle.jpg",
    content: `<p>Try these safe, effective recipes:<ul><li>Honey & oatmeal (soothing)</li><li>Yogurt & turmeric (brightening)</li><li>Avocado & olive oil (hydrating)</li></ul></p>`
  },
  {
    id: "beauty3",
    section: "Clean Beauty",
    title: "Makeup Basics: A Beginner's Guide",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    content: `<p>Less is more! Start with tinted moisturizer, a swipe of mascara, and tinted lip balm for a fresh look.</p>`
  },
  // Wellness Routines
  {
    id: "wellness1",
    section: "Wellness Routines",
    title: "Morning Habits for a Confident Day",
    img: "assets/lifestyle.jpg",
    content: `<p>Start your day with:<ul><li>Stretching or yoga</li><li>Positive affirmations</li><li>Healthy breakfast</li><li>Setting your intention</li></ul></p>`
  },
  {
    id: "wellness2",
    section: "Wellness Routines",
    title: "Mindful Journaling: Simple Prompts",
    img: "assets/lifestyle.jpg",
    content: `<p>Try these prompts:<ul><li>What made me smile today?</li><li>What am I grateful for?</li><li>How can I show kindness?</li></ul></p>`
  },
  {
    id: "wellness3",
    section: "Wellness Routines",
    title: "Easy At-Home Workouts for Girls",
    img: "assets/lifestyle.jpg",
    content: `<p>No gym needed! Try:<ul><li>10 jumping jacks</li><li>10 squats</li><li>10 pushups (on knees is fine!)</li><li>Dance to your favorite song</li></ul></p>`
  },
  // --- Learning DIY & Projects ---
  {
    id: "diy1",
    section: "DIY & Projects",
    title: "DIY Desk Organizer",
    img: "assets/learning.jpg",
    content: `<p>Transform recycled boxes and tubes into a colorful desk organizer!<br><strong>What you'll need:</strong><ul><li>Empty cereal box or small cardboard box</li><li>Toilet paper rolls</li><li>Paint, markers, or colored paper</li><li>Scissors & glue</li></ul><strong>Steps:</strong><ol><li>Cut the box to your desired height for pens, notes, etc.</li><li>Decorate the box and tubes with paint or paper.</li><li>Glue tubes inside or beside the box for extra compartments.</li><li>Let dry, then organize your supplies in style!</li></ol><em>Empower your space, empower your mind!</em></p>`
  },
  {
    id: "study1",
    section: "DIY & Projects",
    title: "Study Tips for Finals",
    img: "assets/learning.jpg",
    content: `<p>Conquer finals with confidence!<br><strong>Top Tips:</strong><ul><li>Break study sessions into 25-min sprints (Pomodoro Method).</li><li>Make colorful flashcards for key concepts.</li><li>Teach a friend—explaining helps you learn!</li><li>Take mindful breaks: stretch, hydrate, breathe.</li><li>Get good sleep—your brain needs it!</li></ul><em>Smart, balanced studying brings out your best.</em></p>`
  },
  {
    id: "coding1",
    section: "DIY & Projects",
    title: "Intro to Coding: Draw with Scratch",
    img: "assets/learning.jpg",
    content: `<p>Try your first code art project with Scratch!<br><strong>What you'll do:</strong><ul><li>Go to <a href='https://scratch.mit.edu/' target='_blank'>scratch.mit.edu</a></li><li>Start a new project and choose the "Pen" extension.</li><li>Drag blocks to make the cat draw a square, triangle, or your own shape!</li><li>Experiment with colors, loops, and creative designs.</li></ul><em>Every coder starts with a single block. Dream big!</em></p>`
  },
  {
    id: "diy2",
    section: "DIY & Projects",
    title: "Friendship Bracelets",
    img: "assets/learning.jpg",
    content: `<p>Create beautiful bracelets for yourself or friends!<br><strong>You’ll need:</strong><ul><li>Embroidery floss or yarn (3+ colors)</li><li>Scissors</li><li>Tape or clipboard</li></ul><strong>How to:</strong><ol><li>Cut 3+ strands (about 18" each). Tie a knot at one end.</li><li>Tape the knot to a table or use a clipboard.</li><li>Braid or knot the strands in a pattern you like.</li><li>Tie off the end and share your creation!</li></ol><em>Handmade gifts spread joy and creativity.</em></p>`
  },
  {
    id: "diy3",
    section: "DIY & Projects",
    title: "Mini Plant Terrarium",
    img: "assets/learning.jpg",
    content: `<p>Build a tiny world of green!<br><strong>You’ll need:</strong><ul><li>Clean glass jar</li><li>Small pebbles or rocks</li><li>Potting soil</li><li>Tiny plants or moss</li><li>Decorative stones, shells, or toys (optional)</li></ul><strong>Steps:</strong><ol><li>Layer pebbles, then soil in the jar.</li><li>Plant your greenery and gently pat the soil.</li><li>Add decorations for personality.</li><li>Spritz with water and place in indirect light.</li></ol><em>Grow something beautiful—just like you!</em></p>`
  }]
;

function renderArticle() {
  const hash = window.location.hash.replace('#', '');
  const article = articles.find(a => a.id === hash);
  const el = document.getElementById('article-content');
  if (!article) {
    el.innerHTML = `<div style="text-align:center;color:var(--coral);font-size:1.1rem;padding:2.5rem 0;">Sorry, that article was not found.</div>`;
    return;
  }
  el.innerHTML = `
    <div class="article-card-container">
      <div class="article-card" tabindex="0" aria-label="${article.title}">
        <img src="${article.img}" alt="${article.section} image" />
        <span class="section-tag" aria-label="${article.section}">${article.section}</span>
        <h1>${article.title}</h1>
        <div class="article-body">${article.content}</div>
        <div class="card-actions" style="margin-top:auto;">
          <a href="${[
            '5 Effortless Everyday Outfits',
            'Easy At-Home Workouts for Girls',
            'Style Tips',
            'Wellness Routines',
            'Beauty Basics',
            'wellness1','wellness2','wellness3','style1','style2','style3','beauty1','beauty2','beauty3'
          ].some(val => (article.title && article.title.includes(val)) || (article.section && article.section.includes(val)) || (article.id && article.id.includes(val))) ? 'lifestyle.html' : 'learning.html'}" class="btn btn-secondary">← Back</a>
        </div>
      </div>
    </div>
  `;
}
// Fade-in animation for article card (for consistency)
const style = document.createElement('style');
style.innerHTML = `
@keyframes fadein-card {
  from { opacity: 0; transform: translateY(30px) scale(0.97); }
  to { opacity: 1; transform: none; }
}`;
document.head.appendChild(style);


document.addEventListener('DOMContentLoaded', () => {
  renderArticle();
  window.addEventListener('hashchange', renderArticle);
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
