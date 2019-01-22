import $ from 'jquery'

export default class {
	//model
	constructor(root) {
		this.root = root;
		this.title = '';
		this.titleMaxLength = 15;
		this.titleMinLength = 1;
		this.body = '';
		this.bodyMaxLength = 30;
		this.bodyMinLength = 1;
		this.errors = [];

		this.title = root.find($('[name="title"]'));
		this.body = root.find($('[name="body"]'));
		this.submit = root.find($('[data-target-submit]'));
		this.$errors = root.find($('[data-target-error]'));
		this.handleEvent();
	}

	isValid() {
		this.errors = [];

		if(!this.isValidTitle()) {
			this.errors.push(`タイトルは${this.titleMinLength}文字以上、${this.titleMaxLength}文字以下でご入力ください`);
		}

		if(!this.isValidBody()) {
			this.errors.push(`本文は${this.bodyMinLength}文字以上、${this.bodyMaxLength}文字以下でご入力ください`);
		}

		return this.errors.length === 0
	}

	isValidTitle() {
		return (this.title.length >= this.titleMinLength) && (this.title.length <= this.titleMaxLength);
	}

	isValidBody() {
		return (this.body.length >= this.bodyMinLength) && (this.body.length <= this.bodyMaxLength);
	}

	//view
	submitValid() {
	}

	displayErrors() {
		$(this.$errors).html("");
		if(this.isValid()) return;
		$(this.errors).each((index, val) => {
			$(this.$errors).append(`<p class="p-form__error__body">${val}</p>`);
		});
	}

	//event
	handleEvent() {
		this.title.on('keyup', (e) => {
			this.title = $(e.currentTarget).val();
			this.displayErrors();
			this.submitValid();
		});
		this.body.on('keyup', (e) => {
			this.body = $(e.currentTarget).val();
			this.displayErrors();
			this.submitValid();
		});
	}
}
