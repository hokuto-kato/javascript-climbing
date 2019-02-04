export default class {
	// -----------------------  model
	constructor($root) {
		this.$root = $root;
		this.$nav = $root.find('.p-tab__nav');
		this.$navItem = $root.find('.p-tab__nav__item');
		this.$targetItem = $root.find('.p-tab__body__item');
		this.handleEvent();
		this.index = 0;
	}

	// -----------------------  view
	displayContent() {
		this.$navItem.removeClass('is-active');
		this.$navItem.eq(this.index).addClass('is-active');
		this.$targetItem.removeClass('is-active');
		this.$targetItem.eq(this.index).addClass('is-active');
	}

	// -----------------------  event
	handleEvent() {
		this.$navItem.on('click', (e) => {
			this.index = this.$nav.find(e.currentTarget).index();
			this.displayContent();
		});
	}
}
