require('es6-promise').polyfill();
import 'jquery';
import 'nodelist-foreach-polyfill';

import tabs from './modules/tabs';

window.addEventListener('DOMContentLoaded', () => {
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
});