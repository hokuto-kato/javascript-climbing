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
		
	};
}