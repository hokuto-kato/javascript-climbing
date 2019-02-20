import $ from 'jquery'

export default function() {
	if(!$('#prototype').length) return;
	function Human(name) {
		this.name = name;
		console.log(this);
	}

	Human.prototype.greet = function() {
		console.log(`hello,${this.name}`);
	};

	const mike = new Human('mike');
	mike.greet();
	

}