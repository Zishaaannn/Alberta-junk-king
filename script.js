// Mobile nav toggle and smooth scrolling + simple form handling
(function() {
  const nav = document.getElementById('site-nav');
  const toggle = document.querySelector('.nav-toggle');
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const el = document.querySelector(targetId);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Booking form mailto handler
  const form = document.getElementById('booking-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form));
      const subject = encodeURIComponent('Free Quote Request – Albreta Junk King');
      const body = encodeURIComponent(
        `Name: ${data.name || ''}\n` +
        `Phone: ${data.phone || ''}\n` +
        `Email: ${data.email || ''}\n` +
        `City: ${data.city || ''}\n` +
        `Items: ${data.items || ''}\n` +
        `Preferred: ${data.when || ''}`
      );
      window.location.href = `mailto:bookings@albretajunkking.ca?subject=${subject}&body=${body}`;
    });
  }
})();

