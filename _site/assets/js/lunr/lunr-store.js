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
        "title": "[Diary]2주차",
        "excerpt":"기술 블로그로 만들려고 하지만 일단 블로그이니 하루 회고 형식으로 느낀점을 간단하게 남기려고 한다. 8일 어제 분명히 작동이 되었는데 오늘 다시 실행시키니 에러가 났다. 콘솔창에 because its MIME type (‘text/html’) is not a supported stylesheet MIME type, and strict MIME checking is enabled 로 해서 갑자기 css 파일을 찾지 못했다고 떴다.....","categories": ["Diary"],
        "tags": ["Diary"],
        "url": "/diary/2%EC%A3%BC%EC%B0%A8/",
        "teaser": null
      },{
        "title": "[Etc]쓰고 싶은 포스팅",
        "excerpt":"그냥 쓰고 싶은 글 들 깊은 복사 vs 얇은 복사 OOP class 면접 준비로 정리하기 호이스팅 브라우저 렌더링 원리(유저에게 보이는 순서 정리) margin vs padding position 사용 방법 GET vs POST This 용법 브라우저 저장소 차이점 Localstorage, SessionStorage,Cookie Restful API 설명 GET, PUT, POST, PATCH, OPTION, DELETE JS vs TS...","categories": ["ETC"],
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
        "title": "[Job]면접질문",
        "excerpt":"링크                  링크                 실제로 받은 프론트엔드 개발자 면접 질문 모음                 이직하려는 친구에게 보내는 프런트엔드 개발 면접 질문-캡틴판교                 프론트엔드 개발자 기술면접 인터뷰 질문 모음(업데이트)                 프론트엔드 면접 질문 리스트 - JS          ","categories": ["Job"],
        "tags": ["Job"],
        "url": "/job/%EB%A9%B4%EC%A0%91%EC%A7%88%EB%AC%B8/",
        "teaser": null
      }]
