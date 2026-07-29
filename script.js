/* ==========================================================================
   CAFÉ DE FLORE - INTERACTIVE LOGIC & AMBIANCE SCRIPT
   ========================================================================== */

// 1. MENU DATA — CLASSIC & FUSION IN INDIAN RUPEES (₹)
const MENU_ITEMS = [
  // --- BREAKFAST ---
  {
    id: 1,
    name: "Butter Croissant AOP Charentes",
    category: "breakfast",
    price: "₹ 240",
    desc: "Golden, flaky croissant made with AOP-certified butter, freshly baked every morning at sunrise.",
    isSpecial: true,
    isVeg: true,
    img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&q=80"
  },
  {
    id: 2,
    name: "Pain au Chocolat — Artisan Valrhona",
    category: "breakfast",
    price: "₹ 280",
    desc: "Double bar of Valrhona 64% dark chocolate encased in pure butter puff pastry.",
    isSpecial: false,
    isVeg: true,
    img: "https://images.unsplash.com/photo-1602351447937-745cb720612f?w=500&q=80"
  },
  {
    id: 3,
    name: "Classic French Omelette with Comté",
    category: "breakfast",
    price: "₹ 450",
    desc: "Organic eggs, fresh chives, and 18-month aged Comté cheese served with toasted brioche.",
    isSpecial: false,
    isVeg: true,
    img: "https://images.unsplash.com/photo-1510693206972-df098062cb71?w=500&q=80"
  },
  {
    id: 4,
    name: "Eggs Benedict on Toasted Brioche",
    category: "breakfast",
    price: "₹ 520",
    desc: "Poached eggs, smoked ham or avocado, hollandaise sauce on artisanal French brioche.",
    isSpecial: true,
    isVeg: false,
    img: "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=500&q=80"
  },
  {
    id: 5,
    name: "French Toast with Wild Berry Compote",
    category: "breakfast",
    price: "₹ 420",
    desc: "Caramelized brioche French toast with wild berry compote & Madagascar vanilla cream.",
    isSpecial: true,
    isVeg: true,
    img: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=500&q=80"
  },
  {
    id: 6,
    name: "Parisian Granola Bowl with Wild Honey",
    category: "breakfast",
    price: "₹ 380",
    desc: "Greek yogurt, house-roasted oats, chia seeds, fresh berries, and organic honey.",
    isSpecial: false,
    isVeg: true,
    img: "https://images.unsplash.com/photo-1504558571615-09ed6a050a4b?w=500&q=80"
  },

  // --- LUNCH ---
  {
    id: 7,
    name: "Classic Croque-Monsieur",
    category: "lunch",
    price: "₹ 590",
    desc: "Toasted pain de mie, premium ham, creamy béchamel sauce, and melted Comté cheese.",
    isSpecial: true,
    isVeg: false,
    img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500&q=80"
  },
  {
    id: 8,
    name: "Croque-Madame with Fried Egg",
    category: "lunch",
    price: "₹ 650",
    desc: "Classic Croque-Monsieur crowned with a sunny-side-up golden organic egg.",
    isSpecial: true,
    isVeg: false,
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80"
  },
  {
    id: 9,
    name: "French Onion Soup",
    category: "lunch",
    price: "₹ 520",
    desc: "Caramelized onion broth, crusty baguette slice topped with melted Gruyère cheese.",
    isSpecial: true,
    isVeg: true,
    img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&q=80"
  },
  {
    id: 10,
    name: "Royal Salade Niçoise",
    category: "lunch",
    price: "₹ 680",
    desc: "Seared ahi tuna, baby greens, boiled eggs, kalamata olives, green beans & Dijon vinaigrette.",
    isSpecial: false,
    isVeg: false,
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80"
  },
  {
    id: 11,
    name: "Wild Truffle Mushroom Risotto",
    category: "lunch",
    price: "₹ 780",
    desc: "Arborio rice slowly simmered with forest mushrooms, black truffle oil, and parmesan shavings.",
    isSpecial: true,
    isVeg: true,
    img: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=500&q=80"
  },

  // --- DINNER ---
  {
    id: 12,
    name: "Filet Mignon with Herb Butter & Frites",
    category: "dinner",
    price: "₹ 1,350",
    desc: "Tenderloin steak cooked to perfection with Café de Flore herb butter and crispy hand-cut fries.",
    isSpecial: true,
    isVeg: false,
    img: "https://images.unsplash.com/photo-1558030006-450675393462?w=500&q=80"
  },
  {
    id: 13,
    name: "Pan-Seared Salmon in Lemon Butter",
    category: "dinner",
    price: "₹ 1,180",
    desc: "Crispy skin Atlantic salmon served over wilted spinach and dill beurre blanc.",
    isSpecial: true,
    isVeg: false,
    img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&q=80"
  },
  {
    id: 14,
    name: "Roasted Ratatouille Provençale",
    category: "dinner",
    price: "₹ 720",
    desc: "Layered zucchini, eggplant, bell peppers, and tomatoes slow-roasted with herbs de Provence.",
    isSpecial: false,
    isVeg: true,
    img: "https://images.unsplash.com/photo-1572441713132-c542fc4fe282?w=500&q=80"
  },
  {
    id: 15,
    name: "Creamy Spinach & Ricotta Ravioli",
    category: "dinner",
    price: "₹ 760",
    desc: "Handmade pasta pockets filled with ricotta, fresh spinach, and sage brown butter sauce.",
    isSpecial: false,
    isVeg: true,
    img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&q=80"
  },
  {
    id: 16,
    name: "Classic Duck Confit",
    category: "dinner",
    price: "₹ 1,420",
    desc: "Slow-roasted crispy duck leg served with Sarladaise garlic potatoes and seasonal greens.",
    isSpecial: true,
    isVeg: false,
    img: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=500&q=80"
  },

  // --- BEVERAGES & WINES ---
  {
    id: 17,
    name: "Flore Special Hot Chocolate",
    category: "boissons",
    price: "₹ 380",
    desc: "The legendary old-fashioned hot chocolate, served in its signature silver pot.",
    isSpecial: true,
    isVeg: true,
    img: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=500&q=80"
  },
  {
    id: 18,
    name: "Filter Coffee — 'L'Exquis' Origin",
    category: "boissons",
    price: "₹ 240",
    desc: "Pure Arabica, artisanally roasted exclusively for the Flore by our master roasters.",
    isSpecial: false,
    isVeg: true,
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&q=80"
  },
  {
    id: 19,
    name: "Velvety Cappuccino",
    category: "boissons",
    price: "₹ 290",
    desc: "Intense espresso, silky steamed milk foam, and a dusting of dark cocoa powder.",
    isSpecial: false,
    isVeg: true,
    img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500&q=80"
  },
  {
    id: 20,
    name: "Mariage Frères Tea — Marco Polo",
    category: "boissons",
    price: "₹ 340",
    desc: "An exceptional blend of flowers and fruits from China and Tibet — a classic since 1854.",
    isSpecial: false,
    isVeg: true,
    img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&q=80"
  },
  {
    id: 21,
    name: "Champagne Laurent-Perrier Coupe",
    category: "boissons",
    price: "₹ 950",
    desc: "An exceptional Brut cuvée to celebrate the charm of an evening at the Flore.",
    isSpecial: true,
    isVeg: true,
    img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&q=80"
  },
  {
    id: 22,
    name: "Bordeaux Saint-Émilion Grand Cru (Glass)",
    category: "boissons",
    price: "₹ 780",
    desc: "A glass of red wine with notes of dark fruit, clove, and gentle warm spice.",
    isSpecial: false,
    isVeg: true,
    img: "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=500&q=80"
  },

  // --- DESSERTS ---
  {
    id: 23,
    name: "Mille-Feuille with Bourbon Vanilla",
    category: "desserts",
    price: "₹ 440",
    desc: "Inverted puff pastry with diplomat cream infused with intense Madagascar vanilla.",
    isSpecial: true,
    isVeg: true,
    img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&q=80"
  },
  {
    id: 24,
    name: "Classic Vanilla Crème Brûlée",
    category: "desserts",
    price: "₹ 390",
    desc: "Rich custard base topped with a perfectly caramelized, glass-thin sugar crust.",
    isSpecial: true,
    isVeg: true,
    img: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=500&q=80"
  },
  {
    id: 25,
    name: "Warm Tarte Tatin with Isigny Cream",
    category: "desserts",
    price: "₹ 460",
    desc: "Caramelized apples in salted butter, served with a quenelle of fresh Isigny cream.",
    isSpecial: false,
    isVeg: true,
    img: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=500&q=80"
  },
  {
    id: 26,
    name: "Profiteroles with Dark Chocolate Sauce",
    category: "desserts",
    price: "₹ 490",
    desc: "Choux puffs filled with vanilla ice cream, drenched in warm Valrhona chocolate sauce.",
    isSpecial: true,
    isVeg: true,
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80"
  }
];

