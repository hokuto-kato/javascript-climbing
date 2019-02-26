export default function() {

	//Observerのコンストラクタを作成します
	function Observer() {
		//監視者を格納するための空の配列this.listnersを作成します
		this.listners = [];
	}

	// 次にon、offというプロトタイプ関数を作成します。
	// onメソッドはthis.listnersにイベントを通知したい関数を追加します。
	Observer.prototype.on = function(func) {
		this.listners.push(func);
	};
	//offメソッドは指定されたオブサーバーを検索しリストから削除します。
	Observer.prototype.off = function(func) {
		const len = this.listner.length;
		for(let i = 0; i < len; i++) {
			const listner = this.listners[i];
			if(listner === func) {
				this.listeners.splice(i, 1);
			}
		}
	};

	//最後にtriggerというプロトタイプ関数を作成します。
	//triggerメソッドはオブザーバーのリスト全体を反復処理し、実行します。
	Observer.prototype.trigger = function(event) {
		const len = this.listners.length;
		for(let i = 0; i < len; i++) {
			const listner = this.listners[i];
			listner();
		}
	};
	
	const observer = new Observer();
		const greet = () => {
			console.log("good morning");
		};
		observer.on(greet);
		observer.trigger();
}
