// // 눈코딩
// const obj = {
//     name: "홍길동",
//     normalFn: function() {
//         console.log("일반 함수:", this.name);
//     },
//     arrowFn: () => {
//         console.log("화살표 함수:", this.name);
//     }
// };

// obj.normalFn(); // ??
// obj.arrowFn();  // ??

// const obj = {
//     name: "홍길동",
//     normalFn: function() {
//         console.log("일반 함수:", this.name);
//     },
//     arrowFn: () => {
//         console.log("화살표 함수:", this.name);
//     }
// };

// obj.normalFn(); // ??
// obj.arrowFn();  // ??


// //2) 눈코딩

// Copy
// const person = {
//     name: "안찰스",
//     greet: function() {
//         const innerArrow = () => console.log(this.name); //안찰스
//         const innerNormal = function() { console.log(this.name); }; // 언디파인드(글로벌)
        
//         innerArrow();
//         innerNormal();
//     }
// };

// person.greet();
// // innerArrow 출력: 
// // innerNormal 출력: 


// //3) 눈코딩
// // 1초 간격으로 Hello , 찰스를 출력하려고 하나 이름값이 제대로 출력되지 않았다.

// // 문제의 원인과 수정방안을 생각하세요


// Copy
// function User(name) {
//     this.name = name;
//     setTimeout(function() {
//         console.log("Hello, " + this.name);
//     }, 1000);
// }

// new User("찰스"); // "Hello, undefined"


// //4) 눈코딩

// Copy
// const tom = {
//     name : 'Tom',
//     sayName : function(){
//         console.log(this.name);
//     }
// }

// const alice = { name: "Alice" };

// tom.sayName(); // ??
// tom.sayName.call(alice); // ??


// //5) 눈코딩

// Copy
// this.tag = "Error";

// function print() {
//   console.log(this.tag); 
// }
// const obj = { tag: "OK" };

// const boundPrint = print.bind(obj);

// print(); // 에러
// boundPrint(); // ok