// 2. TESTIMONIAL DATA
const TESTIMONIALS = [
  {
    quote: "Café de Flore is far more than a café — it is the true beating heart of the Parisian spirit. One feels the joyful weight of ideas and history with every sip.",
    author: "Jean-Paul Sartre",
    role: "Philosopher & Regular of the Flore"
  },
  {
    quote: "There are places in Paris where the atmosphere is so steeped in grace and nostalgia that time seems to suspend itself. The Flore is the foremost of these sanctuaries.",
    author: "Ernest Hemingway",
    role: "Writer & Nobel Laureate in Literature"
  },
  {
    quote: "Coming to the Flore every morning is to rediscover the theatre of Parisian life — the ballet of waiters, the scent of warm croissants, the joy of writing.",
    author: "Simone de Beauvoir",
    role: "Author & Philosopher"
  }
];

// STATE VARIABLES
let currentCategory = 'all';
let currentFilter = 'all';
let searchQuery = '';
let testimonialIndex = 0;
let soundContext = null;
let isPlayingSound = false;
let soundOscillators = [];

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  runPreloader();
  renderMenu();
  setupNavbar();
  setupMenuControls();
  setupTestimonials();
  setupAudioPlayer();
  setMinDateForReservation();
  setup3DLogo();
});

// FANCY 3D PRELOADER CONTROLLER
function runPreloader() {
  const preloader = document.getElementById('preloader');
  const bar = document.getElementById('preloaderBar');
  if (!preloader || !bar) return;

  document.body.style.overflow = 'hidden';

  let progress = 0;
  const interval = setInterval(() => {
    const step = progress < 70 ? Math.random() * 5 + 2 : Math.random() * 2 + 0.5;
    progress = Math.min(progress + step, 100);
    bar.style.width = progress + '%';

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        preloader.classList.add('fade-out');
        document.body.style.overflow = '';
        preloader.addEventListener('transitionend', () => {
          preloader.remove();
        }, { once: true });
      }, 400);
    }
  }, 60);
}

