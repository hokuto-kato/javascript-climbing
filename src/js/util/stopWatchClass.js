import $ from 'jquery'

export default class {
	//model
	constructor(root) {
		this.numTarget = root.find($('.p-stopwatch__num'));
		this.num = this.numTarget.text();
		this.startBtn = root.find($('.start'));
		this.stopBtn = root.find($('.stop'));
		this.handleEvent();
	}

	//view
	countUp() {
		this.startBtn.attr('disabled','disabled');
		this.numTarget.text(0);
		this.num = 0;
		this.intervalId = setInterval(() => {
			this.numTarget.text(this.num++);
		}, 1000);
	}
	countStop(){
		this.startBtn.removeAttr('disabled');
		clearInterval(this.intervalId);
	}

	//event
	handleEvent() {
		if(!$('.p-stopwatch').length) return;
		this.startBtn.on('click', (e) => {
			this.countUp();
		});
		this.stopBtn.on('click', (e) => {
			this.countStop();
		});
	}
}