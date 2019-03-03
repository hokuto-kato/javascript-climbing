export default class {
	constructor() {
		//監視者を格納するための空のthis.listeners配列を作成します
		this.listeners = [];
		this.handleEvent();
	}

	// onメソッドはthis.listenersにイベントを通知したい関数を追加します。
	on(func) {
		this.listeners.push(func);
	}

	//offメソッドは指定されたオブサーバーを検索しリストから削除します。
	off(func) {
		let len = this.listeners.length;
		for(let i = 0; i < len; i++) {
			let listener = this.listeners[i];
			if(listener === func) {
				this.listeners.splice(i, 1);
			}
		}
	}

	//最後にtriggerというクラスメソッドを作成します。
	//triggerメソッドはオブザーバーのリスト全体を反復処理し、実行します。
	trigger(event) {
		let len = this.listeners.length;
		for(let i = 0; i < len; i++) {
			let listener = this.listeners[i];
			listener();
		}
	}

	greet() {
		console.log("Good Morning");
	}

	handleEvent() {
		this.on(this.greet);
		this.trigger(); //Good morning
	}
}
