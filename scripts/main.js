const carousel = document.querySelector('.carousel');
const nextButton = document.querySelector('.back__button');
const backButton = document.querySelector('.next__button');

backButton.addEventListener('click', () => {
  carousel.scrollBy({
    left: -1,
  });
})

nextButton.addEventListener('click', () => {
  carousel.scrollBy({
    left: 1,
  });
})
