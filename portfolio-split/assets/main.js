/* ============================================================
   PHINA TSHEGOFATSO SELAHLE — Portfolio JavaScript
   ============================================================ */

// Project filter tabs
document.querySelectorAll('.proj-filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.proj-filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.pc').forEach(card => {
      if(filter === 'all' || card.dataset.cat === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting) {
      e.target.classList.add('visible');
      // animate skill bars inside revealed elements
      const bars = e.target.querySelectorAll('.skill-bar-fill');
      bars.forEach(bar => { bar.style.width = bar.dataset.width + '%'; });
    }
  });
}, {threshold: 0.1});
reveals.forEach(el => obs.observe(el));

// Also trigger skill bars when their category is revealed
document.querySelectorAll('.skill-category').forEach(cat => {
  const catObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting) {
        const bars = e.target.querySelectorAll('.skill-bar-fill');
        bars.forEach(b => { b.style.width = b.dataset.width + '%'; });
      }
    });
  }, {threshold: 0.3});
  catObs.observe(cat);
});

// Nav shrink on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if(window.scrollY > 50) {
    nav.style.padding = '.8rem 2.5rem';
  } else {
    nav.style.padding = '1.2rem 2.5rem';
  }
});

// Contact form — EmailJS
async function handleSend() {
  const btn = document.querySelector('.btn-send');
  const status = document.getElementById('form-status');

  const name    = document.getElementById('from_name').value.trim();
  const email   = document.getElementById('reply_to').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  if(!name || !email || !message) {
    status.style.display = 'block';
    status.style.background = 'rgba(239,68,68,.12)';
    status.style.border = '1px solid rgba(239,68,68,.3)';
    status.style.color = '#f87171';
    status.textContent = 'Please fill in your name, email, and message.';
    return;
  }

  btn.textContent = 'Sending…';
  btn.disabled = true;
  btn.style.opacity = '.7';

  try {
    await emailjs.send(
      'service_8wv4p37',     // ← replace after setup
      'template_54dzsif',    // ← replace after setup
      { from_name: name, reply_to: email, subject: subject || '(No subject)', message }
    );

    btn.textContent = '✓ Message Sent!';
    btn.style.background = 'linear-gradient(135deg,#00d4ff,#10b981)';
    btn.style.opacity = '1';
    status.style.display = 'block';
    status.style.background = 'rgba(16,185,129,.1)';
    status.style.border = '1px solid rgba(16,185,129,.3)';
    status.style.color = '#34d399';
    status.textContent = "Thanks " + name + "! I'll get back to you soon.";

    document.getElementById('from_name').value = '';
    document.getElementById('reply_to').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';

    setTimeout(() => {
      btn.textContent = 'Send Message →';
      btn.style.background = '';
      btn.disabled = false;
      status.style.display = 'none';
    }, 5000);

  } catch(err) {
    btn.textContent = 'Send Message →';
    btn.style.opacity = '1';
    btn.disabled = false;
    status.style.display = 'block';
    status.style.background = 'rgba(239,68,68,.12)';
    status.style.border = '1px solid rgba(239,68,68,.3)';
    status.style.color = '#f87171';
    status.textContent = 'Something went wrong. Please email me directly at ptselahle@gmail.com';
  }
}