import $ from 'jquery'

export default class {
	// -----------------------  model
	constructor($root) {
		this.num = '';
		this.numTarget = $root.find($('[data-target-num]'));
		this.$startBtn = $root.find($('[data-trigger-start]'));
		this.$stopBtn = $root.find($('[data-trigger-stop]'));
		this.$stopWatch = $('[data-target-stopWatch]');
		this.handleEvent();
	}

	// -----------------------  view
	countUp() {
		this.$startBtn.attr('disabled', 'disabled');
		this.numTarget.text(0);
		this.num = 0;
		this.intervalId = setInterval(() => {
			this.numTarget.text(this.num++);
		}, 1000);
	}

	countStop() {
		this.$startBtn.removeAttr('disabled');
		clearInterval(this.intervalId);
	}

	// -----------------------  event
	handleEvent() {
		this.$startBtn.on('click', () => {
			this.countUp();
		});
		this.$stopBtn.on('click', () => {
			this.countStop();
		});
	}
}
