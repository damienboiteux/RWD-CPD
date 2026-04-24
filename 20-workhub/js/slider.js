const slider = document.querySelector('[data-slider]');

if (slider) {
  const track = slider.querySelector('.slider-track');
  const slides = Array.from(slider.querySelectorAll('.slide'));
  const prevButton = slider.querySelector('[data-slider-prev]');
  const nextButton = slider.querySelector('[data-slider-next]');
  const dots = Array.from(slider.querySelectorAll('[data-slider-dot]'));
  let currentIndex = 0;

  const updateSlider = () => {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, index) => {
      dot.classList.toggle('is-active', index === currentIndex);
      dot.setAttribute('aria-current', index === currentIndex ? 'true' : 'false');
    });
  };

  prevButton?.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
  });

  nextButton?.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateSlider();
    });
  });

  updateSlider();
}
