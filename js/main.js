// Toggle Dark/Light Theme
const themeToggles = document.querySelectorAll('.theme-toggle');
themeToggles.forEach(btn => {
  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
  });
});

// Apply saved theme on load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
});

// Navbar toggle for mobile
const navToggler = document.querySelector('.navbar-toggler');
const navLinks = document.querySelector('.nav-links');
if (navToggler) {
  navToggler.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// CV Modal functionality (if present)
const cvModal = document.getElementById('cvModal');
const previewCvBtn = document.getElementById('previewCvBtn');
if (previewCvBtn) {
  previewCvBtn.addEventListener('click', () => {
    cvModal.hidden = false;
    // Move focus to close button for accessibility
    document.querySelector('.modal-close').focus();
  });
}
const modalCloseBtn = document.querySelector('.modal-close');
if (modalCloseBtn) {
  modalCloseBtn.addEventListener('click', () => {
    cvModal.hidden = true;
  });
}
if (cvModal) {
  // Close modal on outside click
  cvModal.addEventListener('click', (e) => {
    if (e.target === cvModal) {
      cvModal.hidden = true;
    }
  });
}
// Close modal on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && cvModal && !cvModal.hidden) {
    cvModal.hidden = true;
  }
});

// Write-ups page: Filter categories
const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    cards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Write-ups page: Read More toggles
const readMoreButtons = document.querySelectorAll('.read-more');
readMoreButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const moreInfo = btn.nextElementSibling;
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    if (expanded) {
      moreInfo.hidden = true;
      btn.setAttribute('aria-expanded', 'false');
      btn.textContent = 'Read More';
    } else {
      moreInfo.hidden = false;
      btn.setAttribute('aria-expanded', 'true');
      btn.textContent = 'Show Less';
    }
  });
});
