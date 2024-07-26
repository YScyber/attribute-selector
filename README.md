# 概要

## 属性セレクター

### 存在や値のセレクター

- `ul li[class]` ー class属性を持つセレクターの全てに一致
- `ul li[class="a"]` ー class属性の値が**a**のセレクターの全てに一致
    - ただし、**a b**といったスペースで区切られた別のclass属性の値を持つセレクターの場合は該当しない
- `ul li[class~="a"]` ー class属性の値が**a**、または、**a b**といったスペースで区切られた別のclass属性の値を持つセレクターのどちらにも一致

### 部分文字列一致セレクター

- `ul li[class^="a"]` ー class属性の値が**a**から始まるセレクターに一致
- `ul li[class$="a"]` ー class属性の値が**a**で終わるセレクターに一致
- `ul li[class*="a"]` ー class属性の値（文字列）のどこかに**a**が含まれているセレクターに一致

### 大文字と小文字を区別

- `ul li[class^="a" i]` ー class属性の値が大文字小文字問わずに**A**、または**a**から始まる値のセレクターに一致

このリポジトリでは、JavaScriptでDOM操作を行っています。画面最下部にある【**存在や値のセレクター**】、【**部分文字列一致セレクター**】、【**大文字と小文字を区別**】と書かれたボタンをクリックすると、コードが自動で入力され、最上部にあるsection要素にその結果が出力されます。また、自分でコードを入力する際には、すでにコードが入力されている1つ目のtextarea要素にはHTMLを、何も入力されていない2つ目のtextarea要素にはCSSを直接入力こともでき、元に戻す際には【**リセット**】ボタンをクリックすると最初の画面に戻ります。


[完成ページへ](https://yscyber.github.io/attribute-selector/ "https://yscyber.github.io/attribute-selector/")