// 3D LOGO MOUSE PARALLAX INTERACTION
function setup3DLogo() {
  const logo = document.querySelector('.brand-crest-3d');
  if (!logo) return;
  const face = logo.querySelector('.crest-face');

  logo.addEventListener('mousemove', (e) => {
    const rect = logo.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    const rotX = dy * -25;
    const rotY = dx * 25;
    if (face) {
      face.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.1)`;
    }
  });

  logo.addEventListener('mouseleave', () => {
    if (face) {
      face.style.transform = '';
    }
  });
}

// NAVBAR SCROLL EFFECT & MOBILE TOGGLE
function setupNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

// RENDER MENU GRID
function renderMenu() {
  const menuGrid = document.getElementById('menuGrid');
  menuGrid.innerHTML = '';

  const filteredItems = MENU_ITEMS.filter(item => {
    const matchCategory = (currentCategory === 'all' || item.category === currentCategory);
    const matchFilter = (currentFilter === 'all') ||
                        (currentFilter === 'special' && item.isSpecial) ||
                        (currentFilter === 'veg' && item.isVeg);
    const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchFilter && matchSearch;
  });

  if (filteredItems.length === 0) {
    menuGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);">
        <i class="fa-solid fa-mug-saucer" style="font-size: 2.5rem; margin-bottom: 1rem; color: var(--accent-gold);"></i>
        <p style="font-family: var(--font-title); font-size: 1.3rem;">No dishes match your search.</p>
        <p style="font-size: 0.9rem;">Try a different keyword or reset the filters.</p>
      </div>
    `;
    return;
  }

  filteredItems.forEach(item => {
    const card = document.createElement('div');
    card.className = 'menu-item-card';

    card.innerHTML = `
      <div class="menu-card-img-wrap">
        <img
          class="menu-card-img"
          src="${item.img}"
          alt="${item.name}"
          loading="lazy"
          onerror="this.parentElement.style.display='none'"
        >
        ${item.isSpecial ? '<div class="menu-card-badge"><i class="fa-solid fa-star"></i> Speciality</div>' : ''}
      </div>

      <div class="menu-card-body">
        <div class="menu-item-header">
          <h3 class="menu-item-title">${item.name}</h3>
          <span class="menu-item-price">${item.price}</span>
        </div>
        <p class="menu-item-desc">${item.desc}</p>
      </div>

      <div class="menu-item-footer">
        <div class="menu-tags">
          ${item.isVeg ? '<span class="tag-badge"><i class="fa-solid fa-leaf"></i> Vegetarian</span>' : '<span class="tag-badge non-veg"><i class="fa-solid fa-drumstick-bite"></i> Non-Veg</span>'}
        </div>
        <button class="btn-item-detail" onclick="openItemDetail('${item.name.replace(/'/g, "\\'")}', '${item.desc.replace(/'/g, "\\'")}', '${item.price}')">
          Details <i class="fa-solid fa-angle-right"></i>
        </button>
      </div>
    `;

    menuGrid.appendChild(card);
  });
}

// MENU CONTROLS & LISTENERS
function setupMenuControls() {
  const tabBtns = document.querySelectorAll('.menu-tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      tabBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentCategory = e.target.getAttribute('data-category');
      renderMenu();
    });
  });

  const chipBtns = document.querySelectorAll('.chip-btn');
  chipBtns.forEach(chip => {
    chip.addEventListener('click', (e) => {
      chipBtns.forEach(c => c.classList.remove('active'));
      e.target.classList.add('active');
      currentFilter = e.target.getAttribute('data-filter');
      renderMenu();
    });
  });

  const searchInput = document.getElementById('menuSearch');
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderMenu();
  });
}

