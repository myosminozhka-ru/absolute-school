import * as globalFunctions from './modules/functions.js';
globalFunctions.isWebp();

import Vue from 'vue/dist/vue.js';
import $ from 'jquery';

import MainHeader from '../blocks/modules/header/header.js';
import Cards from '../blocks/modules/cards/cards.js';


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
    },
    computed: {
        isMobile: function () {
            return this.sizes.window < this.sizes.mobile;
        },
        isTablet: function () {
            return this.sizes.window < this.sizes.tablet && this.sizes.window > this.sizes.mobile;
        }
    },
    methods: {
        addClassToWrapper(nameOfClass) {
            if (document.querySelector('.wrapper') ) {
                document.querySelector('.wrapper').classList.add(nameOfClass)
            }
        }
    }
});