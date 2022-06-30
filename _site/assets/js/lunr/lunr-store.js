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
        "excerpt":"읽어 볼 만한 링크 정리   신입 프론트엔드 개발자가 되려면 무엇을 학습해야 하나요?  캡틴판교-프론트엔드 개발 학습 방법-유투브  ","categories": ["Job"],
        "tags": ["Inflearn","Job"],
        "url": "/job/%EB%B9%84%EC%A0%84%EA%B3%B5%EC%9E%90%EB%A5%BC-%EC%9C%84%ED%95%9C-%EA%B0%9C%EB%B0%9C%EC%9E%90-%EC%B7%A8%EC%97%85-%EC%98%AC%EC%9D%B8%EC%9B%90-%EA%B0%80%EC%9D%B4%EB%93%9C/",
        "teaser": null
      }]
