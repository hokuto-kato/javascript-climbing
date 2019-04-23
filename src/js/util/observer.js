import $ from "jquery";

class ValidatorView {
	constructor() {
		this.model = new ValidatorModel();
		this.$title = $(".title");
		this.$body = $(".body");
		this.addListeners();
	}

	addListeners() {
		this.$title.on("keyup", e => {
			this.model.setTitle($(e.currentTarget).val());
		});

		this.$body.on("keyup", e => {
			this.model.setBody($(e.currentTarget).val());
		});
		
		this.model.addValidateListener(this.displayErrors);
	}

	displayErrors() {
		$(".errors").text("");
		let errors = this.errors;
		let errorStr = "";
		if(errors.length === 0) return;

		for(let i = 0; i < errors.length; i++) {
			errorStr += `<li>${errors[i]}</li>`;
		}

		$(".errors").append(errorStr);
	}
}

class ValidatorModel {
	constructor() {
		this.title = "";
		this.titleMinLength = 1;
		this.titleMaxLength = 10;
		this.body = "";
		this.bodyMinLength = 1;
		this.bodyMaxLength = 30;
		this.errors = [];
		this.validateListener = () => {};
	}

	setTitle(title) {
		this.title = title;
		this.valid();
	}

	setBody(body) {
		this.body = body;
		this.valid();
	}

	//model側はview側にある「エラーを表示する」というメソッドしか知らない
	addValidateListener(listener) {
		this.validateListener = listener;
	}

	valid() {
		this.errors = [];

		if(this.title.length < this.titleMinLength) {
			this.errors.push(`タイトルは${this.titleMinLength}文字以上でご入力ください`)
		}

		if(this.title.length > this.titleMaxLength) {
			this.errors.push(`タイトルは${this.titleMaxLength}文字以下でご入力ください`)
		}

		if(this.body.length < this.bodyMinLength) {
			this.errors.push(`本文は${this.bodyMinLength}文字以上でご入力ください`)
		}

		if(this.body.length > this.bodyMaxLength) {
			this.errors.push(`本文は${this.bodyMaxLength}文字以下でご入力ください`)
		}

		this.validateListener();
	}
}

export {ValidatorView};
