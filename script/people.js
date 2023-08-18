// Looking for people?
const peopleForm = document.getElementById('people-form');
const peopleFirstName = document.getElementById('people-first-name');
const peopleLastName = document.getElementById('people-last-name');
const peopleEmail = document.getElementById('people-email');
const peopleBusinessName = document.getElementById('people-business-name');
const peopleSubject = document.getElementById('people-subject');
const peopleMessage = document.getElementById('people-message');

peopleForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const res = await fetch('https://emails-forwarding.onrender.com/dts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({
      form: 'Looking For People',
      subject: peopleSubject.value,
      firstName: peopleFirstName.value,
      lastName: peopleLastName.value,
      email: peopleEmail.value,
      businessName: peopleBusinessName.value,
      message: peopleMessage.value
    })
  });
  const response = await res.json();
  alert(response?.message);
  peopleForm.reset();
});
