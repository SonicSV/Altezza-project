require('es6-promise').polyfill();
import 'jquery';
import 'nodelist-foreach-polyfill';

import tabs from './modules/tabs';
import slider from './modules/slider';
import timer from './modules/timer';

window.addEventListener('DOMContentLoaded', () => {

    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    timer('.timer', '1998-10-30');
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    
});