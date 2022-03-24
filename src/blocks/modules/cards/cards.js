import Glide from '@glidejs/glide';
import axios from 'axios';

const Cards = class Cards {
    constructor({sliderOptions}){
        this.sliderOptions = sliderOptions;
        this.products = [];
        this.sliders = [];
        // this.slider = new Glide('.cards__slider--js', sliderOptions);
    }
    fetchProducts() {
        axios.get('files/products.json').then((products) => {
            this.products = products.data;
            setTimeout(() => {
                if (!document.querySelector('.cards__slider--js')) return;
                this.mountSlider();
            }, 500)
        })
    }
    mountSlider() {
        document.querySelectorAll('.cards__slider--js').forEach(item => {
            new Glide(item, this.sliderOptions).mount();
            console.log(item);
        })
    }
    init() {
        this.fetchProducts();
    }
}

export default Cards;