// 실습문제 1. 컴포넌트

// 실습문제 1) 사용자 정보 출력하기

/* `UserInfoContainer`는 부모 컴포넌트입니다.
* `UserInfoContainer`에서 `useState`를 통해 선언한 상태값과 함수를  `UserInfo`로 전달하세요.

  * 선언할 사용자 정보 : {name : '홍길동', age : 30, hobby : \['코딩','게임']}

* `UserInfoProps`는 부모컴포넌트에서 전달하는 props의 type입니다.
* `UserInfo`컴포넌트에서는 부모컴포넌트로부터 전달받은 상태값을 렌더링합니다.
* `UserInfo` 함수에서 정보 변경 버튼 클릭시 부모컴포넌트에서 작성한 데이터를 다음 데이터로 변경하세요

  * 변경할 사용자 정보 : {name : '학생이름', age : 학생나이, hobby : \['취미1','취미2']}
*/
/*
import React, { useState } from 'react';

interface UserInfoProps {
}

export default function UserInfoContainer() {
  
  return (
    <div>      
      <UserInfo />
    </div>
  );
}


function UserInfo(??: UserInfoProps) {
  const handleChangeName = () => {
     
  }
  return (
    <div style={{ border: '1px solid gray', padding: '10px', marginTop: '10px' }}>
      <h2>사용자 정보</h2>
      <h3>이름: </h3>
      <h3>나이: </h3>
      <h3>취미: </h3>
     <button onClick={handleChangeName}>정보 변경변경</button>
    </div>
  );
}
*/

import /*React,*/ { useState } from 'react';

interface UserInfoProps {
    name: string;
    age: number;
    hobby: string[];
    setUser: (user: { name: string; age: number; hobby: string[] }) => void;
}

export default function UserInfoContainer() {
    const [user, setUser] = useState({
        name: '홍길동',
        age: 30,
        hobby: ['코딩', '게임']
    });

    return (
        <div>      
        <UserInfo 
            name = {user.name}
            age = {user.age}
            hobby = {user.hobby}
            setUser={setUser}
        />
        </div>
    );
}


function UserInfo({ name, age, hobby, setUser }: UserInfoProps) {
  const handleChangeName = () => {
     setUser({
       name: '학생이름', // 본인 이름으로 변경 가능
       age: 20,        // 본인 나이로 변경 가능
       hobby: ['취미1', '취미2']
     });
  }
  return (
    <div style={{ border: '1px solid gray', padding: '10px', marginTop: '10px' }}>
      <h2>사용자 정보 </h2>
      <h3>이름: {name}</h3>
      <h3>나이: {age}</h3>
      <h3>취미: {hobby}</h3>
     <button onClick={handleChangeName}>정보 변경변경</button>
    </div>
  );
}
