// contact form
const contactForm = document.getElementById('contact-form');
const contactName = document.getElementById('contact-name');
const contactEmail = document.getElementById('contact-email');
const contactSubject = document.getElementById('contact-subject');
const contactMessage = document.getElementById('contact-message');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const res = await fetch('https://emails-forwarding.onrender.com/dts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({
      form: 'Contact Us',
      subject: contactSubject.value,
      name: contactName.value,
      email: contactEmail.value,
      message: contactMessage.value
    })
  });
  const response = await res.json();
  alert(response?.message);
  contactForm.reset();
});
