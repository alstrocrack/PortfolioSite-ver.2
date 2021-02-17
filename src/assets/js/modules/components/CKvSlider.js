// import Swiper JS 
// NOTE: インポートを略すとエラーが出る
import Swiper from './node_modules/swiper/swiper';
// import Swiper styles
import './node_modules/swiper/swiper-bundle.css';
// core version + navigation, pagination modules:
import SwiperCore, { Navigation, Pagination } from './node_modules/swiper/core';
// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination]);

export default class CKvSlider {
    constructor(el) {
        this.el = el;
        this.init();
    }
    init() {
        const swiper = new Swiper(this.el, {
            // Optional parameters
            direction: 'horizontal',
            loop: true,

            // If we need pagination
            pagination: {
            el: '.swiper-pagination',
            },

            // Navigation arrows
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },

            // And if we need scrollbar
            scrollbar: {
            el: '.swiper-scrollbar',
            },
        });
    }
}
new CKvSlider();