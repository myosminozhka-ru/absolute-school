import Glide from '@glidejs/glide';
import axios from 'axios';

const Cards = class Cards {
    constructor({sliderOptions}){
        this.sliderOptions = sliderOptions;
        this.products = [];
        this.sliders = [];
    }
    fetchProducts() {
        axios.get('files/products.json').then((products) => {
            this.products = products.data;
            this.mountSlider();
        })
    }
    loadMore() {
        axios.get('files/products-more.json').then((products) => {
            this.products = [...this.products, ...products.data];
            this.mountSlider();
        })
    }
    mountSlider() {
        setTimeout(() => {
            if (!document.querySelector('.cards__slider--js')) return;
            document.querySelectorAll('.cards__slider--js').forEach(item => {
                new Glide(item, this.sliderOptions).mount();
            })
        }, 500)
    }
    init() {
        this.fetchProducts();
    }
}

export default Cards;