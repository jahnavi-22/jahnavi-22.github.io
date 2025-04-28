

  /*=============== MIXITUP FILTER PORTFOLIO ===============*/
  let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
  });

  const filterButtons = document.querySelectorAll('.work__item');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      filterButtons.forEach(btn => btn.classList.remove('active-work'));
      this.classList.add('active-work');
    });
  });


  /*=============== SWIPER TESTIMONIAL ===============*/
  let swiperTestimonial = new Swiper(".testimonial__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 48,
      },
    },
  });

  


  /*=============== SCROLL REVEAL ANIMATION ===============*/
  const sr=ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
  
  })
  sr.reveal(`.home__data`)
  sr.reveal(`.home__handle`,{delay:700})
  sr.reveal(`.home__social`,`.home__scroll`,{delay:900,origin:'bottom'})
