import Glide from '@glidejs/glide';

const Modals = class Modals {
    constructor({modalsSelector, modalsOpenerSelector, openedClass, sliderOptions}){
        this.modalsSelector = modalsSelector;
        this.modalsOpenerSelector = modalsOpenerSelector;
        this.openedClass = openedClass;
        this.sliderOptions = sliderOptions;
        this.slider = new Glide('.mount-slider--js', this.sliderOptions);
        this.itemLength = [...document.querySelectorAll('.tourItem')].length;
    }
    openModal(id) {
        if (!document.querySelector(`[${this.modalsSelector}="${id}"]`)) return;
        document.querySelector(`[${this.modalsSelector}="${id}"]`).classList.add(this.openedClass);
    }
    closeModal(id) {
        if (!document.querySelector(`[${this.modalsSelector}="${id}"]`)) return;
        document.querySelector(`[${this.modalsSelector}="${id}"]`).classList.remove(this.openedClass);
    }
    addClickListener() {
        document.addEventListener('click', (event) => {
            if (event.target.dataset.modalId) {
                event.preventDefault();
                this.openModal(event.target.dataset.modalId);
            }
            if (!event.target.dataset.modalId && event.target.dataset.modal) {
                this.closeModal(document.querySelector(`[${this.modalsSelector}].isOpened`).dataset.modal);
            }
            if (event.target.closest('.modal__closer')) {
                console.log(event);
                this.closeModal(document.querySelector(`[${this.modalsSelector}].isOpened`).dataset.modal);
            }
        })
    }
    addKeyupListener() {
        document.addEventListener('keyup', (event) => {
            if (event.keyCode === 27 && document.querySelector(`[${this.modalsSelector}].isOpened`)) {
                this.closeModal(document.querySelector(`[${this.modalsSelector}].isOpened`).dataset.modal);
            }
        })
    }
    sliderModalMount() {
        this.slider.mount();
        console.log(this.slider.index)
    }
    init() {
        if (!this.modalsSelector && this.modalsOpenerSelector) return;
        this.addClickListener();
        this.addKeyupListener();
        this.sliderModalMount();
    }
}

export default Modals;