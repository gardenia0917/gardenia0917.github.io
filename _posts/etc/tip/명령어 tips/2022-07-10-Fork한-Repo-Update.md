---
title: "[Command]Fork ํ Repo Update๐ป"
excerpt: "Fork Repo ๊ด๋ฆฌ์ ํ์ํ  ๋ฏ"

categories:
  - Command
tags:
  - [Tips, Command]
published: true
toc: true
toc_sticky: true

date: 2022-07-10
last_modified_at: 2022-07-10
---

# Fork ํ Repo Update๐ป

1. ๋ด ๋ก์ปฌ์ Fork Clone

- `git clone ํฌํฌrepo์ฃผ์`

2. Clone ํ ํ๋ก์ ํธ ๋๋ ํ ๋ฆฌ ์ด๋ -> ๋ฆฌ๋ชจํธ ์ ์ฅ์ ํ์ธ

- `git remote -v`

3. ๋ฆฌ๋ชจํธ ์ ์ฅ์์ upstream ์ถ๊ฐ

- `git remote add ๋ฑ๋ก์ด๋ฆ ์๋ณธrepo์ฃผ์ `

4. ์ถ๊ฐ ํ์ธํด๋ณด๊ธฐ - 2๋ฒ ๊ณผ ๋์ผ
5. ์๋ณธ ์ ์ฅ์ fetch - ๊ฐ์ ธ์ค๊ธฐ

- `git fetch ๋ฑ๋ก์ด๋ฆ`

6. ์๋ณธ ์ ์ฅ์ merge - ํฉ์น๊ธฐ

- `git merge ๋ฑ๋ก์ด๋ฆ/๋ธ๋์น์ด๋ฆ`

7. ํฌํฌ์ ์ฅ์๋ก push

- `git push`

[์ฐธ๊ณ ](https://velog.io/@k904808/Fork-%ED%95%9C-Repository-%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8-%ED%95%98%EA%B8%B0)
