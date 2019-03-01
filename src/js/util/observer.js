export default function() {
	//Observerのコンストラクタを作成します
	function Observer() {
		//監視者を格納するための空の配列this.listenersを作成します
		// → 複数対応するため、配列からオブジェクトに変更します
		this.listeners = {};
	}

	// 次にon、offというプロトタイプ関数を作成します。
	// onメソッドはthis.listenersにイベントを通知したい関数を追加します。
	// listenersに引数のeventが存在するかチェックし、eventがなければ空の配列を作成し、eventがあれば配列に追加します
	Observer.prototype.on = function(event, func) {
		console.log(this);
		if(!this.listeners[event]) {
			this.listeners[event] = [];
		}
		this.listeners[event].push(func);
	};
	//offメソッドは指定されたオブサーバーを検索しリストから削除します。
	Observer.prototype.off = function(event, func) {
		var ref = this.listeners[event],
			len = ref.length;
		for(var i = 0; i < len; i++) {
			var listener = ref[i];
			if(listener === func) {
				ref.splice(i, 1);
			}
		}
	};

	//最後にtriggerというプロトタイプ関数を作成します。
	//triggerメソッドはオブザーバーのリスト全体を反復処理し、実行します。
	Observer.prototype.trigger = function(event) {
		var ref = this.listeners[event];
		for(var i = 0, len = ref.length; i < len; i++) {
			var listener = ref[i];
			if(typeof listener === "function") listener();
		}
	};

	//observerが完成したら次のように実行します
	var observer = new Observer();
	var greet = function() {
		console.log("Good morning");
	};
	observer.on("morning", greet);
	observer.trigger("morning"); //Good morning

	var sayEvening = function() {
		console.log("Good evening");
	};
	observer.on("evening", sayEvening);
	observer.trigger("evening"); // Good evening

}