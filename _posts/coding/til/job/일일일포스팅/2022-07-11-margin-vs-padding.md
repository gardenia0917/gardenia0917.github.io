---
title: "[TIL]margin VS padding"
excerpt: "css 할 때 헷갈리는 마진과 패딩"

categories:
  - TIL
tags:
  - [TIL]
published: true
toc: true
toc_sticky: true

date: 2022-07-11
last_modified_at: 2022-07-11
---

# margin & padding

![margin과 padding](/assets/image/marginpadding.png)

- 상대적인 `%`의 기준점은 width 값

## margin

- Border 바깥을 차지함
- 주변 요소와 거리를 두기 위한 영역

## padding

- content와 Border 사이의 여백

||양수(+)|음수(-)|auto|collapse|
|margin|⭕️|⭕️|⭕️|⭕️|
|padding|⭕️|❌|❌|❌|

- auto: 브라우저에 의해 계산 되는 값(auto 선언이 가능한지)
- collapse: 병합
  - margin은 margin collapse(마진 병합)이라고 해서 둘 이상 요소의 margin 값이 둘 중 더 큰 margin 값으로 합쳐지는 현상이 있음.
  - 수직 방향으로만 이루어짐(좌우 ❌)
  - margin이 맞닿은 상황에서 발생함(중간에 다른게 있으면 안될 수 있음)
  - 플로팅 요소와 절대 위치 지정한 요소는 ❌

# 참조

|[차근차근 블로그](https://enai.tistory.com/49)|
