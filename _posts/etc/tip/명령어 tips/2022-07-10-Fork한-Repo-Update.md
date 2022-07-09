---
title: "[Command]Fork 한 Repo Update💻"
excerpt: "Fork Repo 관리시 필요할 듯"

categories:
  - Command
tags:
  - [Tips, Command]

toc: true
toc_sticky: true

date: 2022-07-10
last_modified_at: 2022-07-10
---

# Fork 한 Repo Update💻

1. 내 로컬에 Fork Clone

- `git clone 포크repo주소`

2. Clone 한 프로젝트 디렉토리 이동 -> 리모트 저장소 확인

- `git remote -v`

3. 리모트 저장소에 upstream 추가

- `git remote add 등록이름 원본repo주소 `

4. 추가 확인해보기 - 2번 과 동일
5. 원본 저장소 fetch - 가져오기

- `it fetch 등록이름`

6. 원본 저장소 merge - 합치기

- `git merge 등록이름/브랜치이름`

7. 포크저장소로 push

- `git push`

[참고](https://velog.io/@k904808/Fork-%ED%95%9C-Repository-%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8-%ED%95%98%EA%B8%B0)
