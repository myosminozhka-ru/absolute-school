import * as globalFunctions from './modules/functions.js';
globalFunctions.isWebp();

import Vue from 'vue/dist/vue.js';
import $ from 'jquery';

import Header from '../blocks/modules/header/header.js';


window.app = new Vue({
    el: '#app',
    data: () => ({
        isMounted: false,
        header: new Header({
            someVareible: 'someVareible'
        })
    }),
    mounted() {
        this.isMounted = true;
        this.header.init();
    }
});