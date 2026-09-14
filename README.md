# 属性セレクター

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

`class`属性を持つセレクターの全てにテキストの大きさを`150%`に指定しています。

```css
p[class] {
    font-size: 150%;
}
```

`class`属性の値が`a`に一致した場合に背景色を`紫色`にしていますが、`a b`といったスペースで区切られた場合は該当しません。

```css
p[class="a"] {
    background-color: #f0f;
}
```

`class`属性の値が`a`または`a b`といった値に一致した場合にテキストの色を`水色`にしていますが、`ab`のようにスペースで区切られていない場合には該当しません。

```css
p[class~="a"] {
    color: #0ff;
}
```
<br>

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

`class`属性の値が`a`から始まる値に一致した場合にテキストの大きさを`150%;`に指定して大きくしています。

```css
p[class^="a"] {
    font-size: 150%;
}
```

`class`属性の値が`a`で終わる値に一致した場合に背景色を`紫色`にしています。

```css
p[class$="a"] {
    background-color: #f0f;
}
```

`class`属性の値のどこかに`a`が含まれている場合にテキストの色を`水色`にしています。

```css
p[class*="a"] {
    color: #0ff;
}
```
<br>

## 大文字と小文字を区別

### HTML

**大文字と小文字を区別**を表示させるためのHTMLのコードは次の通りです。

```html
<h2>大文字と小文字を区別</h2>

<p class="a">Paragraph01</p>
<p class="A">Paragraph02</p>
<p class="Ab">Paragraph03</p>
<p class="bA">Paragraph04</p>
```

### CSS

`class`属性を持つセレクターの全てにテキストの大きさを`150%;`に指定しています。

```css
p[class] {
    font-size: 150%;
}
```

`class`属性の値が`a`から始まる値に一致した場合に背景色を`紫色`にしています。

```css
p[class^="a"] {
    background-color: #f0f;
}
```

`class`属性の値が大文字小文字問わずに`A`または`a`から始まる値に一致した場合にテキストの色を`水色`にしています。

```css
p[class^="a" i] {
    color: #0ff;
}
```
<br>

[完成ページへ](https://yscyber.github.io/attribute-selector/ "https://yscyber.github.io/attribute-selector/")
