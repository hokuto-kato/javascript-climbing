import $ from 'jquery'

export default class {
	//model
	constructor(root) {
		this.root = root;
		this.title = root.find($('[name="title"]'));
		this.body = root.find($('[name="body"]'));
		this.submit = root.find($('[data-target-submit]'));
		this.titleError = root.find($('[data-target-titleError]'));
		this.bodyError = root.find($('[data-target-bodyError]'));
		this.inputLength = root.find($('input,textarea')).length;
		this.handleEvent();
	}

	titleValidate() {
		if(this.titleLength > 0 && this.titleLength <= 15) {
			this.titleValid();
		} else {
			this.titleInValid();
		}
	}

	bodyValidate() {
		if(this.bodyLength > 0 && this.bodyLength <= 30) {
			this.bodyValid();
		} else {
			this.bodyInValid();
		}
	}

	validCheck() {
		this.validLength = this.root.find('.is-valid').length;
		if(this.inputLength === this.validLength) {
			this.submitValid();
		} else {
			this.submitInValid();
		}
	}

	//view
	titleInValid() {
		this.titleError.fadeIn('fast', 'swing');
		this.title.removeClass('is-valid');
	}

	titleValid() {
		this.titleError.fadeOut('fast', 'swing');
		this.title.addClass('is-valid');
	}

	bodyInValid() {
		this.bodyError.fadeIn('fast', 'swing');
		this.body.removeClass('is-valid');
	}

	bodyValid() {
		this.bodyError.fadeOut('fast', 'swing');
		this.body.addClass('is-valid');
	}
	submitValid(){
		this.submit.addClass('is-active').removeAttr('disabled');
	}
	submitInValid(){
		this.submit.removeClass('is-active').attr('disabled');
	}

	//event
	handleEvent() {
		this.title.on('input focusout', () => {
			this.titleLength = this.title.val().length;
			this.titleValidate();
			this.validCheck();
		});
		this.body.on('input focusout', () => {
			this.bodyLength = this.body.val().length;
			this.bodyValidate();
			this.validCheck();
		});
	}
}
