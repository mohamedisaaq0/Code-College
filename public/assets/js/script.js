$(document).ready(function () {
  $(window).scroll(function () {
    // Sticky navbar
    if (this.scrollY > 20) {
      $('.navbar').addClass('sticky');
    } else {
      $('.navbar').removeClass('sticky');
    }

    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass('show');
    } else {
      $('.scroll-up-btn').removeClass('show');
    }
  });

  $('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 });
    $('html').css('scrollBehavior', 'auto');
  });

  $('.navbar .menu li a').click(function () {
    $('html').css('scrollBehavior', 'smooth');
  });

  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');
  });

  new Typed('.typing', {
    strings: ['HTML', 'CSS', 'JavaScript', 'Express.js', 'SQL'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  new Typed('.typing-2', {
    strings: [
      'learn new languages',
      'track your progress',
      'become and expert programmer!',
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

// Login
const switchers = [...document.querySelectorAll('.switcher')];

switchers.forEach((item) => {
  item.addEventListener('click', function () {
    switchers.forEach((item) =>
      item.parentElement.classList.remove('is-active')
    );
    this.parentElement.classList.add('is-active');
  });
});

const hmtlContainer = document.querySelector('.html');
const cssContainer = document.querySelector('.CSS');
const jsContainer = document.querySelector('.Javascript');
const expressContainer = document.querySelector('.Express.js');
const sqlContainer = document.querySelector('.SQL');

hmtlContainer.addEventListener('click', function () {
  document.location.replace('/language/html/module');
  console.log('html');
});

cssContainer.addEventListener('click', function () {
  document.location.replace('/language/css/module');
  console.log('css');
});

jsContainer.addEventListener('click', function () {
  document.location.replace('/language/javascript/module');
  console.log('javascript');
});

expressContainer.addEventListener('click', function () {
  document.location.replace('/language/express/module');
  console.log('express');
});

sqlContainer.addEventListener('click', function () {
  document.location.replace('/language/sql/module');
  console.log('sql');
});
