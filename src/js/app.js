import $ from 'jquery';
import carouselClass from './util/carouselClass'
import tab from './util/tab'
import stopWatchClass from './util/stopWatchClass'
import form from './util/form'
import calc from './util/calc'

let target = target || {};
target = {
	form: $('[data-target-form]'),
	stopWatch: $('[data-target-stopWatch]'),
	tab: $('[data-target-tab]'),
	carousel: $('[data-target-carousel]'),
	calc: $('[data-target-calc]'),
};

const carouselEvt = () =>{
	if(!target.carousel.length) return;
	new carouselClass($("#carousel1"));
};

const tabEvt = () =>{
	if(!target.tab.length) return;
	new tab($('#tab1'));
	new tab($('#tab2'));
};

const stopWatchEvt = () => {
	if(!target.stopWatch.length) return;
	new stopWatchClass($('#stopWatch1'),{time: 5000});
};

const formEvt = () => {
	if(!target.form.length) return;
	new form($('#form1'));
	new form($('#form2'));
};

const calcEvt = () => {
	if(!target.calc.length) return;
	new calc($('#calc'));
};

$(() => {
	formEvt();
	stopWatchEvt();
	tabEvt();
	carouselEvt();
	calcEvt();
});