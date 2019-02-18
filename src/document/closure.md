# クロージャーとは？

クロージャは、独立した (自由な) 変数を参照する関数です。  
言い換えるとクロージャ内で定義された関数は、自身が作成された環境を '覚えています'。

# 問題

呼び出すたびに、1,2,3,...を返すような関数f()を定義せよ。

```js
f(); // 1
f(); // 2
f(); // 3
```

普通の関数では不可能であると思われます。  
これがクロージャーなら可能になります。



# 関数の中の関数

Javascriptでは、関数の中で別の関数を定義することができます。

```js
const outer = () => {
  const inner = () => {
    console.log("hello");
  };
};

inner(); // inner is not defined
```

関数innerを実行しようとしてもエラーになってしまいます。  
inner関数はouter関数の中でスコープが切られているため、  
グローバルな空間でinner関数は定義されていないためです。

```js
const outer = () => {
  const inner = () => {
    console.log("hello");
  };
};

outer(); // 何も起きない
```

outer関数を実行した場合は何も起きません。  
これはouter関数の中のinner関数は「定義」されているだけで「実行」はされていないためです。

```js
const outer = () => {
  const inner = () => {
    console.log("hello");
  };
  inner()
};

outer(); // hello
```

こうすればouter関数の中でinner関数が定義され、その直後にinner関数が実行されているため、「hello」がlogに表示されることになります。



# 無名関数

関数の定義の仕方はいくつかありますが、

```js
function speak() {
  console.log("hello");
}
speak();
```

普通に関数を定義するとこうなります。

```js
const speak = () => {
  console.log('hello');
}
speak();
```

こういうふうに関数を定義した場合、  
() =>{...} の部分を無名関数といいます。  
右辺で無名関数を生成して、それを変数speakに代入しています。  
こうすると変数はspeakは関数のような振る舞いをします。



## 無名関数を定義してすぐ実行する

上記の方法では、3つのステップを踏んでいます。

- 無名関数を定義する
- それを変数speakに代入する
- speak()で関数を実行する

このステップは省けます。

```js
(() => {
  console.log("hello");
})();
```

このように、無名関数を定義してすぐ実行したい場合は

```js
(() => {})();
```

という構文になります。


# 関数を返す関数

Javascriptでは関数を返す関数も作れます。

```js
const outer = () => {
  const inner = () => {
    // 無名関数を定義してinnerに代入
    console.log("hello");
  };
  return inner; // inner関数を返す
};

const f = outer(); // outer関数は戻り値としてinnre関数を返す。それがfに代入される。
f(); //helloと表示。inner()が実行されたのと同じ。
```

outer関数が実行されると、

1. outer関数内で無名関数が実行される
2. それが変数innerに代入される
3. innerが戻り値として返される
4. それがfに代入される

この時outer関数は「関数を返す関数」となっています。

```js
const outer = () => {
  return () => {  // 無名関数を定義してすぐreturn
    console.log("hello");
  };
 };

const f = outer(); // outer内で定義した無名関数がfに代入される。
f(); //helloと表示
```

さらに、無名関数を使うとコードがスッキリします。

```js
const outer = () => {
  return () => {
    const x = "hello";
    console.log(x);
  };
};

const f = outer();
f(); //hello

```

さて、helloという文字を事前に準備してみます。

```js
const outer = () => {
  const x = "hello";

  return () => {
    console.log(x);
  };
};

const f = outer();
f(); //hello
```

さらに変数xに代入する式を上にずらしてみます。  
問題なくHelloと表示されます。  
**これがクロージャーです。**

```js
const outer = () => {
  const x = 1; //outerのスコープ内で変数を定義

  return () => { //クロージャー
    console.log(x); //関数内の無名関数でouterスコープ内の変数を参照
  };
};

const f = outer();
f(); //1
```

新たにクロージャーを作ってみます。  
これがなぜクロージャーなのかというと、次の条件を満たしているからです。

- outerのスコープ内で変数を定義し
- outer関数の中で無名関数（関数内関数）を定義し
- その関数内関数からouterスコープ内の変数を参照している



## それでなんの役に立つのか

「クロージャーは作れたけど、何が嬉しいのか。」  
では先程のをちょっと改造したコードを実行してみます。

```js
const outer = () => {
  let x = 1; //outerのスコープ内で変数を定義
  return () => {
    console.log(x); //関数内の無名関数でouterスコープ内の変数を参照
    x++;
  };
};

const f = outer();
f(); // 1
f(); // 2
f(); // 3
```

なんと、問題が解けています。  
上のコードでは、1回目のf()が実行されたあと、変数xの値（=2）が捨てられずに保存されています。  
そこでさらにf()を実行すると、保存されていた変数xの値2が表示されたあとにxの値が1増やされ、また保存されます。  
クロージャーを使うと、このように「状態を保存できる関数」を作ることができます。

# 実践的なコード
```html
<button id="btn">say hello</div>
```

```js
$("#btn").on("click", () => {
  console.log("hello");
});
```

```js
()=>{
  // ...
};
```

ここでonメソッドの第2引数に渡されているのは無名関数です。

## 2回目にクリックするとsubmitできないボタン
ショッピングカートの決済ボタンで、2重クリックすると2回決済されてしまう例があります。  
クロージャーを使ってこれを防ぎます。
```html
<form name="form" id="form">
    <input type="submit" value="注文する" />
</form>
```
```js
let isClicked = false;

$("#form").on("submit", e => {
  if (isClicked) {
    console.log("既にクリック済みです");
    return false;
  }
  isClicked = true;
});
```
1回めにクリックした時にクロージャーによって`isClicked = true;`が保存されるため、  
2回めからは必ず`if (isClicked)`を通るようになります。