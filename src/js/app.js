import $ from 'jquery';
import carouselClass from './util/carouselClass'
import tab from './util/tab'
import stopWatchClass from './util/stopWatchClass'
import form from './util/form'
import calc from './util/calc'
import closure from './util/closure'
import observer from './util/observer'
import observerClass from "./util/observerClass";

let target = target || {};
target = {
	form: $('[data-target-form]'),
	stopWatch: $('[data-target-stopWatch]'),
	tab: $('[data-target-tab]'),
	carousel: $('[data-target-carousel]'),
	calc: $('[data-target-calc]'),
	closure: $('[data-target-closure]'),
	observer: $('[data-target-observer]'),
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
	new stopWatchClass($('#stopWatch1'),{time: 1000});
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

$(() => {
	formEvt();
	stopWatchEvt();
	tabEvt();
	carouselEvt();
	calcEvt();
	closureEvt();
	observerEvt();
});