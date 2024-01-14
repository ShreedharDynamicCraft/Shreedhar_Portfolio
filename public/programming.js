// JavaScript for the Programming Website Section (for animations)
// You can add animations or additional interactivity here

// Import GSAP library (make sure to include it in your project)
import { gsap } from 'gsap';

// Add animation when hovering over programming profiles
const programmingProfiles = document.querySelectorAll('.programming-profile');

programmingProfiles.forEach((profile) => {
    profile.addEventListener('mouseenter', () => {
        gsap.to(profile, {
            scale: 1.05,
            boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)',
            duration: 0.3,
            ease: 'power2.out',
        });

        const profileLink = profile.querySelector('a');
        gsap.to(profileLink, {
            color: '#007BFF',
            duration: 0.3,
            ease: 'power2.out',
        });
    });

    profile.addEventListener('mouseleave', () => {
        gsap.to(profile, {
            scale: 1,
            boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
            duration: 0.3,
            ease: 'power2.out',
        });

        const profileLink = profile.querySelector('a');
        gsap.to(profileLink, {
            color: '#333',
            duration: 0.3,
            ease: 'power2.out',
        });
    });
});
