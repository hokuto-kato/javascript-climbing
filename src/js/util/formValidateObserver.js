export default class {
	//まずModelを作っていきます。
	//Modelの役割は次の２つです。
	//・Viewから値を受け取って、その値に対してバリデーションを実行する。
	//・バリデーションの結果に応じてイベントを通知する
	//この機能を実装していきます。
	//ここで解説するsetメソッドは、Modelのattributeに値をセットするだけの簡単なものです。その実装方法を見ていきましょう。

	constructor() {
		//まずはModelのコンストラクタを作成します。
		this.val = "";
		//次にオブザーバーの機能を追加します。
		this.listeners = {
			valid: [],
			inValid: []
		};
	}
	
	on(event,func){
		this.listeners[event].push(func);
	}
	
	trigger(event){
		$.each(this.listeners[event],()=>{
			this();
		})
	}
}
