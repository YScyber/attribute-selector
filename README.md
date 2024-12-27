# 属性セレクター

このリポジトリはドロップダウンメニュー（`select`要素）を使用して、白色の二重線の下にある白色のエリア（`iframe`要素内）に各ディレクトリ内にある`index.html`ファイルの内容が表示されるようにしています。

［**選択してください**］を押下し、どれかを選択して表示させてみてください。

表示された内容は上から順に以下の通りです。

- プレビュー画面（`section`要素）
    - textarea要素内に記述されたコードの結果が表示されてます。
- HTMLコード（`textarea`要素）
    - HTMLコードが記述されています。
- CSSコード（`textarea`要素）
    - CSSコードが記述されています。
- リセットボタン（`input`要素）
    - textarea要素内に記述されているコードの変更を初期値（読み込まれた最初の状態）に戻すためのボタンです。
<br><br>

## 共通設定

それぞれのファイルに共通して記述されているコードがあります。

### HTML

どのように変更されるのかを表示させるためのHTMLコードです。

```html
<h2>...</h2> <!-- "..."は"デフォルト"、"存在や値のセレクター"、"部分文字列一致セレクター"、"大文字と小文字を区別"と記述されています -->

<p>Paragraph01</p>
<p>Paragraph02</p>
<p>Paragraph03</p>
<p>Paragraph04</p>
```

### CSS

アットルールを使用して画面の幅が`699px`以下の場合、textarea要素内に記述されているコードのフォントサイズを`120%`から`100%`へと変更しています。 

```css
@media screen and (max-width: 699px) {
    textarea {
        font-size: 100%;
    }
}
```

このCSSの共通設定は、各ディレクトリ内にある`style.css`ファイルに記述しています。
<br><br>

## 存在や値のセレクター

### HTML

**存在や値のセレクター**を表示させるためのHTMLコードです。

```html
<h2>存在や値のセレクター</h2>

<p>Paragraph01</p>
<p class="a">Paragraph02</p>
<p class="a b">Paragraph03</p>
<p class="ab">Paragraph04</p>
```

### CSS

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

[ソースコードの参照ページへ](exis-or-value/index.html "exis-or-value/index.html")
<br><br>

## 部分文字列一致セレクター

### HTML

**部分文字列一致セレクター**を表示させるためのHTMLコードです。

```html
<h2>部分文字列一致セレクター</h2>

<p class="a">Paragraph01</p>
<p class="ab">Paragraph02</p>
<p class="bca">Paragraph03</p>
<p class="bcabc">Paragraph04</p>
```

### CSS

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

[ソースコードの参照ページへ](substr-match/index.html "substr-match/index.html")
<br><br>

## 大文字と小文字を区別

### HTML

**大文字と小文字を区別**を表示させるためのHTMLコードです。

```html
<h2>大文字と小文字を区別</h2>

<p class="a">Paragraph01</p>
<p class="A">Paragraph02</p>
<p class="Ab">Paragraph03</p>
<p class="bA">Paragraph04</p>
```

### CSS

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

[ソースコードの参照ページへ](case-sensitive/index.html "case-sensitive/index.html")
<br><br>

※ 日本時間 2024/12/27 に変更を加えました。
<br><br>

[完成ページへ](https://yscyber.github.io/attribute-selector/ "https://yscyber.github.io/attribute-selector/")
