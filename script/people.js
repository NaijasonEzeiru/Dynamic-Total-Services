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
  console.log([
    peopleEmail,
    peopleFirstName,
    peopleLastName,
    peopleBusinessName,
    peopleMessage,
    peopleSubject
  ]);
  fetch('http://localhost:4000/dts', {
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
  // alert('Form submitted succesfully');
  // peopleForm.reset();
});
