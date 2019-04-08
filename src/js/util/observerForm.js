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

		let errors = this.errors,
			errorsStr = "";

		if(errors.length === 0) return;

		for(let i = 0; i < errors.length; i++) {
			errorsStr += "<li>" + errors[i] + "</li>";
		}

		$(".errors").append(errorsStr);
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
		this.validateListener = function() {
		};
	}

	setTitle(title) {
		this.title = title;
		this.valid();
	}

	setBody(body) {
		this.body = body;
		this.valid();
	}

	addValidateListener(listener) {
		this.validateListener = listener;
	}

	valid() {
		this.errors = [];

		if(this.title.length < this.titleMinLength) {
			this.errors.push(
				"タイトルは" + this.titleMinLength + "文字以上でおなしゃす"
			);
		}

		if(this.title.length > this.titleMaxLength) {
			this.errors.push(
				"タイトルは" + this.titleMaxLength + "文字を超えています"
			);
		}

		if(this.body.length < this.bodyMinLength) {
			this.errors.push("本文は" + this.bodyMinLength + "文字以上でおなしゃす");
		}

		if(this.body.length > this.bodyMaxLength) {
			this.errors.push("本文は" + this.bodyMaxLength + "文字を超えています");
		}

		this.validateListener();
	}
}

new ValidatorView();
