import $ from 'jquery';
import carouselClass from './util/carouselClass'
import tab from './util/tab'
// import stopWatch from './util/stopWatch'
import stopWatchClass from './util/stopWatchClass'
import form from './util/form'

// new carouselClass($("#carousel1"));
// new carouselClass($("#carousel2"));

new tab($('#tab1'));
new tab($('#tab2'));

new stopWatchClass($('#stopWatch1'));
new stopWatchClass($('#stopWatch2'));

new form($('#form1'));