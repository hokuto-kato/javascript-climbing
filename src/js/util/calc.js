import $ from 'jquery'

export default class {
	// -----------------------  model
	constructor($root) {
		this.valueLeft = 1;
		this.valueRight = 1;

		this.$btn = $($root).find($('[data-trigger-submit]'));
		this.$selectLeft = $($root).find($('[data-trigger-select1]'));
		this.$selectRight = $($root).find($('[data-trigger-select2]'));
		this.$result = $($root).find($('[data-target-result]'));
		this.handleEvent();
	}

	addition() {
		return this.valueLeftNum + this.valueRightNum;
	}
	
	subtraction(){
			return this.valueLeftNum - this.valueRightNum;
	}

	multiplication() {
		return this.valueLeftNum * this.valueRightNum;
	}

	division() {
		return this.valueLeftNum / this.valueRightNum;
	}

	// -----------------------  view
	displayResult() {
		const resultTemplate = `
<p class="p-calc__result__body">${this.valueLeftNum}+${this.valueRightNum}=${this.addition()}</p>
<p class="p-calc__result__body">${this.valueLeftNum}-${this.valueRightNum}=${this.subtraction()}</p>
<p class="p-calc__result__body">${this.valueLeftNum}×${this.valueRightNum}=${this.multiplication()}</p>
<p class="p-calc__result__body">${this.valueLeftNum}÷${this.valueRightNum}=${this.division()}</p>
`;
		$(this.$result).html(resultTemplate);
	}


	// -----------------------  event
	handleEvent() {
		$(this.$btn).on('click', () => {
			this.valueLeft = Number($(this.$selectLeft).val());
			this.valueLeftNum = Number(this.valueLeft);
			this.valueRight = $(this.$selectRight).val();
			this.valueRightNum = Number(this.valueRight);
			this.displayResult();
		});
	}
}