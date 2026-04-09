// 문제 1 : 다음 함수의 타입을 정의하시오
// a,b는 숫자값만 들어온다.
// const apply:? = (a,b) => a+b;
// const apply = (a:number,b:number) => a+b;
const apply: (a:number, b:number) => number = (a,b) => a+b;


// 실습문제 2) PrintType 의 함수별칭을 만드시오
// name에는 문자열만 사용 가능합니다
// favorite에는 돈까스, 제육, 치킨만 사용 가능합니다.
// type PrintType = ?
// const print:PrintType = (name, favorite) => { //print 이름때문에 오류남
//     console.log(`안녕하세요 . 제 이름은 ${name}입니다. 제 최애 음식은 ${favorite}입니다,
//     하나만 사주세요`);
// }
type PrintType = (name:string, favorite: "돈까스"|"제육"|"치킨") => void;
const printTest:PrintType = (name, favorite) => {
    console.log(`안녕하세요 . 제 이름은 ${name}입니다. 제 최애 음식은 ${favorite}입니다,
    하나만 사주세요`);
}

// 실습문제 3) racoonInfo함수 생성하기
/* 아래 실행결과를 바탕으로 racoonInfo함수를 완성하시오
 racoonInfo함수 호출시 매개인자는 4개 혹은 3개를 전달할 수 있습니다.
 racoonInfo함수의 반환값을 data에 담은 후 출력 시 출력결과는 다음과 같습니다.
 이름 : podong , 무게 : 10 , 성별 : male, 중성화 : true
 이름 : coco , 무게 : 4 , 성별 : female<br> */

// typescript
// let data:string; 
// data = racoonInfo('podong' , 10, 'male', true );
// console.log(data);//이름 : podong , 무게 : 10 , 성별 : male, 중성화 : true
// data = racoonInfo('coco',4, 'female' );
// console.log(data);//이름 : coco , 무게 : 4 , 성별 : female

// function racoonInfo(???) {
//     ???
// }

// 놓침
// let data:string; 
// data = racoonInfo('podong' , 10, 'male', true );
// console.log(data);//이름 : podong , 무게 : 10 , 성별 : male, 중성화 : true
// data = racoonInfo('coco',4, 'female' );
// console.log(data);//이름 : coco , 무게 : 4 , 성별 : female

// function racoonInfo(name:string, weight:number, gender:string, 중성화?:boolean) {
//     return "${중성화 != undefind '중성화 : ' : ''";
// }


// 실습문제 4) sum함수의 몸통부분을 완성하시오
// typescript
// const array2:(string|number|number[])[] = ['1',2,3,4,'5',[1,2,3,4,5]];
// function sum(array2: (string|number|number[])[]) : number{
//     // 매개변수로 들어온 배열을 반복문을 통해 모두 더한 후 더한 값을 반환
// }
// const total = sum(array2);
// console.log(total); // 30
const array2:(string|number|number[])[] = ['1',2,3,4,'5',[1,2,3,4,5]];
function sum(num: (string|number|number[])[]) : number{
    let sum = 0;
    while(num === undefined){
        if(typeof num === 'number'){
            sum += num;
        } else if(typeof num === 'string'){
            sum += Number(num);
        } else if(Array.isArray(num)){
            for(let n of num){
                sum += n;
            }
        } else{
            throw new Error("잘못된 값입니다. : ${num}");
        }
    }
    return 1;
    
}
const total = sum(array2);
console.log(total); // 30

// 실습문제 5) 다음 조건을 만족하는 함수를 완성하시오

/* `abc`함수는 1개의 매개변수를 가지고 있습니다.&#x20;
  `abe`함수의 매개변수로는 다음 데이터 유형들이 매개인자로 전달되며 각 값을 전달시 반환값은 다음과 같습니다.
   abc(11) // 11
   abc('11') // 11
   abc(\['1','2','3','4']) //  \[1,2,3,4]
   abc(\[1,2,3,4]) // \[1,2,3,4] */

// javascript
// function abc(praam:??) : number|number[]{
//     //??
// }
// function abc(praam:(number|string|string[]|number[])) : number|number[]{
//     if(typeof praam === 'string'){
//         return Number(praam);
//     } else if(Array.isArray(praam)){
//         let numberArr:number[] = [];
//         for(let num of praam){
//             if(typeof num === 'string'){
//                 numberArr.push(Number(num))
//             }else{
//                 numberArr.push(num);
//             }
//         }
//     }
// }

// 실습문제 6) 매개변수로 들어온 모든 숫자를 곱하여 반환하는 함수 작성

// multiplyAll의 매개변수는 1개 의상의 매개인자가 들어올 수 있습니다.

//typescript
// function multiplyAll(???): number {
//   // 구현
// }
// console.log(multiplyAll(2)); // 2
// console.log(multiplyAll(2, 2)); // 4
// console.log(multiplyAll(2, 2, 2)); // 8
// console.log(multiplyAll(2, 2, 2, 2)); // 16
// console.log(multiplyAll(2, 2, 2, 2, 2)); // 32
// //...

// 실습문제 7) 다음 조건에 맞는 함수를 작성하시오

/* `handleValue`함수는 string,number,boolean타입을 매개변수로 받습니다
* `handleValue`함수는 전달받은 타입에 따라 분기하여 각기 다른 내용이 출력됩니다.
* string이 전달된 경우 : '문자열입니다' 출력
* number가 전달된 경우 : '숫자입니다'출력
* boolean이 전달된 경우 : '불린입니다'출력
* 그 외의 타입이 들어오는 경우 `assertNever`함수를 호출하여 타입을 검사합니다.
* `assertNever`는 타입가드를 위한 보조함수로 **절대 호출되지 않아야 하며, 호출시 에러를 발생**시켜야 합니다.&#x20; */

//typescript
// type Types = ??;
// function handleValue(value:Types) {
    
// }

// function assertNever(value : ??){
    
// }


// 실습문제 8) 다음 조건을 만족하는 함수를 작성하시오

//typescript
// type FnType = ?
// const fn:FnType  = (?) => {
//     ?
// }
// fn([]) // 컴파일에러
// fn([1]); // []
// fn([1,2]); // [3]
// fn([1,2,3]); // [3,4]
// fn([1,2,3,4]); // [3,4,5]


/* fn함수는 **숫자배열을** 인자로 전달받습니다.
* 배열의 **첫 번째 값은 기준 값**으로 사용됩니다.
* fn함수는배열의 첫 번째를 제외한 **나머지 값**들에는**첫** **번째 값을 더한 새로운 배열을 반환합**니다.
* fn함수에 매개변수를 전달한 후 결과값은 다음과 같습니다.
  * \[]을 전달하면 컴파일 에러가 발생합니다.
  * \[1]을 전달하면 빈배열\[]을 반환합니다.
  * \[1,2]를 전달하면 \[3]을 반환합니다. &#x20;
  * \[1,2,3]을 전달하면 \[3,4]를 반환합니다.
  * \[1,2,3,4]를 전달하면 \[3,4,5]를 반환합니다. */




// export default fn;