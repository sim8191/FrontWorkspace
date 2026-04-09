// 3번 실습
// Q7. 매개변수로 전달받은 배열의 값을 복사하여 새로운 값을 추가한 배열을 반환하는 함수를 작성하시오
console.log(getNewList([1,2,3])); // [a,1,2,3,b]
console.log(getNewList([1,2,3,4,5])); // [a,1,2,3,4,5,b]

function getNewList(list){
    ["a", ...list, "b"];
}

// Q8. 매개변수로 전달된 두 객체의 값을 하나의 객체로 병합하여 반환하는 함수를 작성하시오
const userInfo = { name: "Tom", age: 28 };
const jobInfo = { job: "engineer", location: "Seoul" };

console.log(getMergeObj(userInfo, jobInfo));
// { name: "Tom", age: 28, job: "engineer", location: "Seoul" }

function getMergeObj(obj1, obj2){
    return {...obj1, obj2};
}

// Q9. 매개변수로 전달된 배열의 데이터중 가장 큰 값을 반환하는 메서드를 작성하시오 
const numbers1 = [3, 5, 7];
const numbers2 = [13, 55, 71, 12, 99, 64];

console.log(getMaxValue(numbers1)); // 7
console.log(getMaxValue(numbers2)); // 99

function getMaxValue(numbers){
    return Math.max(...numbers);
}