// navbar toggle func
const navToggle = function() {
  const toggler = document.querySelector('.toggler');
  const linksContainer = document.querySelector('.nav-links-container');

  toggler.addEventListener('click', function() {
    linksContainer.classList.toggle('show');
  });
}
navToggle();

// body padding to adjust absolute nav
const bodyPadding = function() {document.body.style.marginTop = document.querySelector('#navbar').getBoundingClientRect().height + 'px';}();

const smoothScroll = function() {
  $(function() {
    // for every link in body
    $('a').on('click', function(e) {
      if(this.hash !== '') {
        e.preventDefault();

        $('html, body').animate({
          scrollTop: $(this.hash).offset().top - document.querySelector('#navbar').getBoundingClientRect().height
        }, 600);
      }
    });
  });
}();

const scrollSpy = function() {
  const navLinks = document.querySelectorAll('.nav-links a');
  
  $(window).on('scroll', function() {
    const currentTop = $(window).scrollTop();

    $(navLinks).each(function(_, link) {
      // current iterating link based section
      const sectionTop = $(link.hash).offset().top - 220;
      const sectionBottom = sectionTop + $(this).height();

      // sectionTop <= currentTop
      if(currentTop >= sectionTop && currentTop <= sectionBottom) {
        this.classList.add('active');
        $(this).parent().siblings().children().removeClass('active');
      }
    })
  })
}();

const specificationCollapse = function() {
  const specificationEl = document.querySelector('#specification');
  const tabBtns = [...specificationEl.querySelectorAll('.tab-btns button')];

  tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // remove active class from all buttons
      tabBtns.forEach(btn => btn.classList.remove('active'));
      
      this.classList.add('active');

      // get specification container element based on button click 
      const specContainerEl = document.getElementById(this.dataset.id);
      
      // remove active class from all specification container elements
      [...specContainerEl.parentElement.children].forEach(containerEl => containerEl.classList.remove('active'));

      specContainerEl.classList.add('active');
    });
  })
}();

const testimonialSlider = function() {
  new Swiper('.swiper-container', {
    slidesPerView: 1,
    speed: 800,
    spaceBetween: 60,  
    autoplay: {
      delay: 3500,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });
}();