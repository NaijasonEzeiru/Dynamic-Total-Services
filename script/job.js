const jobForm = document.getElementById('job-form');
const jobFirstName = document.getElementById('job-first-name');
const jobLastName = document.getElementById('job-last-name');
const jobEmail = document.getElementById('job-email');
const jobQualifications = document.getElementById('job-qualifications');
const jobSubject = document.getElementById('job-subject');
const jobMessage = document.getElementById('job-message');

jobForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const res = await fetch('https://emails-forwarding.onrender.com/dts', {
    method: 'POST',
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
  const response = await res.json();
  alert(response?.message);
  jobForm.reset();
});
