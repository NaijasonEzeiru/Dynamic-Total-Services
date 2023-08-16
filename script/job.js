const jobForm = document.getElementById('job-form');
const jobFirstName = document.getElementById('job-first-name');
const jobLastName = document.getElementById('job-last-name');
const jobEmail = document.getElementById('job-email');
const jobQualifications = document.getElementById('job-qualifications');
const jobSubject = document.getElementById('job-subject');
const jobMessage = document.getElementById('job-message');

jobForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log([
    jobEmail,
    jobFirstName,
    jobLastName,
    jobQualifications,
    jobMessage,
    jobSubject
  ]);
  fetch('https://emails-forwarding.onrender.com/dts', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({
      form: 'Looking for Job',
      subject: jobSubject.value,
      firstName: jobFirstName.value,
      lastName: jobLastName.value,
      email: jobEmail.value,
      qualifications: jobQualifications.value,
      message: jobMessage.value
    })
  });
  alert('Form submitted succesfully');
  jobForm.reset();
});
