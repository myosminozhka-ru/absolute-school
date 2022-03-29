import * as globalFunctions from './modules/functions.js';
globalFunctions.isWebp();

import Vue from 'vue/dist/vue.js';
import AOS from 'aos';
import $ from 'jquery';

import MainHeader from '../blocks/modules/header/header.js';
import Cards from '../blocks/modules/cards/cards.js';
import TabsBlock from '../blocks/modules/tabs_block/tabs_block.js';
import Modals from '../blocks/modules/modals/modals.js';



window.app = new Vue({
    el: '#app',
    data: () => ({
        isMounted: false,
        cart: {
            amount: 0
        },
        sizes: {
            tablet: 1024,
            mobile: 768,
            window: window.innerWidth
        },
        mainHeader: new MainHeader({
            isMobileMenuOpened: false,
        }),
        cards: new Cards({
            sliderOptions: {
                type: 'carousel',
                startAt: 0,
                perView: 1
            }
        }),
        tabsBlock: new TabsBlock({
            buttonsArray : [
                {
                    name: 'Развивающие игрушки',
                    value: 'id1'
                },
                {
                    name: 'Книги',
                    value: 'id2'
                },
                {
                    name: 'Одежда',
                    value: 'id3'
                },
                {
                    name: 'Наушники',
                    value: 'id4'
                }
            ]
        }),
        orderBlock: new TabsBlock({
            buttonsArray : [
                {
                    name: 'Оформлен',
                    value: 'id1'
                },
                {
                    name: 'Отменен',
                    value: 'id2'
                },
                {
                    name: 'Готов к выдаче',
                    value: 'id3'
                },
                {
                    name: 'Выдан',
                    value: 'id4'
                }
            ]
        }),
        modals: new Modals({
            modalsSelector: "data-modal",
            modalsOpenerSelector: "data-modal-id",
            openedClass: "isOpened"
        })
    }),
    beforeCreate() {
        window.addEventListener('resize', () => {
            this.sizes.window = window.innerWidth;
        });
    },
    mounted() {
        this.isMounted = true;
        this.mainHeader.init();
        this.cards.init();
        this.modals.init();
        this.animateBlocks();
    },
    computed: {
        isMobile: function () {
            return this.sizes.window < this.sizes.mobile;
        },
        isTablet: function () {
            return this.sizes.window < this.sizes.tablet && this.sizes.window > this.sizes.mobile;
        },
        products: function () {
            switch (this.tabsBlock.selected) {
                case 'all':
                    return this.cards.products;
                    break;
                default: 
                    return this.cards.products.filter(item => item.type === this.tabsBlock.selected);
            }
        }
    },
    methods: {
        addClassToWrapper(nameOfClass) {
            if (document.querySelector('.wrapper') ) {
                document.querySelector('.wrapper').classList.add(nameOfClass)
            }
        },
        animateBlocks() {
            AOS.init({
                once: true,
                disable: 'mobile'
            })
        }
    }
});