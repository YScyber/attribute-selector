## 属性セレクター

このリポジトリではJavaScriptでDOM操作を行っています。１つ目のtextarea要素にはHTMLのコードが、２つ目のtextarea要素にはCSSのコードがすでに入力されており、最上部にあるプレビュー画面（section要素）にその結果が出力されています。コードは自分でも書き換えることができ、元に戻す際には一番下にある【**リセット**】ボタンをクリックすると最初の画面に戻ります。

iframe要素の内容は上から順に以下の通りとなります。
<br>

### 共通設定

#### HTML

どのように変更されるのかを表示させるためのHTMLのコードは以下の通りです。

```html
<h2>...</h2> <!-- "..."は"存在や値のセレクター"、"部分文字列一致セレクター"、"大文字と小文字を区別"と記述されています -->

<ul>
    <li>List01</li>
    <li>List02</li>
    <li>List03</li>
    <li>List04</li>
</ul>
```

#### CSS

ul要素に`list-style-type`プロパティの値を`circle`から`none`と変更して装飾を消去させています。

```css
section.preview ul {
    list-style-type: none;
}
```

ul要素内にあるli要素内の余白を`0.3em`空けています。

```css
section.preview ul li {
    padding: 0.3em;
}
```

これらのCSSの共通設定は、各ディレクトリ内にある`style.css`ファイルに記述しています。
<br>

### 存在や値のセレクター

#### HTML

**存在や値のセレクター**を表示させるためのHTMLのコードは次の通りです。

```html
<h2>存在や値のセレクター</h2>

<ul>
    <li>List01</li>
    <li class="a">List02</li>
    <li class="a b">List03</li>
    <li class="ab">List04</li>
</ul>
```

#### CSS

`class`属性を持つセレクターの全てに`font-size: 200%;`を指定してテキストを大きくしています。

```css
section.preview ul li[class] {
    font-size: 200%;
}
```

`class`属性の値が`a`に一致した場合に、背景色を`#9e9`（明るい緑色）にしていますが、`a b`といったスペースで区切られた場合は該当しません。

```css
section.preview ul li[class="a"] {
    background-color: #9e9;
}
```
`class`属性の値が`a`または`a b`といった値に一致した場合にテキストの色を`#fa0`（オレンジ色）にしていますが、`ab`のようにスペースで区切られていない場合には該当しません。

```css
section.preview ul li[class~="a"] {
    color: #fa0;
}
```
<br>

### 部分文字列一致セレクター

#### HTML

**部分文字列一致セレクター**を表示させるためのHTMLのコードは次の通りです。

```html
<h2>部分文字列一致セレクター</h2>

<ul>
    <li class="a">List01</li>
    <li class="ab">List02</li>
    <li class="bca">List03</li>
    <li class="bcabc">List04</li>
</ul>
```

#### CSS

`class`属性の値が`a`から始まる値に一致した場合に`font-size: 200%;`を指定してテキストを大きくしています。

```css
section.preview ul li[class^="a"] {
    font-size: 200%;
}
```

`class`属性の値が`a`で終わる値に一致した場合に背景色を`#9e9`（明るい緑色）にしています。

```css
section.preview ul li[class$="a"] {
    background-color: #9e9;
}
```

`class`属性の値のどこかに`a`が含まれている場合にテキストの色を`#fa0`（オレンジ色）にしています。

```css
section.preview ul li[class*="a"] {
    color: #fa0;
}
```
<br>

### 大文字と小文字を区別

#### HTML

**大文字と小文字を区別**を表示させるためのHTMLのコードは次の通りです。

```html
<h2>大文字と小文字を区別</h2>

<ul>
    <li class="a">List01</li>
    <li class="A">List02</li>
    <li class="Ab">List03</li>
    <li class="bA">List04</li>
</ul>
```

#### CSS

`class`属性を持つセレクターの全てに`font-size: 200%;`を指定してテキストを大きくしています。

```css
section.preview ul li[class] {
    font-size: 200%;
}
```

`class`属性の値が`a`から始まる値に一致した場合に背景色を`#9e9`（明るい緑色）にしています。

```css
section.preview ul li[class^="a"] {
    font-size: 200%;
}
```

`class`属性の値が大文字小文字問わずに`A`または`a`から始まる値に一致した場合にテキストの色を`#fa0`（オレンジ色）にしています。

```css
section.preview ul li[class^="a" i] {
    color: #fa0;
}
```
<br>

※ 日本時間 2024/11/06 にリファクタリングしました。
<br><br>

[完成ページへ](https://yscyber.github.io/attribute-selector/ "https://yscyber.github.io/attribute-selector/")
