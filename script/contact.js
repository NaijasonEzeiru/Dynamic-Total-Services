// contact form
const contactForm = document.getElementById('contact-form');
const contactName = document.getElementById('contact-name');
const contactEmail = document.getElementById('contact-email');
const contactSubject = document.getElementById('contact-subject');
const contactMessage = document.getElementById('contact-message');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  fetch('https://emails-forwarding.onrender.com/dts', {
    method: 'POST',
    mode: 'no-cors',
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
  alert('Form submitted succesfully');
  contactForm.reset();
});
