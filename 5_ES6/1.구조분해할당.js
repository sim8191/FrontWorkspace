/*
    1. 구조분해할당(Destructuring)
    - 객체나 배열의 내부 구조르 분해하여 각각의 값을 변수에 할당하는 문법
    - 주로 변수 선언시 많이 사용되며, 함수의 매개변수에도 사용이 가능
*/
const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];

// 배열 구조분해할당.
// - 배열의 인덱스 순서에 맞게 변수를 준비해두면, 각 배열에 담긴
//   값이 순서에 맞춰서 저장.
const [a, b, c] = arr;
// const [a, b] = arr; // 도 가능

console.log(a,b,c);

// 객체 구조분해할당 문법
//  - 객체의 속성명과 동일한 이름의 변수에 객체의 속성값을 할당하는 문법
const obj = {
    foo : 1,
    bao : 2
};
// const foo = obj.foo;
// const bao = obj["bao"];

// const {foo = "", bao = ""} = obj;
// console.log(foo, bao);
const {bao} = obj;
console.log(bao);
const {foo = "", bao1 = ""} = obj;
console.log(foo, bao1);

/*
    2. 전개연산자(Spread Operator)
     - 배열이나 객체에 담겨있는 값을 꺼내어 전개해주는 연산자
     - 배열 및 객체에 값을 대입하는 경우 함수 호출시 자주 사용된다.
*/
const arr2 = [1,2,3,4];
const max = Math.max(...arr2); // Math.max(1,2,3,4)
console.log("max",max);

// spread연산자르 활용한 배열/객체 복사(깊은 복사)
const copy = arr2; // 얕은 복사(주소 값만 복사)
const copy2 = [...arr2]; // 깊은 복사

console.log(copy, copy2, arr2 == copy, arr2 == copy2, copy2 == copy);

// 객체 전개 연산자
console.log('=========');
const person = {name : 'mkm', job : 'teacher'};
const mkm = {...person, location : 'seoul'};
console.log(mkm);

// 3. Rest Parameter
//  - 함수 선언 및 비구조화문법에서 "나머지" 값들을 하나로 모아주는 역할
function testRest(first, ...rest){//...rest 이런식의 작성은 항상 마지막(그냥 rest 이게 마지막으로 와야 하는 거일수 있음)
    console.log(first);
    console.log(rest); // 값을 전달하지 않은 경우 [] 반환
};
testRest("mkm");
testRest("mkm", 1, 2, 3, 4);

// 비구조화 할당 + Rest Parameter
function testRest2(name, age, ...rest){
    console.log(name);
    console.log(age);
    console.log(rest);
}
console.log("===");
const person2 = {...mkm, age : 25};
testRest2(person2);


const arr3 = [1,2,3,4];
const [first, ...rest] = arr3;
console.log(first, rest);


