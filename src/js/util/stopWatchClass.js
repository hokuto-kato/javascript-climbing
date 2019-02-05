import $ from 'jquery'

export default class {
	// -----------------------  model
	constructor($root, options) {
		this.num = 1;
		var defaults = {
			time: 1000
		};
		this.options = Object.assign(defaults, options);
		console.log(this.options);
		this.$numTarget = $root.find($('[data-target-num]'));
		this.$start = $root.find($('[data-trigger-start]'));
		this.$stop = $root.find($('[data-trigger-stop]'));
		this.handleEvent();
	}

	increment() {
		return this.num++;
	}

	// -----------------------  view
	initView() {
		this.$start.attr('disabled', 'disabled');
		this.$numTarget.text(0);
		this.num = 1;
	}
	
	countUp() {
		this.initView();
		this.intervalId = setInterval(() => {
			this.$numTarget.text(this.increment());
		}, this.options.time);
	}

	countStop() {
		this.$start.removeAttr('disabled');
		clearInterval(this.intervalId);
	}

	// -----------------------  event
	handleEvent() {
		this.$start.on('click', () => {
			this.countUp();
		});
		this.$stop.on('click', () => {
			this.countStop();
		});
	}
}
