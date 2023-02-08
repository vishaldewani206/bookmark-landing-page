const slides = document.querySelectorAll('.sliderBtns');
slides[0].style.color = 'hsl(229, 31%, 21%)';
slides[0].style.borderBottom = '2px solid hsl(0, 94%, 66%)';
console.log(slides);
console.log('object');
slides.forEach((slide) => {
  slide.addEventListener('click', () => {
    for (let i = 0; i < slides.length; i++) {
      slide.classList.remove('active');
      slides[i].style.color = 'hsl(229, 8%, 60%)';
      slides[i].style.border = 'none';
    }
    slide.classList += ' active';
    if (slide.classList.contains('active')) {
      slide.style.color = 'hsl(229, 31%, 21%)';
      slide.style.borderBottom = '2px solid hsl(0, 94%, 66%)';
    }
  });
});
