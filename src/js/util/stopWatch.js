import $ from 'jquery'

export default function() {
	if(!$('.p-stopwatch').length) return;
	const stopWatch = {
			num: $('.p-stopwatch__num').text(),
			intervalId: null,
			status: "ready",
			init:function(){
				this.start();
				this.stop();
			},
			start: function() {
				$('.start').on('click', () => {
					if(this.num > 0) {
						$('.p-stopwatch__num').text(0);
						this.countUp(num);
					} else {
						this.countUp(this.num);
					}
				});
			},
			stop: function() {
				$('.stop').on('click', () => {
					this.status = "ready";
					clearInterval(this.intervalId);
				});
			},
			countUp: function(num) {
				if (this.status !== "ready") return;
				this.intervalId = setInterval(() => {
					$('.p-stopwatch__num').text(num++);
				}, 1000);
			}
		};
		stopWatch.init();
}
