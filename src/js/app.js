import $ from 'jquery';
// import carousel from './util/carousel'
import carouselClass from './util/carouselClass'
import stopWatch from './util/stopWatch'

const carousel = new carouselClass();

$(() => {
	stopWatch();
	carousel.init();
});