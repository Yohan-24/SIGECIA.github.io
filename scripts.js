function closeAnnouncement() {
  document.getElementById('announcement').style.display = 'none';
}

const sliderTrack = document.getElementById('sliderTrack');
const slides = sliderTrack.querySelectorAll('img');
const totalSlides = slides.length;
const dotsContainer = document.getElementById('sliderDots');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let current = 0;
let interval;

// Crear dots dinámicamente
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => {
    current = i;
    updateSliderPosition();
    resetInterval();
  });
  dotsContainer.appendChild(dot);
}

const dots = dotsContainer.querySelectorAll('.dot');

function updateSliderPosition() {
  sliderTrack.style.transform = `translateX(-${current * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[current].classList.add('active');
}

function nextSlide() {
  current = (current + 1) % totalSlides;
  updateSliderPosition();
}

function prevSlide() {
  current = (current - 1 + totalSlides) % totalSlides;
  updateSliderPosition();
}

prevBtn.addEventListener('click', () => {
  prevSlide();
  resetInterval();
});

nextBtn.addEventListener('click', () => {
  nextSlide();
  resetInterval();
});

function startInterval() {
  interval = setInterval(nextSlide, 4000);
}

function resetInterval() {
  clearInterval(interval);
  startInterval();
}

const banner = document.getElementById('banner');
banner.addEventListener('mouseover', () => clearInterval(interval));
banner.addEventListener('mouseout', startInterval);

startInterval();
