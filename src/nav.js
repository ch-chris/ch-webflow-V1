//nav anim
console.log('hello!');

// get elements
let menuLink = $('.db_nav-menu-link');
let content = $('.db_nav-menu-content');
let menuBG = $('.db_menu-bg');
let dropdownWrap = $('.db_menu-wrapper');

gsap.defaults({
  duration: 0.4,
});

// Link Hover In
menuLink.on('mouseenter', function () {
  // get elements
  let previousLink = menuLink.filter('.active').removeClass('active');
  let currentLink = $(this).addClass('active');
  let previousContent = content.filter('.active').removeClass('active');
  let currentContent = content.eq($(this).index()).addClass('active');
  // play animations
  if (previousLink.length === 0) {
    revealDropdown(currentContent);
  } else if (previousLink.index() !== currentLink.index()) {
    switchDropdown(previousContent, currentContent);
  }
});

// Menu Hover Out
$('.db_nav-menu').on('mouseleave', function () {
  showDropdown.reverse();
});

function revealDropdown(currentContent) {
  dropdownWrap.css('display', 'flex');
  showDropdown.restart();

  gsap.set(content, {
    opacity: 0,
  });
  gsap.set(currentContent, {
    opacity: 1,
  });
}

function switchDropdown(previousContent, currentContent) {
  gsap.fromTo(
    previousContent,
    { opacity: 1 },
    {
      opacity: 0,
      duration: 0.3,
    }
  );
  gsap.fromTo(
    currentContent,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.3,
    }
  );
}

// Open dropdown animation
let showDropdown = gsap.timeline({
  paused: true,
  onReverseComplete: () => {
    dropdownWrap.css('display', 'none');
    menuLink.removeClass('active');
  },
});
showDropdown.from(dropdownWrap, { opacity: 0, duration: 0.4 });
