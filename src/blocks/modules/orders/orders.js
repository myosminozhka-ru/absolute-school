const MainOrders = class MainOrders {
    constructor(){
        this.elements = document.querySelectorAll('.orders__block--more');
    }
    toggleClassOrders() {
        if (!document.querySelector('.orders__block--more')) return;
        this.elements.forEach(item => {
            item.addEventListener('click', (event) => {
                event.target.closest('.orders__block').querySelector('.orders__block--info').classList.toggle('isActive');
                item.classList.toggle('isActive');
                item.innerText == 'Подробнее' ? item.innerText = 'Свернуть' : item.innerText = 'Подробнее';
           })
        });
    }
    init() {
        this.toggleClassOrders();
    }
}

export default MainOrders;