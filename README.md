## 属性セレクター

このリポジトリではJavaScriptでDOM操作を行っています。１つ目のtextarea要素にはHTMLのコードが、２つ目のtextarea要素にはCSSのコードがすでに入力されており、最上部にあるプレビュー画面（section要素）にその結果が出力されています。コードは自分でも書き換えることができ、元に戻す際には一番下にある【**リセット**】ボタンをクリックすると最初の画面に戻ります。

iframe要素の内容は上から順に以下の通りとなります。
<br>

### 共通設定

#### HTML

どのように変更されるのかを表示させるためのHTMLのコードは以下の通りです。

```html
<h2>...</h2> <!-- "..."は"デフォルト"、"存在や値のセレクター"、"部分文字列一致セレクター"、"大文字と小文字を区別"と記述されています -->

<p>Paragraph01</p>
<p>Paragraph02</p>
<p>Paragraph03</p>
<p>Paragraph04</p>
```

#### CSS

アットルールを使用して画面の幅が`699px`以下の場合、textarea要素内に記述されているコードのフォントサイズを`120%`から`100%`へと変更しています。 

```css
@media screen and (max-width: 699px) {
    textarea {
        font-size: 100%;
    }
}
```

このCSSの共通設定は、各ディレクトリ内にある`style.css`ファイルに記述しています。
<br>

### 存在や値のセレクター

#### HTML

**存在や値のセレクター**を表示させるためのHTMLのコードは次の通りです。

```html
<h2>存在や値のセレクター</h2>

<p>Paragraph01</p>
<p class="a">Paragraph02</p>
<p class="a b">Paragraph03</p>
<p class="ab">Paragraph04</p>
```

#### CSS

`class`属性を持つセレクターの全てに`font-size: 150%;`を指定してテキストを大きくしています。

```css
p[class] {
    font-size: 150%;
}
```

`class`属性の値が`a`に一致した場合に、背景色を`#9e9`（明るい緑色）にしていますが、`a b`といったスペースで区切られた場合は該当しません。

```css
p[class="a"] {
    background-color: #9e9;
}
```
`class`属性の値が`a`または`a b`といった値に一致した場合にテキストの色を`#fa0`（オレンジ色）にしていますが、`ab`のようにスペースで区切られていない場合には該当しません。

```css
p[class~="a"] {
    color: #fa0;
}
```
<br>

### 部分文字列一致セレクター

#### HTML

**部分文字列一致セレクター**を表示させるためのHTMLのコードは次の通りです。

```html
<h2>部分文字列一致セレクター</h2>

<p class="a">Paragraph01</p>
<p class="ab">Paragraph02</p>
<p class="bca">Paragraph03</p>
<p class="bcabc">Paragraph04</p>
```

#### CSS

`class`属性の値が`a`から始まる値に一致した場合に`font-size: 150%;`を指定してテキストを大きくしています。

```css
p[class^="a"] {
    font-size: 150%;
}
```

`class`属性の値が`a`で終わる値に一致した場合に背景色を`#9e9`（明るい緑色）にしています。

```css
p[class$="a"] {
    background-color: #9e9;
}
```

`class`属性の値のどこかに`a`が含まれている場合にテキストの色を`#fa0`（オレンジ色）にしています。

```css
p[class*="a"] {
    color: #fa0;
}
```
<br>

### 大文字と小文字を区別

#### HTML

**大文字と小文字を区別**を表示させるためのHTMLのコードは次の通りです。

```html
<h2>大文字と小文字を区別</h2>

<p class="a">Paragraph01</p>
<p class="A">Paragraph02</p>
<p class="Ab">Paragraph03</p>
<p class="bA">Paragraph04</p>
```

#### CSS

`class`属性を持つセレクターの全てに`font-size: 150%;`を指定してテキストを大きくしています。

```css
p[class] {
    font-size: 150%;
}
```

`class`属性の値が`a`から始まる値に一致した場合に背景色を`#9e9`（明るい緑色）にしています。

```css
p[class^="a"] {
    background-color: #9e9;
}
```

`class`属性の値が大文字小文字問わずに`A`または`a`から始まる値に一致した場合にテキストの色を`#fa0`（オレンジ色）にしています。

```css
p[class^="a" i] {
    color: #fa0;
}
```
<br>

※ 日本時間 2024/12/05 に変更しました。
<br><br>

[完成ページへ](https://yscyber.github.io/attribute-selector/ "https://yscyber.github.io/attribute-selector/")
