// Lifestyle page JS: article grid, search, bookmark
const lifestyleArticles = [
  // Style Tips
  {
    id: 1,
    section: "Style Tips",
    title: "5 Effortless Everyday Outfits",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    preview: "Discover simple, stylish looks you can put together in minutes—perfect for school, work, or weekends!",
    link: "article.html#style1"
  },
  {
    id: 2,
    section: "Style Tips",
    title: "Accessorize Like a Pro",
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80",
    preview: "How to use accessories to express your personality and elevate any look.",
    link: "article.html#style2"
  },
  {
    id: 3,
    section: "Style Tips",
    title: "Wardrobe Essentials for Teens",
    img: "assets/wardrobe-closet.jpg",
    preview: "The must-have pieces every girl should own for a versatile, confidence-boosting closet.",
    link: "article.html#style3"
  },
  // Clean Beauty
  {
    id: 4,
    section: "Clean Beauty",
    title: "Natural Skincare for Teens",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80",
    preview: "Gentle routines and clean products to keep your skin glowing and healthy.",
    link: "article.html#beauty1"
  },
  {
    id: 5,
    section: "Clean Beauty",
    title: "DIY Face Masks with Kitchen Ingredients",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    preview: "Fun, safe, and effective recipes for glowing skin—straight from your pantry!",
    link: "article.html#beauty2"
  },
  {
    id: 6,
    section: "Clean Beauty",
    title: "Makeup Basics: A Beginner's Guide",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    preview: "Learn how to create a natural, fresh look with minimal products and maximum confidence.",
    link: "article.html#beauty3"
  },
  // Wellness Routines
  {
    id: 7,
    section: "Wellness Routines",
    title: "Morning Habits for a Confident Day",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    preview: "Start your day with these empowering habits for mind and body wellness.",
    link: "article.html#wellness1"
  },
  {
    id: 8,
    section: "Wellness Routines",
    title: "Mindful Journaling: Simple Prompts",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    preview: "Explore easy journaling prompts to boost self-awareness and positivity.",
    link: "article.html#wellness2"
  },
  {
    id: 9,
    section: "Wellness Routines",
    title: "Easy At-Home Workouts for Girls",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80",
    preview: "No gym needed! Fun, energizing routines to help you feel strong and healthy.",
    link: "article.html#wellness3"
  }
];

function renderArticles(articles) {
  const container = document.getElementById('article-list');
  container.innerHTML = '';
  if (!articles.length) {
    container.innerHTML = `<div style="text-align:center;color:var(--coral);font-size:1.1rem;padding:2.5rem 0;">No articles found. Try a different search!</div>`;
    return;
  }
  articles.forEach((article, i) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.opacity = 0;
    card.style.animation = `fadein-card 0.7s ${0.05 * i + 0.08}s forwards`;
    card.innerHTML = `
      <img src="${article.img}" alt="${article.section}" />
      <span class="section-tag" aria-label="${article.section}">${article.section}</span>
      <h3>${article.title}</h3>
      <div class="card-desc">${article.preview}</div>
      <div class="card-actions">
        <a href="${article.link}" class="btn-card" aria-label="Read more about ${article.title}" tabindex="0">Read More</a>
        <button class="bookmark-btn" data-id="${article.id}" title="Bookmark this article" aria-label="Bookmark ${article.title}" role="button" tabindex="0"><span>🔖</span></button>
      </div>
    `;
    // Bookmark state
    if (localStorage.getItem('bookmark-' + article.id)) {
      card.querySelector('.bookmark-btn').classList.add('bookmarked');
    }
    container.appendChild(card);
  });
}

// Fade-in animation for cards
const style = document.createElement('style');
style.innerHTML = `
@keyframes fadein-card {
  from { opacity: 0; transform: translateY(30px) scale(0.97); }
  to { opacity: 1; transform: none; }
}`;
document.head.appendChild(style);


function filterArticles(query) {
  query = query.trim().toLowerCase();
  if (!query) return lifestyleArticles;
  return lifestyleArticles.filter(
    a => a.title.toLowerCase().includes(query) ||
         a.section.toLowerCase().includes(query) ||
         a.preview.toLowerCase().includes(query)
  );
}

document.addEventListener('DOMContentLoaded', () => {
  renderArticles(lifestyleArticles);
  // Search bar
  const searchBar = document.getElementById('search-bar');
  searchBar.addEventListener('input', e => {
    renderArticles(filterArticles(e.target.value));
  });
  // Bookmark buttons
  document.getElementById('article-list').addEventListener('click', e => {
    if (e.target.closest('.bookmark-btn')) {
      const btn = e.target.closest('.bookmark-btn');
      const id = btn.getAttribute('data-id');
      const key = 'bookmark-' + id;
      if (localStorage.getItem(key)) {
        localStorage.removeItem(key);
        btn.classList.remove('bookmarked');
      } else {
        localStorage.setItem(key, '1');
        btn.classList.add('bookmarked');
      }
    }
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
