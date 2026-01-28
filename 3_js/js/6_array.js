test1.onclick = function () {
    /*
        자바스크립트의 배열은 크기제한이나, 타입제한이 없으며 유용한 메서드들이
        존재한다.(ArrayList와 비슷)
    */
    var arr1 = []; // 권장
    var arr2 = new Array();
    var arr3 = new Array(3);//크기지정

    console.log(arr1, arr2, arr3);

    // 값대입
    arr1[0] = 'a';
    arr1[1] = 'b';
    arr1[2] = 'c';

    // 값 가져오기
    console.log(arr1[2]);
    console.log(arr1[100]); // undefined반환

    // 반복문
    // basic loop문
    for (var i = 0; i < arr1.length; i++) {
        console.log(arr1[i]);
    }

    // 향상된 반복문(객체 반복)
    // 1. for .. in문
    //   - 객체, 배열 모두 반복이 가능
    //   - 객체 반복시 i에는 객체의 속성명이 대입
    //   - 배열
    //  반복시 i에는 배열의 인덱스가 대입된다.
    for (var i in arr1) {
        console.log(i, arr1[i]);
    }

    /*
        2. for .. of문(배열 반복)
         - java의 향상된 반복문과 가장 비슷한 구문으로, 배열유형의 데이터를
        반복시키기 위해 사용한다.
         - i에는 각 인덱스에 저장된 값이 대입된다.
         - 객체는 반복이 불가능한다.
    */
    for (var item of arr1) {
        console.log(item);
    }
}

test2.onclick = function () {
    var arr1 = [1, 2, 3];
    var arr2 = new Array("철수", "영희", "김밥");

    var arr3 = [
        1, 2, 3,
        "안녕", true, { id: "mkm" }, ['a', 'b'],
        function () { console.log('zz') }
    ];
    arr3[7]();
}

test3.onclick = function () {
    var arr = ['apple', 'melon', 'mango', 'banana', 'melon'];
    console.log(arr.indexOf('melon'));
    console.log(arr.lastIndexOf('melon'));
    console.log(arr.indexOf('strawberry')); // -1(없어서 -1)
};

test4.onclick = function () { // concat
    var arr1 = ['a', 'b', 'c'];
    var arr2 = [1, 2, 3, 4, 5];
    var newArr = arr1.concat(arr2);
    console.log(newArr);
    console.log(arr1);//concat은 원본은 그대로 두고 그냥 합치는거(단 일부는 원본에 영향을 미침)
};

test5.onclick = function () {
    // join : 배열 내부의 요소를 하나로 뭉친 문자열 리턴
    var arr = [1, 2, 3, 4, 5];
    var str = arr.join(); //1,2,3,4,5
    console.log(str);

    var str = arr.join("");
    console.log(str);

}

test6.onclick = function () {
    var arr = [1, 2, 3, 4, 5];
    arr.reverse(); // 원본 배열의 정렬 순서를 변경
    console.log(arr);
}

test7.onclick = function () { //sort()
    var arr = [4, 3, 2, 5, 1];
    console.log(arr.sort())//원본 배열을 정렬시킴

    // 내림차순 정렬
    // 정렬기준을 "함수"로 만든다.
    arr.sort(function (a, b) {
        return b - a;
    });
    console.log(arr);

    // 문자열 정렬 : 오름차순
    var names = ["홍길동", "김길동", "라맏나", "다나가"];
    console.log(names.sort());

    // 내림차순
    names.sort(function (a, b) {
        if (a > b) return -1;
        if (a < b) return 1;
        return 0;
    })
    console.log(names);

    // sort메서드의 기본 정렬은 "문자열 기준"정렬
    arr = [1, 2, 15];
    console.log(arr.sort()); // 1,15,2
    // 문자열은 맨앞에 있는 값을 가지고 비교하는거임("2">"15" true : 이런식으로 비교하는 거임)

    console.log(arr.sort(function (a, b) {
        return b - a;
    }));
}

test8.onclick = function () { //push/pop
    /*
        push : 배열 마지막에 요소를 추가한 후, 변경된 길이를 반환
        pop : 배열 마지막 요소를 제거한 후, 제거된 요소를 반환
    */
    var arr = [];
    arr.push(1);
    arr.push(2);
    arr.push(3);
    console.log(arr);

    console.log(arr.pop());
    console.log(arr.pop());
    console.log(arr);

}
// push/pop이랑 unshift/shift중 push/pop이 권장
// unshift/shift이거는 써야할때가 있음

test9.onclick = function () { //unshift/shift
    /*
        unshift : 배열의 0번 인덱스에 요소 추가후, 변경된 길이 반환
        shift : 배열의 0번 인덱스의 요소 제거 후, 제거된 요소를 반환
    */
    var arr = ['사과', '배', '귤'];
    arr.unshift('감자');
    arr.unshift('양파');

    console.log(arr);
    console.log(arr.shift());
}

test10.onclick = function () {
    /*
        slice(start, end)
         - start인덱스부터 end인덱스 까지의 요소를 가져와서 새배열 반환
    */
    var arr = ['a', 'b', 'c', 'd', 'e'];
    // b, c, d만 추출
    var other = arr.slice(1, 4);//원본배열 영향x
    console.log(other);
    console.log(arr);
}

