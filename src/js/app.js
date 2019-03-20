import $ from 'jquery';
import carousel from './util/carousel'
import carouselClass from './util/carouselClass'
import tab from './util/tab'
import stopWatch from './util/stopWatch'
import stopWatchClass from './util/stopWatchClass'
import form from './util/form'
import calc from './util/calc'
import closure from './util/closure'
import observer from './util/observer'
import observerClass from "./util/observerClass";
import formValidateObserver from "./util/formValidateObserver";

const target = {
	form: $('[data-target-form]'),
	stopWatch: $('[data-target-stopWatch]'),
	stopWatchClass: $('[data-target-stopWatchClass]'),
	tab: $('[data-target-tab]'),
	carousel: $('[data-target-carousel]'),
	carouselClass: $('[data-target-carouselClass]'),
	calc: $('[data-target-calc]'),
	closure: $('[data-target-closure]'),
	observer: $('[data-target-observer]'),
	formObserver: $('[data-target-form-observer]'),
};

const carouselEvt = () =>{
	if(!target.carousel.length) return;
	carousel();
};

const carouselClassEvt = () =>{
	if(!target.carouselClass.length) return;
	new carouselClass($('#carousel1'));
};

const stopWatchEvt = () => {
	if(!target.stopWatch.length) return;
	stopWatch();
};

const stopWatchClassEvt = () => {
	if(!target.stopWatchClass.length) return;
	new stopWatchClass($('#stopWatch1'),{time: 1000});
};

const tabEvt = () =>{
	if(!target.tab.length) return;
	new tab($('#tab1'));
	new tab($('#tab2'));
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

const closureEvt = () =>{
	if(!target.closure.length) return;
	closure();
};

const observerEvt = () => {
	if(!target.observer.length) return;
	new observerClass();
};

const observerFormEvt = () => {
	if(!target.formObserver.length) return;
	new formValidateObserver();
};

$(() => {
	formEvt();
	stopWatchEvt();
	stopWatchClassEvt();
	tabEvt();
	carouselEvt();
	carouselClassEvt();
	calcEvt();
	closureEvt();
	observerEvt();
	observerFormEvt();
});