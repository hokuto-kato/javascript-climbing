import $ from 'jquery'

export default class {
	// -----------------------  model
	constructor($root) {
		this.titleMinLength = 1;
		this.titleMaxLength = 15;
		this.bodyMinLength = 1;
		this.bodyMaxLength = 30;

		this.title = "";
		this.body = "";
		this.categories = [];

		this.$root = $root;
		this.$title = $($root).find($('[data-target-title]'));
		this.$body = $($root).find($('[data-target-body]'));
		this.$checkBox = $($root).find($('[data-target-checkbox]'));
		this.$error = $($root).find($('[data-target-error]'));
		this.$submit = $($root).find($('[data-target-submit]'));
		
		this.handleEvent();
	}

	isValid() {
		this.errorArray = [];

		if(!this.isValidTitle()) {
			this.errorArray.push(`・タイトルは${this.titleMinLength}文字以上、${this.titleMaxLength}文字以下で入力してください`)
		}

		if(!this.isValidBody()) {
			this.errorArray.push(`・本文は${this.bodyMinLength}文字以上、${this.bodyMaxLength}文字以下で入力してください`)
		}

		if(!this.isValidCategories()) {
			this.errorArray.push(`・いずれかのチェックボックスをチェックしてください`)
		}

		//条件式をreturnすることでbooleanが返る
		return this.errorArray.length === 0;
	}

	isValidTitle() {
		return (this.title.length >= this.titleMinLength) && (this.title.length <= this.titleMaxLength);
	}

	isValidBody() {
		return (this.body.length >= this.bodyMinLength) && (this.body.length <= this.bodyMaxLength);
	}

	isValidCategories() {
		if(this.categories.length > 0) return true;
	}

	setCategories() {
		this.categories = [];
		this.$checkBox.each((index, val) => {
			if($(val).prop('checked')) {
				this.categories.push($(val).val());
			}
		});
	}

	// -----------------------  view
	handleError() {
		$(this.$error).html('');
		if(this.isValid()) {
			$(this.$submit).removeAttr('disabled').addClass('is-active');
		} else {
			$(this.$submit).attr('disabled', 'disabled').removeClass('is-active');
			$(this.errorArray).each((index, val) => {
				$(this.$error).append(`<p class="p-form__error__body">${val}</p>`)
			});
		}
	}

	//event
	handleEvent() {
		$(this.$title).on('input', (e) => {
			this.title = $(e.currentTarget).val();
			this.handleError();
		});

		$(this.$body).on('input', (e) => {
			this.body = $(e.currentTarget).val();
			this.handleError();
		});

		$(this.$checkBox).on('click', () => {
			this.setCategories();
			this.handleError();
		});
	}
}