import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = document.createElement('div');
    this.render(slides);
    this.initCarousel(slides);
    this.elem.addEventListener('click', (event) => this.productAdd(event));
  }

  render(elem) {
    this.elem.classList.add('carousel');
    this.elem.innerHTML = `
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>
    <div class="carousel__inner"></div>
    `;

    let carouselIn = this.elem.querySelector('.carousel__inner');

    elem.forEach(el => {
      let slide = document.createElement('div');
      slide.classList.add('carousel__slide');
      slide.setAttribute('data-id', `${el.id}`);
      slide.innerHTML = `
      <img src="/assets/images/carousel/${el.image}" class="carousel__img" alt="slide">
      <div class="carousel__caption">
        <span class="carousel__price">€${el.price.toFixed('2')}</span>
        <div class="carousel__title">${el.name}
      </div>
      <button type="button" class="carousel__button">
        <img src="/assets/images/icons/plus-icon.svg" alt="icon">
      </button>
      `;
      carouselIn.append(slide);
    });
  }

  initCarousel(arr) {
    let carousel = this.elem.querySelector('.carousel__inner');
    let arrowRight = this.elem.querySelector('.carousel__arrow_right');
    let arrowLeft = this.elem.querySelector('.carousel__arrow_left');

    let count = 0;
    let arrLength = arr.length;
    arrowLeft.style.display = 'none';


    arrowRight.addEventListener('click', function() {
      count += 1;
      let slideWidth = carousel.offsetWidth;

      if (count > 0 && count < (arrLength - 1)) {
        arrowLeft.style.display = '';
        arrowRight.style.display = '';
      } else if (count >= (arrLength - 1)) {
        arrowRight.style.display = 'none';
      } else {
        arrowLeft.style.display = 'none';
      }

      carousel.style.transform = `translateX(-${slideWidth * count}px)`;
    });


    arrowLeft.addEventListener('click', function() {
      count -= 1;
      let slideWidth = carousel.offsetWidth;

      if (count > 0 && count < (arrLength - 1)) {
        arrowLeft.style.display = '';
        arrowRight.style.display = '';
      } else if (count >= (arrLength - 1)) {
        arrowRight.style.display = 'none';
      } else {
        arrowLeft.style.display = 'none';
      }

      carousel.style.transform = `translateX(-${slideWidth * count}px)`;
    });
  }

  productAdd(event) {
    let btn = event.target.closest('.carousel__button');
    let slideId = this.elem.querySelector('.carousel__slide');
    if (btn) {
      this.elem.dispatchEvent(new CustomEvent("product-add", {
        detail: slideId.getAttribute('data-id'),
        bubbles: true
      }));
    }
  }
}