// TESTIMONIALS SLIDER
function setupTestimonials() {
  const dots = document.querySelectorAll('.testimonial-dot');
  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      testimonialIndex = parseInt(e.target.getAttribute('data-index'));
      updateTestimonialDisplay();
    });
  });

  setInterval(() => {
    testimonialIndex = (testimonialIndex + 1) % TESTIMONIALS.length;
    updateTestimonialDisplay();
  }, 6000);
}

function updateTestimonialDisplay() {
  const data = TESTIMONIALS[testimonialIndex];
  const card = document.getElementById('testimonialCard');
  const text = document.getElementById('testimonialText');
  const author = document.getElementById('testimonialAuthor');
  const role = document.getElementById('testimonialRole');
  const dots = document.querySelectorAll('.testimonial-dot');

  card.style.opacity = 0;
  setTimeout(() => {
    text.textContent = data.quote;
    author.textContent = data.author;
    role.textContent = data.role;
    dots.forEach((d, idx) => {
      d.classList.toggle('active', idx === testimonialIndex);
    });
    card.style.opacity = 1;
  }, 300);
}

// LIGHTBOX MODAL
function openLightbox(src, title) {
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImg');
  const txt = document.getElementById('lightboxTitle');
  img.src = src;
  txt.textContent = title;
  modal.classList.add('active');
}

function closeLightbox(e) {
  if (e.target.id === 'lightboxModal') {
    closeLightboxDirect();
  }
}

function closeLightboxDirect() {
  document.getElementById('lightboxModal').classList.remove('active');
}

// RESERVATION FORM HANDLING
function setMinDateForReservation() {
  const dateInput = document.getElementById('resDate');
  const today = new Date().toISOString().split('T')[0];
  dateInput.min = today;
  dateInput.value = today;
}

