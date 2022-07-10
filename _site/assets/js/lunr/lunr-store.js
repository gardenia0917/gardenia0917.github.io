var store = [{
        "title": "[CodeStates]Coplit-1-변수와 자료형",
        "excerpt":"01_declaration let 키워드로 course 변수 선언하기 let course; 02_assignment 변수(course)에 값(code states) 할당하기 let course = 'code states'; 03_expression 변수 num1에 숫자 5를 할당, 변수 num2에 숫자 7을 할당, 변수 result에 num1과 num2의 곱을 할당하기 let num1, num2, result; num1 = 5; num2 = 7; result = num1*num2; 04_getRunCatDistance 속력(speed),...","categories": ["Coplit"],
        "tags": ["CodeStates","Coplit","JS"],
        "url": "/coplit/1-%EB%B3%80%EC%88%98%EC%99%80-%EC%9E%90%EB%A3%8C%ED%98%95/",
        "teaser": null
      },{
        "title": "[CodeStates]Coplit-2-조건문",
        "excerpt":"01_isOldEnoughToDrink 나이를 입력받아 술을 마실 수 있는지(18세 이상) 여부를 리턴 function isOldEnoughToDrink(age) { if(age&gt;=18){ return true; } return false; } 02_isGreaterThan30 온도를 입력받아 해당 온도가 30이 넘는지 확인 후 알맞은 값을 리턴 온도가 30 미만일 때 : ‘여름이 매우 덥네요’ 온도가 30 이상일 때 : ‘에어컨을 켜야겠다!’ function isGreaterThan30(temp) {...","categories": ["Coplit"],
        "tags": ["CodeStates","Coplit","JS"],
        "url": "/coplit/2-%EC%A1%B0%EA%B1%B4%EB%AC%B8/",
        "teaser": null
      },{
        "title": "[CodeStates]Coplit-3-문자열",
        "excerpt":"01_getFullName 이름과 성을 입력받아 띄어쓰기 하나를 사이에 둔 단일 문자열을 리턴 function getFullName(firstName, lastName) { return `${firstName} ${lastName}` } 02_checkAge 이름과 나이를 입력받아 나이별로 다른 메시지를 리턴 이름이 Adrian이고, 나이가 21살 이상이면, Welcome, Adrian! 을 리턴 이름이 John이고, 만일 21살보다 적으면, Go home, John!을 리턴 function checkAge(name, age) { if(age...","categories": ["Coplit"],
        "tags": ["CodeStates","Coplit","JS"],
        "url": "/coplit/3-%EB%AC%B8%EC%9E%90%EC%97%B4/",
        "teaser": null
      },{
        "title": "[CodeStates]Coplit-4-반복문",
        "excerpt":"01_findTheBug 문자열을 입력받아 버그(‘#’)의 인덱스를 리턴 ’#’ 기호가 없는 경우 undefined를 리턴 function findTheBug(word) { for(let i =0 ; word.length&gt;i; i++){ if(word[i]==='#'){ return i; } } return undefined; } 02_sumTo 수를 입력받아 0부터 해당 수까지의 합을 리턴 function sumTo(num) { let result =0; for(let i =0; num&gt;=i; i++){ result =...","categories": ["Coplit"],
        "tags": ["CodeStates","Coplit","JS"],
        "url": "/coplit/4-%EB%B0%98%EB%B3%B5%EB%AC%B8/",
        "teaser": null
      },{
        "title": "[CodeStates]Coplit-5-배열",
        "excerpt":"01_getType 임의의 값을 입력받아 타입을 리턴 function getType(anything) { if(Array.isArray(anything)){ return 'array'; }else if(anything === null){ return 'null'; }else { return typeof anything; } } 02_getFirstElement 배열을 입력받아 배열의 첫번째 요소를 리턴 function getFirstElement(arr) { if(arr.length ===0){ return undefined; } return arr[0]; } 03_getLastElement 배열를 입력받아 배열의 마지막 요소를 리턴...","categories": ["Coplit"],
        "tags": ["CodeStates","Coplit","JS"],
        "url": "/coplit/5-%EB%B0%B0%EC%97%B4/",
        "teaser": null
      },{
        "title": "[CodeStates]Coplit-6-객체",
        "excerpt":"01_getProperty 객체와 키를 입력받아 키에 해당하는 값을 리턴 function getProperty(obj, property) { return obj[property] } 02_addProperty 객체와 키를 입력받아 키에 해당하는 값을 true로 설정 function addProperty(obj, property) { obj[property] = true; } 03_addPropertyAndValue 객체와 키, 값을 입력받아 키에 값을 할당 function addPropertyAndValue(obj, property, value) { obj[property] = value; } 04_addObjectProperty...","categories": ["Coplit"],
        "tags": ["CodeStates","Coplit","JS"],
        "url": "/coplit/6-%EA%B0%9D%EC%B2%B4/",
        "teaser": null
      },{
        "title": "[Inflearn]비전공자를 위한 개발자 취업 올인원 가이드",
        "excerpt":"81강/1342분 준비하기 올바른 개발 학습법 알기 문과생 사고 방식 버리기 사고방식의 배경 🤓 문과생 엔지니어 1 논술에 가까운 교육 문제의 답이 정해진 경우가 많음 2 정해진 답❌ 답이 없더라도 단계별 과정 중요 3 문제의 해결책이 두루뭉실 원인과 해결책 명확 문제 해결 방식 🤓 문과생 엔지니어 1 문제를 하나의 큰 덩어리로...","categories": ["Job"],
        "tags": ["Inflearn","Job"],
        "url": "/job/%EB%B9%84%EC%A0%84%EA%B3%B5%EC%9E%90%EB%A5%BC-%EC%9C%84%ED%95%9C-%EA%B0%9C%EB%B0%9C%EC%9E%90-%EC%B7%A8%EC%97%85-%EC%98%AC%EC%9D%B8%EC%9B%90-%EA%B0%80%EC%9D%B4%EB%93%9C/",
        "teaser": null
      },{
        "title": "[Error]CSS 파일 경로를 못 찾을 때",
        "excerpt":"because its MIME type (‘text/html’) is not a supported stylesheet MIME type, and strict MIME checking is enabled. css 파일 경로 문제 보통의 경우 어느 파일이 경로를 못 찾는지 확인 후 수정 참고 Coding JOAH님 블로그 나의 경우 style.css 파일을 찾다가 dev &gt; dist &gt; contents &gt; common 폴더 안에...","categories": ["Error"],
        "tags": ["Error","TS"],
        "url": "/error/css%ED%8C%8C%EC%9D%BC-%EA%B2%BD%EB%A1%9C%EB%A5%BC-%EB%AA%BB-%EC%B0%BE%EC%9D%84-%EB%95%8C/",
        "teaser": null
      },{
        "title": "[Job]면접질문",
        "excerpt":"면접 질문 정리                  호이스팅에 대해 말해주세요.                             링크                  링크                 실제로 받은 프론트엔드 개발자 면접 질문 모음                 이직하려는 친구에게 보내는 프런트엔드 개발 면접 질문-캡틴판교                 프론트엔드 개발자 기술면접 인터뷰 질문 모음(업데이트)                 프론트엔드 면접 질문 리스트 - JS                 프론트엔드 면접 준비 하시는 분…?          ","categories": ["Job"],
        "tags": ["Job"],
        "url": "/job/%EB%A9%B4%EC%A0%91%EC%A7%88%EB%AC%B8/",
        "teaser": null
      },{
        "title": "[Diary]2주차",
        "excerpt":"기술 블로그로 만들려고 하지만 일단 블로그이니 하루 회고 형식으로 느낀점을 간단하게 남기려고 한다. 8일 어제 분명히 작동이 되었는데 오늘 다시 실행시키니 에러가 났다. 콘솔창에 because its MIME type (‘text/html’) is not a supported stylesheet MIME type, and strict MIME checking is enabled 로 해서 갑자기 css 파일을 찾지 못했다고 떴다.....","categories": ["Diary"],
        "tags": ["Diary"],
        "url": "/diary/2%EC%A3%BC%EC%B0%A8/",
        "teaser": null
      },{
        "title": "[Etc]쓰고 싶은 포스팅",
        "excerpt":"그냥 쓰고 싶은 글 들 깊은 복사 vs 얇은 복사 시간복잡도 OOP GUI vs CUI SSR vs CSR class 면접 준비로 정리하기 브라우저 렌더링 원리(유저에게 보이는 순서 정리) margin vs padding position 사용 방법 GET vs POST This 용법 브라우저 저장소 차이점 Localstorage, SessionStorage,Cookie Restful API 설명 GET, PUT, POST,...","categories": ["ETC"],
        "tags": ["ETC"],
        "url": "/etc/%EC%93%B0%EA%B3%A0-%EC%8B%B6%EC%9D%80-%EA%B8%80/",
        "teaser": null
      },{
        "title": "[Tips]짧은 Tips -1-",
        "excerpt":"Jekyll 블로그 서버 키기(변경된거 바로 확인 가능)   bundle exec jekyll serve      Server address: http://127.0.0.1:4000   ","categories": ["Tips"],
        "tags": ["Tips"],
        "url": "/tips/%EC%A7%A7%EC%9D%80-tips-1/",
        "teaser": null
      },{
        "title": "[Project]makeyourcards",
        "excerpt":"프로젝트 시작 자다가 문득 토이프로젝트라고 어려울 꺼 할 일 있어? 최대ㅐㅐㅐㅐ한 간단하게 한 번 해보자!! 라고 생각하다가 그냥 간단한 카드 같은거 만들어서 카톡으로 보낼 수 있고 카드 사진 저장 할 수 있는거 만들어 볼까 생각함 가장 간단한 기능 열몇개 기본 사진 있고 내가 만들고 싶은 카드 추가 가능 기능 있음...","categories": ["Project"],
        "tags": ["Project","TypeScript"],
        "url": "/project/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-makeyourcards/",
        "teaser": null
      },{
        "title": "[Next.JS]NEXT.JS 시작하기",
        "excerpt":"               노마드코더 강의                 기억보다 기록을-next          ","categories": ["Next.JS"],
        "tags": ["Next.JS","Nomadcoders"],
        "url": "/next.js/nextjs-%EB%85%B8%EB%A7%88%EB%93%9C%EC%BD%94%EB%8D%94/",
        "teaser": null
      },{
        "title": "[TIL]호이스팅",
        "excerpt":"🌱 WHAT IS HOISTING❓ 코드가 실행하기 전 변수(함수)선언이 해당 스코프의 최상단으로 끌어 올려진 것 같은 현상 JS는 함수가 실행되기전 해당 함수를 한 번 흝는다. 그 때 함수 안에 존재하는 변수/함수를 기억하고 있다가 사용한다. 실제로 코드가 올려지는 것은 아니고 JS 내부적으로 올려서 처리하는 것(메모리 변화❌) 🌱 호이스팅이 되는 것 var변수 선언과...","categories": ["TIL"],
        "tags": ["TIL","Hoisting","JavaScript"],
        "url": "/til/%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85/",
        "teaser": null
      },{
        "title": "[Tips]JS 함수 정리",
        "excerpt":"알파벳 순 정리  ","categories": ["Tips"],
        "tags": ["Tips","JavaScript","Function"],
        "url": "/tips/JS%ED%95%A8%EC%88%98-%EC%A0%95%EB%A6%AC/",
        "teaser": null
      },{
        "title": "[Error]Git pull 에러",
        "excerpt":"git pull 다른 repogitory 또는 로컬 브랜치를 가져와서 합치는 것 git fetch와 git merge FETCH_HEAD의 약자이다. What is FETCH_HEAD? 원격 저장소로부터 가져온 브랜치의 HEAD를 의미 원격 저장소로 부터 가져온 모든 브랜치의 HEAD를 .git/FETCH_HEAD에 기록함 ERROR git pull 하는 법을 구성하지 않았을 때 경고 문구가 나옴 warning: Pulling without specifying how...","categories": ["Error"],
        "tags": ["Error","Git"],
        "url": "/error/git-pull-%EC%97%90%EB%9F%AC/",
        "teaser": null
      },{
        "title": "[TIL]시간복잡도",
        "excerpt":"🌱 알아보자 시간 복잡도! 알고리즘이 얼마나 걸리느냐 시간복잡도 = 알고리즘을 구성한 명령어가 실행된 횟수 시간복잡도의 종류 O() 빅오 최악 시간 가장 많이 쓰임 실행시간의 상한 Ω() 오메가 최상 시간 실행시간의 하한 Θ() 세타 평균 시간 실행시간의 평균 Big-O 계산 규칙 Worst Case 항상 최악의 상황을 고려 Remove Constants 상수를 제거...","categories": ["TIL"],
        "tags": ["TIL"],
        "url": "/til/%EC%8B%9C%EA%B0%84%EB%B3%B5%EC%9E%A1%EB%8F%84/",
        "teaser": null
      },{
        "title": "[Tips]MYSQL 문법",
        "excerpt":"아래 문법 설명은 w3schools의 설명을 기초로 작성되었음 BASIC SELECT 데이터 선택 SELECT column1, column2, ... FROM table_name; ex. SELECT CustomerName, City FROM Customers; 모든 데이터를 선택할때 *를 쓴다. SELECT * FROM table_name; ex. SELECT * FROM Customers; SELECT DISTINCT문 SELECT 절 바로 뒤에 DISTINCT 문을 넣고 그 뒤에 가져오길 원하는...","categories": ["Tips"],
        "tags": ["Tips"],
        "url": "/tips/mysql-%EB%AC%B8%EB%B2%95%EC%A0%95%EB%A6%AC/",
        "teaser": null
      },{
        "title": "[Command]Fork 한 Repo Update💻",
        "excerpt":"Fork 한 Repo Update💻 내 로컬에 Fork Clone git clone 포크repo주소 Clone 한 프로젝트 디렉토리 이동 -&gt; 리모트 저장소 확인 git remote -v 리모트 저장소에 upstream 추가 git remote add 등록이름 원본repo주소 추가 확인해보기 - 2번 과 동일 원본 저장소 fetch - 가져오기 it fetch 등록이름 원본 저장소 merge -...","categories": ["Command"],
        "tags": ["Tips","Command"],
        "url": "/command/Fork%ED%95%9C-Repo-Update/",
        "teaser": null
      },{
        "title": "[Command]React와 TS 설치하기",
        "excerpt":"React 설치 아직 파일 없을 때 파일 만들 곳으로 이동 React 설치 npx create-react-app 프로젝트명(파일이름) 파일 있을 때 주로 사용함 - github gui에서 repo만들어 clone 한 경우❗️ 클론한 파일 안으로 이동 React 설치 npx create-react-app . TypeScript 설치 React 설치 전 함께 설치 할 때 npx create-react-app 프로젝트명(파일이름) --template typescript...","categories": ["Command"],
        "tags": ["Tips","Command"],
        "url": "/command/React%EC%99%80-TS-%EC%84%A4%EC%B9%98/",
        "teaser": null
      },{
        "title": "[Tips]용어 사전",
        "excerpt":"알파벳 순 정리   Props   Routing   Rendering   State  ","categories": ["Tips"],
        "tags": ["Tips"],
        "url": "/tips/%EC%9A%A9%EC%96%B4%EC%A0%95%EB%A6%AC%ED%95%98%EA%B8%B0/",
        "teaser": null
      }]
