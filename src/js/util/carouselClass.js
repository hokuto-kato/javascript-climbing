export default class {
	// 土台となるclassを準備
	// 最初に実行される処理であるconstructorをセット

	//model
	constructor($root) {
		this.$root = $root;
		this.$item = $root.find('.p-carousel__item');
		this.$next = $root.find('.next');
		this.$prev = $root.find('.prev');
		this.num = this.$item.length;
		this.current = 0;

		this.handleEvent();
	}

	increment() {
		if(this.current === (this.num - 1)) {
			this.current = 0;
		} else {
			this.current++;
		}
	}

	decrement() {
		if(this.current === 0) {
			this.current = this.num - 1;
		} else {
			this.current--;
		}
	}

	next() {
		this.increment();
		this.displaySlide();
	}

	prev() {
		this.decrement();
		this.displaySlide();
	}

	//view
	displaySlide() {
		this.$item.removeClass('is-active');
		this.$item.eq(this.current).addClass('is-active');
	}

	//event
	handleEvent() {
		this.$next.on('click', () => {
			this.next()
		});
		this.$prev.on('click', () => {
			this.prev()
		});
	}
}
