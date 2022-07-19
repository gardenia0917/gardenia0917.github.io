---
title: "[Leetcode]9. Palindrome Number"
excerpt: "9. Palindrome Number 풀이 [leetcode]"

categories:
  - CodingTest
tags:
  - [CodingTest, Leetcode]
published: true
toc: true
toc_sticky: true

date: 2022-07-20
last_modified_at: 2022-07-20
---

# 9. Palindrome Number

> Given an integer x, return true if x is palindrome integer.

> An integer is a palindrome when it reads the same backward as forward.

> For example, 121 is a palindrome while 123 is not.

> ^palindrome : 회문, 앞에서 읽어도 뒤로 읽어도 같은 단어나 구 (로꾸꺼!)

## 주석

```
var isPalindrome = function(x) {
    // 뒤집어도 같을 때 true
    // 뒤집어서 나열해주는 함수가 뭐가 있지?
};
```

### 뒤집어서 나열하는 방법 ❓

- reverse() 를 이용하여 역순으로 변경 가능

```
const str = '역삼역, 우영우';

const reversed = str.split('').reverse().join('');
console.log(reversed);
```

### 에러 발생함!!

```
let y = x.split('').reverse().join('');
```

이 부분에서 `x.split('').reverse().join('');` 이 함수가 아니라는 에러 메세지가 발생해서
reverse() 함수를 더 찾아보니 문자열을 뒤집는(?) 함수 인 것 같다.
그래서 먼저 변수를 선언해서 `toString()`으로 문자화를 시켜주었더니 통과했다!

## 최종 답암

```
var isPalindrome = function(x) {
    // 뒤집어도 같을 때 true
    // 뒤집어서 나열해주는 함수가 뭐가 있지?
    let xx = x.toString();
    let y = xx.split('').reverse().join('');

    if(xx === y){
        return true;
    } return false;
};
```
