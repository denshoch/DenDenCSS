---
title: 横書きデフォルト
name: horizontal
category: horizontal
---

でんでんコンバーターの横書きスタイルシートです。

## 見出し

```html_example
<h1>見出しランク1</h1>
<h2>見出しランク2</h2>
<h3>見出しランク3</h3>
<h4>見出しランク4</h4>
<h5>見出しランク5</h5>
<h6>見出しランク6</h6>
```

## 段落

```html_example
<p>これは段落です。</p>
<p>これはもう一つの段落です</p>
```

### ルビ

```html_example
<p>これはルビを含む<ruby>段落<rt>だんらく</rt></ruby>です。</p>
<p>これはルビを含もう一つの<ruby>段落<rt>だんらく</rt></ruby>です</p>
```

## 引用

```html_example
<blockquote>
  <p>これは引用された段落です。</p>
  <p>これは引用されたもう一つの段落です。</p>
</blockquote>
```

## 箇条書き

### 順不同の箇条書き

```html_example
<ul>
  <li>箇条書きの項目</li>
  <li>箇条書きの項目</li>
  <li>箇条書きの項目</li>
</ul>
```

順不同の箇条書きの入れ子です。

```html_example
<ul>
  <li>箇条書きの項目
    <ul>
      <li>箇条書きの項目
        <ul>
          <li>箇条書きの項目</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
```

### 順序のある箇条書き

```html_example
<ol>
  <li>箇条書きの項目</li>
  <li>箇条書きの項目</li>
  <li>箇条書きの項目</li>
</ol>
```

順序のある箇条書きの入れ子です。

```html_example
<ol>
  <li>箇条書きの項目
    <ol>
      <li>箇条書きの項目
        <ol>
          <li>箇条書きの項目</li>
        </ol>
      </li>
    </ol>
  </li>
</ol>
```

## 文字装飾

### 重要なテキスト `strong`

```html_example
<p>これは<strong>重要なテキスト</strong>です。</p>
```

### 強調されたテキスト `em`

```html_example
<p>これは<em>強調されたテキスト</em>です。</p>
```

### 小書きのテキスト `small`

```html_example
<p>これは<small>小書きのテキスト</small>です。</p>
```

### ニュアンスを持つテキスト `i`

```html_example
<p>これは<i>ニュアンスを持つテキスト</i>です。</p>
```

### 傍線付きのテキスト `u`

```html_example
<p>これは<u>傍線付きのテキスト</u>です。</p>
```

## ヘルパークラス

### 行の配置

```html_example
<p class="text-left">これは左寄せです。</p>
<p class="text-right">これは右寄せです。</p>
<p class="text-center">これは中央寄せです。</p>
<p class="text-justify">これは均等揃えです。</p>
<p class="text-pre-wrap ">これはpre-wrapです。</p>
```

### 隠しテキスト `.text-hide`

```html_example
<p class="text-hide">この段落は目に見えません。</p>
```

### 縦中横 `.tcy`

横書きではレイアウトに影響はありません。

```html_example
<p>昭和<span class="tcy">53</span>年</p>
```

### 文字の向き `.upright`

横書きではレイアウトに影響はありません。

```html_example
<p>この文字<span class="upright">☆</span>は縦書きで正立します。</p>
```

### フォントの種類

丸ゴシック体は環境に使えるフォントがない場合にはゴシック体になります。

```html_example
<p class="fnt-serif">これは明朝体です。</p>
<p class="fnt-sans">これはゴシック体です。</p>
<p class="fnt-maru">これは丸ゴシック体です。</p>
<p class="fnt-mono">これは monospace です。</p>
```
