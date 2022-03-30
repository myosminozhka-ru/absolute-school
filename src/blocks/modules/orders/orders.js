import axios from 'axios';

const MainOrders = class MainOrders {
    constructor(){
        this.products = [];
    }
    fetchProducts() {
        axios.get('files/products.json').then((products) => {
            this.products = products.data;
            this.toggleClassOrders();
        })
    }
    loadMore() {
        axios.get('files/products-more.json').then((products) => {
            this.products = [...this.products, ...products.data];
            this.toggleClassOrders();
        })
    }
    toggleClassOrders() {
        setTimeout(() => {
            if (!document.querySelector('.orders__block--more')) return;
            document.querySelectorAll('.orders__block--more').forEach(item => {
                item.addEventListener('click', (event) => {
                    event.target.closest('.orders__block').querySelector('.orders__block--info').classList.toggle('isActive');
                    item.classList.toggle('isActive');
                    item.innerText == 'Подробнее' ? item.innerText = 'Свернуть' : item.innerText = 'Подробнее';
            })
            });
        }, 500);
    }
    init() {
        this.fetchProducts();
    }
}

export default MainOrders;