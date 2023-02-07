import { gsap } from 'gsap';

import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'Test';
  greetUser(name);
});

// //nav anim
// console.log('hello!');

// // get elements
// const menuLink = document.querySelector('.db_nav-menu-link');
// const content = document.querySelector('.db_nav-menu-content');
// const menuBG = document.querySelector('.db_nav-menu');
// const dropdownWrap = document.querySelector('.db_menu-wrapper');

// gsap.defaults({
//   duration: 0.4,
// });

// // Link Hover In
// menuLink.addEventListener('mouseenter', function () {
//   // get elements
//   const previousLink = menuLink.filter('.active').removeClass('active');
//   const currentLink = this.addClass('active');
//   const previousContent = content.filter('.active').removeClass('active');
//   const currentContent = content.eq($(this).index()).addClass('active');
//   // play animations
//   if (previousLink.length === 0) {
//     revealDropdown(currentContent);
//   } else if (previousLink.index() !== currentLink.index()) {
//     switchDropdown(previousContent, currentContent);
//   }
// });

// // Menu Hover Out
// menuBG?.addEventListener('mouseleave', function () {
//   showDropdown.reverse();
// });

// function revealDropdown(currentContent) {
//   dropdownWrap.css('display', 'flex');
//   showDropdown.restart();

//   gsap.set(content, {
//     opacity: 0,
//   });
//   gsap.set(currentContent, {
//     opacity: 1,
//   });
// }

// function switchDropdown(previousContent, currentContent) {
//   gsap.fromTo(
//     previousContent,
//     { opacity: 1 },
//     {
//       opacity: 0,
//       duration: 0.3,
//     }
//   );
//   gsap.fromTo(
//     currentContent,
//     { opacity: 0 },
//     {
//       opacity: 1,
//       duration: 0.3,
//     }
//   );
// }

// // Open dropdown animation
// const showDropdown = gsap.timeline({
//   paused: true,
//   onReverseComplete: () => {
//     dropdownWrap.css('display', 'none');
//     menuLink.removeClass('active');
//   },
// });
// showDropdown.from(dropdownWrap, { opacity: 0, duration: 0.4 });
