//NAVBAR
const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')
const body = document.querySelector('body')
const navLinks = navMenu.querySelectorAll('li');
const nav = document.querySelector('nav')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  navMenu.classList.toggle('active')
  body.classList.toggle("no-scroll")
})

function closeMenu() {
  hamburger.classList.remove('active')
  navMenu.classList.remove('active')
  body.classList.remove("no-scroll")
}

navLinks.forEach((link) => {
  link.addEventListener('click', closeMenu)
})

function handleScroll() {
  if (window.scrollY > 150) {
    nav.classList.add('sticky-nav')
  } else {
    nav.classList.remove('sticky-nav')
  }
}
window.addEventListener('scroll', handleScroll)


//TYPING DELETING TEXT
function initTypedText() {
  const options = {
    strings: [
      "Welcome to my world!",
      "I'm Shreedhar Anand, a passionate 3rd-year Computer Science student",
      "Pursuing my education at the prestigious IIIT Senapati",
    ],
    typeSpeed: 50,    // Typing speed (characters per second)
    backSpeed: 30,    // Deleting speed (characters per second)
    backDelay: 1000,  // Delay before starting to delete text after typing
    startDelay: 500,  // Delay before starting to type the next string
    loop: true,       // Loop through the strings infinitely
 
  showCursor: true, // Show a blinking cursor
    cursorChar: "|",  // Customize the cursor character
    fadeOut: true,    // Enable fade-out animation between strings
    fadeOutClass: "typed-fade-out",  // Class for fade-out animation
    fadeOutDelay: 500,  // Delay before fading out the previous string
 
  };
  const typed = new Typed("#typed-text", options);
}


initTypedText()

//FILTER OPTIONS
document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.filter button')
  const projectCards = document.querySelectorAll(".project-card")

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filterValue = button.getAttribute('data-filter');
      filterProjects(filterValue);
    });
  });

  function filterProjects(category) {
    projectCards.forEach(card => {
      const projectCategory = card.getAttribute('data-category')
      if (category === 'all' || projectCategory === category) {
        card.style.display = 'block'
      } else {
        card.style.display = "none"
      }
    })
  }
})














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
