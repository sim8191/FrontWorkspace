// createSlice
//  - store에서 관리해야할 상태(state)와 , 상태변경로직(reducer)를

import { createSlice } from "@reduxjs/toolkit";

// 함께 정의하는 함수(store에서 관리해야할 상태(state)와 , )
const counterSlice = createSlice({
    name: "counter", // 현재 리듀서의 이름 + action의 type에 접두어로 사용
    initialState : {
        value : 0
    },
    /*
        reducers
         - Action을 받아서 상태값을 변경하는 함수
         - 각 함수 등록시 액션생성함수와 액션타입을 자동으로 생성해 준다.
         - 액션타입은 name/reducers의 key 형식으로 생성
     */
    reducers : {
        increment : (state) => {
            // return{value : state.value + 1};
            state.value += 1; // 이미 깊은복사(increment : (state))를해서 또할필요가 없기에 이렇게 써도됨
        },
        decrement : (state) => {
            state.value -= 1;
        },
        incrementByAmount(state, action){
            state.value += action.payload;
        }
    }
})

// 액션생성함수
//  - rtk에서는 reducers의 함수명과 매칭되는 액션함수를 자동으로 생성한다.
//  - slice.actions;
export const {increment , decrement, incrementByAmount} = counterSlice.actions;

//리듀서를 스토어에 등록시키기 위한 내보내기
export default counterSlice.reducer; // store 등록용
