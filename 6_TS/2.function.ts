/*
    1. 함수타입
     - 함수를 매개변수와 반환값에 타입을 저장할 수 있다.
     - 저장된 타입과 다른값이 전달되거나, 반환되면 컴파일 에러발생
*/
function greet(name:string){
    console.log("안녕 하세요." + name + " 님");
}
function returnNumber() : number{ // : number -> 이게반환형임
    return 1;
}
greet('mkm');
let a = returnNumber();
console.log(a);


/*
    2. void
     - 함수가 값을 반환하지 않을 때 사용되는 타입
     - 반환값이 없는 함수의 기본 반환타입으로 사용됨
     - 계층구조상 undefined의 super타입
*/
function fnVoid(x:number) : void{
    // return x; // 안됨
    // return;
    return undefined;
}

console.log("=========");
/*
    3. Optional Paramter
     - 선택적인 속성을 표현할 때 사용하는 속성
     - 변수면 ?:type
     - 옵셔녈파라미터는 type | undefined 우니언 타입으로 설정
*/
function fnOptional(a:number ,b?:number) : number{
    // return a + b; // b가 undefined이라고 오류뜸
    if(b != undefined){
        console.log(a*b);
        return a * b;
    }
    console.log(a);
    return a;
}
// fnOptional();
fnOptional(1);
fnOptional(1, 2);

console.log("=========");
/*
    4. restParameter
     - 함수의 매개변수에 들어갈 인자의 수가 정해지지 않은
     경우 사용하는 es6문법
     - 매개변수로 전달되는 값들을 하나의 배열로 관리
*/
function restParameter(...m : number[]){
    console.log(m);
}
restParameter();
restParameter(1); // [1]
restParameter(1,2,3,4); // [1, 2, 3, 4]

console.log("=========");
/*
    5. spread 연산자
     - 배열이나 객체의 값을 전개하여 깊은복사나 함수의
     매개인자로 전달하는 문법.
*/
const spreadArr = [1,2,3,4,5];
restParameter(...spreadArr);

function normalFn(a:number, b:number){
    console.log(a, b);
}
// normalFn(...spreadArr); // 안됨(근대 안되는게 5개를 전달해서 안되는 게 아님)
//(인자가 5개라서 안 되는 게 아닙니다. TS가 배열의 길이를 확신할 수 없어서 전개(spread)를 막는 것입니다.)
normalFn(spreadArr[1], spreadArr[2]);
/*
    배열은 크기가 정해지지 않은 타입이기 때문에, 매개변수의
    갯수가 고정된 일반함수에서 전개연산자를 통해 인자를 전달할
    수 없다.
     -> 자릿수가 정해진 튜플로 해결 가능.
*/
const arr2 = [1,2] as const;
normalFn(...arr2);

console.log("=========");
/*
    6. 비구조화문법
     - 배열이나 객체의 구조를 분해하여 개별 변수로 할당하는 문법
*/
function objectDesFn({a, b, c} : {
    a:number,
    b:string,
    c:boolean}){

}
objectDesFn({a:1, b:'mkm', c:true});

function arrayDesFn([first, second, third]:[number, string, boolean]){
    console
}

// rest + des
function arrayDesFn2([first, ...rest]:[number, ...(string|boolean)[]]){

}
arrayDesFn2([1, 'mkm', true]);

function objectDesFn2({
    a, ...rest
}:{ a : number,
    // b : string,
    // c : boolean
    [key:string] : string | boolean | number
}){
    console.log(a);
}
objectDesFn2({a:111, b:'mkm', c:false});

console.log("=========");
/*
    7. 타입 좁히기(Type narrowing)
     - unionType이나 unknown처럼 변수가 어려타입을 가지고
     있을 때, 이를 사용하는 시점에서 특정 한가지로 좁히는 문법
     - typeof, instanceof, in 조건식 등등..
*/
function typeNarrowing(strOrNum: string|number) : void{
    if(typeof strOrNum === "string"){
        console.log(strOrNum.toUpperCase());
    } else {
        console.log(strOrNum.toFixed(2));
    }
}
typeNarrowing(1000);
typeNarrowing("mkm");

console.log("=========");
/*
    8. Type Assertion
     - 여러타입을 가질 수 있는 변수에 대하여 "개발자가 직접" 해당
     값의 타입을 정확히 지정하는 문법.
     - 타입단언시 컴파일러가 이를 믿고 타입 체크를 생략
     - 타입단언은 개발자가 실제타입을 완벽하게 알고 있을때만 사용한다.
*/ // 이것도 너무막 쓰면 ts를 쓰는 의미가 없는거임
function typeAssertion(strOrNum:string|number):string{
    // return strOrNum;// 타입불일치
    return strOrNum as string; // 형변환 x 타입체크를 피하는거임
}
typeAssertion(1000);
console.log(typeAssertion(1000));
console.log(typeAssertion(1000)+1);

// not null 단언문
//  - 선택한 변수의 값이 null(undefined 포함)이
//    아님을 단언하는 문법
function notNullAssertion(number?:number) :number{
    return number!; // 이거 막쓰면 널포인트 입섹션 뜸(소심히 쓰라는것)
}

console.log("=========");
/*
    9. never type
     - 어떤 값도 가질수 없는 타입을 의미하며, 절대 값을
     반환할 수 없는 함수나, 도달할 수 없는 코드블럭을 표현할때
     사용
     - never는 예외적인 상황을 명확히 표현하여 버그를 방지하기
     위해사용한다.
    
    그럼 왜씀? - 어떠한 예외사항을 표현하기 위해 사용하는거(함수가 종료지점에 도달못할때 같은거 never)
*/ 
function fnNever():never{
    throw new Error();
    // return;
}
function fnNever2():never{
    while(true){

    }
    // return;
}
type etc = string|number|never;
function typeNarrowing2(sOrn:etc):void{
    if(typeof sOrn === 'number'){
        console.log('number' + sOrn);
    } else if(typeof sOrn === 'string'){
        console.log('string' + sOrn);
    } else{
        console.log(sOrn);
        UnexpectedValue(sOrn);
    }
}
typeNarrowing2(123);
typeNarrowing2('t');
function UnexpectedValue(value:never):never{
    throw new Error("허용하지 않는 자료형입니다." + value);
}
const any:any = ['11'];
// typeNarrowing2(any);

console.log("=========");
/*
    10. 함수 타입 표현식 / 함수 시그니처
     - 함수 시그니처?
        - 함수가 가지는 매개변수의 개수와 자료형, 반환형을 의미
     - 함수의 시그니처를 타입으로 정의하는 방법 => 함수탕입표현식
*/
// 일반함수
function print(s : string) : void{
    console.log(s + 1);
};
// 함수표현식
const print2 = (s:string) : void => {
    console.log(s + 2);
}
// 콜백함수를 매개변수로 갖는 함수 표현식
const hello = (callback : (s:string) => void) : void => {
    callback("zzz" + 3);
}
hello((s)=> console.log(s));

console.log("=========");
/*
    11. 타입별칭(Type Aliases)
     - 복잡한 타입을 별칭으로 지칭하여 관리하기 위한 문법
     - 타입의 가독성과 재사용성을 크게 늘려준다.
     - 대문자로 시작하는 것이 관례
*/
type PrintFn = (s:string) => void;
type HelloFn = (callback : PrintFn) => void;

const hello2:HelloFn = (callback) => callback("hello callback");
hello2(print2);

export default print;
