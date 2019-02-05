import $ from 'jquery';

export default class {
	// -----------------------  model
	constructor($root) {
		this.$root = $root;
		this.num = $('.p-carousel__item').length;
		this.current = 0;

		this.images = [
			"https://fakeimg.pl/100x100/?retina=1&text=1%E6%9E%9A%E7%9B%AE&font=noto",
			"https://fakeimg.pl/100x100/?retina=2&text=2%E6%9E%9A%E7%9B%AE&font=noto",
			"https://fakeimg.pl/100x100/?retina=3&text=2%E6%9E%9A%E7%9B%AE&font=noto"
		];

		this.displaySlide();
		this.handleEvent();
	}

	increment() {
		//最後
		if(this.current === (this.num - 1)) {
			this.current = 0;
		} else {
			this.current++;
		}
	}

	decrement() {
		//最初
		if(this.current === 0) {
			this.current = this.num - 1;
		} else {
			this.current--;
		}
	}

	next() {
		this.increment();
	}

	prev() {
		this.decrement();
	}

	// -----------------------  view
	displaySlide() {
		this.$root.html(`
		<ul class="p-carousel__box"></ul>
		<ul class="p-carousel__nav">
			<li class="p-carousel__nav__item">
				<button class="p-carousel__nav__btn prev" type="button" data-target-prev><</button>
			</li>
			<li class="p-carousel__nav__item">
				<button class="p-carousel__nav__btn next" type="button" data-target-next>></button>
			</li>
		</ul>
		`);
		
		$(this.images).each((index, val) => {
			if(index === 0) {
				$('.p-carousel__box').append(`
					<li class="p-carousel__item is-active" data-target-item>
						<img class="p-carousel__body" src="${val}" alt="">
					</li>
				`);
			} else {
				$('.p-carousel__box').append(`
					<li class="p-carousel__item">
						<img class="p-carousel__body" src="${val}" alt="">
					</li>
				`);
			}
		})
	}

	// displaySlide() {
	// 	this.$item.removeClass('is-active');
	// 	this.$item.eq(this.current).addClass('is-active');
	// }

	// -----------------------  event
	handleEvent() {
		$('.next').on('click', () => {
			this.next()
		});
		$('.prev').on('click', () => {
			this.prev()
		});
	}
}
