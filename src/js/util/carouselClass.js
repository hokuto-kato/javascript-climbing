import $ from 'jquery';

export default class {
	// -----------------------  model
	constructor($root) {
		this.$root = $root;
		this.current = 0;

		this.images = [
			"https://fakeimg.pl/100x100/?retina=1&text=1%E6%9E%9A%E7%9B%AE&font=noto",
			"https://fakeimg.pl/100x100/?retina=2&text=2%E6%9E%9A%E7%9B%AE&font=noto",
			"https://fakeimg.pl/100x100/?retina=3&text=3%E6%9E%9A%E7%9B%AE&font=noto"
		];
		
		this.createTemplate();
		this.initElement();
		this.handleEvent();
	}

	initElement() {
		this.$root.append(this.createTemplate());
		this.$item = this.$root.find($('.p-carousel__item'));
		this.num = $('.p-carousel__item').length;
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

	// -----------------------  view
	createTemplate() {
		this.template = `
		<ul class="p-carousel__box">${this.createImgView()}</ul>
			<ul class="p-carousel__nav">
				<li class="p-carousel__nav__item">
					<button class="p-carousel__nav__btn prev" type="button"><</button>
				</li>
				<li class="p-carousel__nav__item">
					<button class="p-carousel__nav__btn next" type="button">></button>
				</li>
			</ul>
		</ul>`;
		return this.template;
	}

	createImgView() {
		this.imageViews = "";
		$(this.images).each((index, val) => {
			this.className = "p-carousel__item";
			if(index === 0) this.className = "p-carousel__item is-active";
			this.imageViews += `
				<li class="${this.className}">
					<img class="p-carousel__body" src="${val}" alt="">
				</li>`
		});
		return this.imageViews;
	}

	moveSlide() {
		this.$item.removeClass('is-active');
		this.$item.eq(this.current).addClass('is-active');
	}

	// -----------------------  event
	handleEvent() {
		$('.next').on('click', () => {
			this.increment();
			this.moveSlide();
		});
		$('.prev').on('click', () => {
			this.decrement();
			this.moveSlide();
		});
	}
}
