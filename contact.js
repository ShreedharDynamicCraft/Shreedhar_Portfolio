// Initialize the Typed.js instance for the "LET'S CONNECT" heading
const typedConnect = new Typed('#typed-connect', {
    strings: ['Let\'s Connect', 'Get in Touch', 'Contact Me'],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 1500,
    startDelay: 500,
    loop: true,
  });
  
// JavaScript for form submission and validation
// const contactForm = document.getElementById('contact-form');
// const submitButton = document.getElementById('submit-button');
// const thankYouMessage = document.getElementById('thank-you-message');
// const errorMessage = document.getElementById('error-message');

// contactForm.addEventListener('submit', function (event) {
//   event.preventDefault();

//   const name = contactForm.querySelector('[name="name"]').value;
//   const email = contactForm.querySelector('[name="email"]').value;
//   const message = contactForm.querySelector('[name="message"]').value;

//   if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
//     errorMessage.textContent = 'Please fill out all fields before submitting the form.';
//     errorMessage.style.display = 'block';
//     submitButton.classList.remove('valid');
//     submitButton.classList.add('error');
//     return;
//   }

// if (message.trim().length < 15) {
//     errorMessage.textContent = 'Please enter at least 15 characters in the message.';
//     errorMessage.style.display = 'block';
//     submitButton.classList.remove('valid');
//     submitButton.classList.add('error');
//     return;
// } 

//   // Continue with form submission or processing
//   // ...

//   // Hide the error message and display thank you message
//   errorMessage.style.display = 'none';
//   contactForm.style.display = 'none';
//   thankYouMessage.style.display = 'block';
//   submitButton.classList.remove('error');
//   submitButton.classList.add('valid');
//   contactForm.reset(); // Reset the form fields

//   // Optionally, you can set a timer to hide the thank you message after a few seconds
//   setTimeout(() => {
//     thankYouMessage.style.display = 'none';
//     contactForm.style.display = 'block';
//   }, 5000); // Adjust the time (in milliseconds) as needed
// });

