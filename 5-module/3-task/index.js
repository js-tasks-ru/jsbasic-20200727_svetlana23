function initCarousel() {
  let carousel = document.querySelector('.carousel__inner');
  let slideWidth = carousel.offsetWidth;
  let arrowRight = document.querySelector('.carousel__arrow_right');
  let arrowLeft = document.querySelector('.carousel__arrow_left');

  let count = 0;
  arrowLeft.style.display = 'none';

  function moveRight() {
    count += slideWidth;

    if (count > slideWidth && count < `${slideWidth * 3}`) {
      arrowLeft.style.display = '';
      arrowRight.style.display = '';
    } else if (count >= `${slideWidth * 3}`) {
      arrowRight.style.display = 'none';
    } else {
      arrowLeft.style.display = 'none';
    }

    carousel.style.transform = `translateX(-${count}px)`;
  }


  function moveLeft() {
    count -= slideWidth;

    if (count > slideWidth && count < `${slideWidth * 3}`) {
      arrowLeft.style.display = '';
      arrowRight.style.display = '';
    } else if (count >= `${slideWidth * 3}`) {
      arrowRight.style.display = 'none';
    } else {
      arrowLeft.style.display = 'none';
    }

    carousel.style.transform = `translateX(-${count}px)`;
  }

  arrowRight.addEventListener('click', moveRight);
  arrowLeft.addEventListener('click', moveLeft);
}
