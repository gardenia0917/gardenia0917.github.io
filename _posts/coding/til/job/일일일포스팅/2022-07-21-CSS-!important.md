---
title: "[TIL] CSS !important란"
excerpt: "CSS !important에 대해 알아보자❓"

categories:
  - TIL
tags:
  - [TIL, Css]
published: true
toc: true
toc_sticky: true

date: 2022-07-21
last_modified_at: 2022-07-21
---

# CSS의 기초 !important

- CSS는 같은 속성을 여러번 정의 했을 때, 마지막에 설정한 값이 적용됨
- 이를 방지하려면 속성값 뒤에 `!important`를 붙여줘야 한다.

# 예시

- w3school 참조함

## 1

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      #myid {
        background-color: blue;
      }

      .myclass {
        background-color: gray;
      }

      p {
        background-color: red !important;
      }
    </style>
  </head>
  <body>
    <p>This is some text in a paragraph.</p>

    <p class="myclass">This is some text in a paragraph.</p>

    <p id="myid">This is some text in a paragraph.</p>
  </body>
</html>
```

![](/assets/image/css/!important1.png)

## 2

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      #myid {
        background-color: blue important;
      }

      .myclass {
        background-color: gray !important;
      }

      p {
        background-color: red !important;
      }
    </style>
  </head>
  <body>
    <p>This is some text in a paragraph.</p>

    <p class="myclass">This is some text in a paragraph.</p>

    <p id="myid">This is some text in a paragraph.</p>
  </body>
</html>
```

![](/assets/image/css/!important2.png)

## 3

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      #myid {
        background-color: blue !important;
      }

      .myclass {
        background-color: gray !important;
      }

      p {
        background-color: red !important;
      }
    </style>
  </head>
  <body>
    <p>This is some text in a paragraph.</p>

    <p class="myclass">This is some text in a paragraph.</p>

    <p id="myid">This is some text in a paragraph.</p>
  </body>
</html>
```

![](/assets/image/css/!important3.png)

# 참조

[CSS / 기초 / !important](https://www.codingfactory.net/10372)<br>
[w3schools CSS !important](https://www.w3schools.com/css/css_important.asp)