test11.onclick = function () {
    /*
        splice(start, deteteCount, [추가할요소1, 2,....])
         - 중간위치에 요소를 추가하거나 삭제하는 메서드
         - start인덱스부터, deteteCount개의 요소를 제거하고,
         추가할 요소를 추가한다.
    */
    var arr = ['a', 'b', 'c', 'd', 'e'];

    // a x y c d e
    arr.splice(1, 1, 'x', 'y');

    // a x k h e
    arr.splice(2, 3, 'k', 'h');

    // a x f r i k h e
    arr.splice(2, 0, 'f', 'r', 'i');

    // a b
    arr.splice(1, 7, 'b');

    console.log(arr);

    // a만 남기기
    arr.splice(1, 7);

    console.log(arr);
}

/*
    prompt를 이용해 사용자의 취미리스트를 입력받으세요.
    예) 농구, 수영, 캠핑, 낚시
    , 구분자로 잘라서 배열로 담은후,
    사전순 정렬후, ul#hobby-list의자식 li태그로 추가하세요.
*/
test12.onclick = function () { // 오류남
    // let testprompt = prompt('값을 입력', '');
    // var str = testprompt.split(',')
    // console.log(str.sort());
    var hobbies = prompt("취미를 입력하세요..");
    // var str = hobbies.split(",")
    // str.sort();
    var arr = hobbies.split(",").sort(); // 가능

    var result = "";
    for(var hobby of arr){
        result += "<li>"+hobby+"</li>";
    }

    var ul = document.querySelector("#hobby-list");
    ul.innerHTML = result;
};
/* 
    forEach(function(value, index){
        //실행할 구문
    })
*/

test13.onclick = function () {
    /*
        forEach(function(value, index){
            // 실행할 구문
        })
    */
    var arr = [1, 2, 3, 4, 5];
    var sum = 0;
    arr.forEach((num, index, arr2) => { //11시 25분
        sum += num;// 자바에서는 안된
        // 그 이유는 sum이 지역변수 에서 파이널값이기 때문에 값이 안담김
    })

    console.log(sum);

    // forEach메서드는 유사배열도 사용이 가능.
    var btnArr = document.querySelectorAll("input[type=butten]")

    var btnValues = [];
    btnArr.forEach(function (btn) {
        btnValues.push(btn.value);
    });
    console.log(btnValues);
}

test14.onclick = function () {
    /*
        array에서만 사용 가능한 함수

        find : 배열에서 내가 지정한 조건을 만족하는 1개의 요소 반환
        filter : 배열에서 내가 지정한 조건을 만족하는 n개의 요소를 담은 배열 반환
        map : 배열안의 데이터를 내가 원하는 요소로 변경시켜 반환
    */
    var objArr = [
        { id: 'test1', name: '경씨' },
        { id: 'test2', name: '경씨' },
        { id: 'test3', name: '경씨' },
        { id: 'test4', name: '경씨' },//자바스크립트에서는 마지막에 ,가와도 상관x
    ];

    var findOne = objArr.find(function (obj) {
        if (obj.id == 'test') {
            return true;
        }
    });

    // 존재하지 않는 경우 undefined반환
    console.log(findOne);

    var filteredArray = objArr.filter(function (obj) {
        if (obj.id.includes('test')) {
            return true;
        }
    });
    console.log(filteredArray);

    var mappedArr = objArr.map(function (obj) {
        return obj.name;
    });
    console.log(mappedArr); // 기존배열은 영향을 안미침
}

/**
     * 1) 배열 drink에 #drink태그의 자식li태그 텍스트를 추가. (forEach활용)
     * ['coke', 'juice', 'coffee', 'beer', 'wine']
     * 2) 배열 drink에서 'ff'가 들어가는 요소를 선택해서 findOne 반환. (find 활용)
     *  coffee
     * 3) 배열 drink에서  'o'가 들어가는 요소들을 선택해서 filteredArr 반환. (filter활용)
     * ['coke','coffee']
     * 4) 배열 drink를 활용하여 음료객체 배열을 생성 한후 mappedDrink에 반환(map 활용)     *
     * [{"menu": "coke","price": 2000},{"menu": "juice","price": 1600},{"menu": "coffee","price": 4000},
     *  {"menu": "beer","price": 8000},{"menu": "wine","price": 15000}]
     */
test15.onclick = function () {
    var drink = [];
    // 1. foreach
    document.querySelectorAll("#drink > li").forEach(function(li){
        drink.push(li.innerHTML);
    });


    
    // 2. find
    var findOne = drink.find(function (d) {
        return d.includes("ff");
    });
    console.log(findOne);

    
    // 3. filter
    var filteredArr = drink.filter(function (d){
        return d.includes("o");
    });
    console.log(filteredArr);
    
    
    //4.map
    var priceArr = [2000, 1600, 4000, 8000, 15000];
    var mappedDrink = drink.map(function(d,i){
        return {menu : d, price : priceArr[i]};
    });
    console.log(mappedDrink);
}


