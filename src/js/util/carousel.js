import $ from 'jquery'

export default function() {
	if(!$('.p-carousel').length) return;
	
	const carousel = {
		current: 1,
		num: $('.p-carousel__box li').length,
		init: function() {
			this.next();
			this.prev();
		},
		next: function() {
			$('.next').on('click', () => {
				$('.p-carousel__box li').removeClass('is-active');
				if(this.current === this.num) {
					$('.p-carousel__box li').eq(0).addClass('is-active');
					this.current = 1;
				} else {
					this.current++;
					$('.p-carousel__box li').eq(this.current - 1).addClass('is-active');
				}
			});
		},
		prev: function() {
			$('.prev').on('click', () => {
				$('.p-carousel__box li').removeClass('is-active');
				if(this.current === 1) {
					$('.p-carousel__box li').eq(this.num - 1).addClass('is-active');
					this.current = this.num;
				} else {
					this.current--;
					$('.p-carousel__box li').eq(this.current - 1).addClass('is-active');
				}
			});
		}
	};

	carousel.init()
}
