import $ from 'jquery'

export default class {
	// -----------------------  model
	constructor($root) {
		//関連するデータをまとめて記述する
		//複数対応するためのroot
		this.$root = $root;
		//セレクタを初期化
		this.$title = '';
		this.$body = '';
		this.$check = '';
		this.$error = '';
		this.$submit = '';
		//エラーを入れるための配列を準備
		this.errorArray = [];
		this.checkArray = [];
		//バリデートルール
		this.titleMinLength = 1;
		this.titleMaxLength = 15;
		this.bodyMinLength = 1;
		this.bodyMaxLength = 30;

		// セレクタを定義
		this.$title = $($root).find($('[data-target-title]'));
		this.$body = $($root).find($('[data-target-body]'));
		this.$check = $($root).find($('[data-target-check]'));
		this.$error = $('[data-target-error]');
		this.$submit = $('[data-target-submit]');
		//event用の関数を実行
		this.handleEvent();

	}

	//タイトル、本文それぞれバリデートが通ったらtrueを返してエラー配列を空にする
	//そうじゃなければエラー配列にエラーメッセージが入るメソッド
	isValid() {
		//エラー配列を初期化。
		//タイトルか本文のバリデートが通らなかったら配列にエラーが入る。通ればそのままtrueが返る。
		this.errorArray = [];

		//タイトルのバリデートルール。通らなかったらエラー配列にエラー内容を入れる。
		if(!this.isValidTitle()) {
			this.errorArray.push(`・タイトルは${this.titleMinLength}文字以上、${this.titleMaxLength}文字以下で入力してください`)
		}

		if(!this.isValidBody()) {
			this.errorArray.push(`・本文は${this.bodyMinLength}文字以上、${this.bodyMaxLength}文字以下で入力してください`)
		}

		if(!this.isValidCheck()) {
			this.errorArray.push(`・いずれかのチェックボックスをチェックしてください`)
		}

		//条件式をreturnすることでbooleanが返る
		return this.errorArray.length === 0;
	}

	isValidTitle() {
		return ($(this.$title).val().length >= this.titleMinLength) && ($(this.$title).val().length <= this.titleMaxLength);
	}

	isValidBody() {
		return ($(this.$body).val().length >= this.bodyMinLength) && ($(this.$body).val().length <= this.bodyMaxLength);
	}

	isValidCheck() {
	}


	// -----------------------  view
	handleError() {
		//バリデートが通ったらエラーを空に。
		//submitを活性化させる
		$(this.$error).html('');
		if(this.isValid()) {
			$(this.$submit).removeAttr('disabled').addClass('is-active');
		} else {
			//バリデートが通らなかったらエラーを表示
			//submitを非活性化させる
			$(this.$submit).attr('disabled', 'disabled').removeClass('is-active');
			$(this.errorArray).each((index, val) => {
				$(this.$error).append(`<p class="p-form__error__body">${val}</p>`)
			});
		}
	}

	//event
	handleEvent() {
		$(this.$title).on('input', (e) => {
			//e.currentTargetでイベントの対象を取得できる
			this.$title = $(e.currentTarget);
			this.handleError();
		});

		$(this.$body).on('input', (e) => {
			this.$body = $(e.currentTarget);
			this.handleError();
		});

		$(this.$check).find('[type="checkbox"]').on('click', () => {
			this.checkArray = [];
			$(this.$check).find('[type="checkbox"]').each((index, val) => {
				this.checkArray.push($(val).prop('checked'));
			});
			console.log(
				this.checkArray.some((val) => {
					return val === true
				})
			);
		});
	}
}