function selectBranch(branchName) {
  const branchSelect = document.getElementById('resBranch');
  if (branchSelect) {
    for (let i = 0; i < branchSelect.options.length; i++) {
      if (branchSelect.options[i].value.includes(branchName) || branchName.includes(branchSelect.options[i].value)) {
        branchSelect.selectedIndex = i;
        break;
      }
    }
  }
}

function handleReservationSubmit(e) {
  e.preventDefault();
  const branch  = document.getElementById('resBranch').value;
  const name    = document.getElementById('resName').value;
  const email   = document.getElementById('resEmail').value;
  const phone   = document.getElementById('resPhone').value;
  const guests  = document.getElementById('resGuests').value;
  const date    = document.getElementById('resDate').value;
  const time    = document.getElementById('resTime').value;
  const seating = document.getElementById('resSeating').value;

  const waText = encodeURIComponent(
    `Hello Café de Flore! I have made a reservation for ${name} (${guests} guest(s)) on ${date} at ${time} at the ${branch} location (${seating}). Phone: ${phone}`
  );

  const detailsContainer = document.getElementById('confirmDetails');
  detailsContainer.innerHTML = `
    <p style="margin-bottom: 6px;"><strong>Location :</strong> ${branch}</p>
    <p style="margin-bottom: 6px;"><strong>Guest :</strong> ${name}</p>
    <p style="margin-bottom: 6px;"><strong>Email :</strong> ${email}</p>
    <p style="margin-bottom: 6px;"><strong>Guests :</strong> ${guests} person(s)</p>
    <p style="margin-bottom: 6px;"><strong>Date &amp; Time :</strong> ${date} at ${time}</p>
    <p style="margin-bottom: 12px;"><strong>Seating :</strong> ${seating}</p>

    <a href="https://wa.me/919515104733?text=${waText}" target="_blank" class="btn-vintage btn-gold" style="width: 100%; font-size: 0.8rem; background: #25d366; color: #fff; border: none; margin-top: 8px;">
      <i class="fa-brands fa-whatsapp"></i> Send Confirmation via WhatsApp
    </a>
  `;

  document.getElementById('confirmModal').classList.add('active');
}

function closeConfirmModal() {
  document.getElementById('confirmModal').classList.remove('active');
  document.getElementById('reservationForm').reset();
  setMinDateForReservation();
}

function openItemDetail(name, desc, price) {
  alert(`Café de Flore — Speciality:\n\n${name}  (${price})\n\n${desc}\n\nFreshly prepared to order following our Parisian tradition.`);
}

// WEB AUDIO API — ATMOSPHERIC PARISIAN AMBIANCE
function setupAudioPlayer() {
  const btnSound = document.getElementById('btnSound');
  btnSound.addEventListener('click', toggleAtmosphericSound);
}

function toggleAtmosphericSound() {
  const btnSound = document.getElementById('btnSound');
  if (isPlayingSound) {
    stopAtmosphericSound();
    btnSound.classList.remove('active');
    btnSound.title = "Enable Ambient Sound";
    isPlayingSound = false;
  } else {
    startAtmosphericSound();
    btnSound.classList.add('active');
    btnSound.title = "Disable Ambient Sound";
    isPlayingSound = true;
  }
}

function startAtmosphericSound() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    soundContext = new AudioContext();

    const frequencies = [349.23, 440.00, 523.25, 659.25]; // F maj 7

    frequencies.forEach((freq) => {
      const osc  = soundContext.createOscillator();
      const gain = soundContext.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, soundContext.currentTime);
      gain.gain.setValueAtTime(0.015, soundContext.currentTime);

      osc.connect(gain);
      gain.connect(soundContext.destination);
      osc.start();
      soundOscillators.push(osc);
    });
  } catch (err) {
    console.log("Audio not supported or blocked by browser", err);
  }
}

function stopAtmosphericSound() {
  if (soundOscillators.length > 0) {
    soundOscillators.forEach(osc => osc.stop());
    soundOscillators = [];
  }
  if (soundContext) {
    soundContext.close();
    soundContext = null;
  }
}
