import Glide from '@glidejs/glide';

const Cards = class Cards {
    constructor({sliderOptions}){
        this.sliderOptions = sliderOptions;
        this.slider = new Glide('.cards__slider--js', sliderOptions);
    }
    mountSlider() {
        this.slider.mount();
    }
    init() {
        if (!document.querySelector('.cards__slider--js')) return;
        this.mountSlider();
    }
}

export default Cards;