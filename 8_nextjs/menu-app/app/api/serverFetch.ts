import { cookies, headers } from "next/headers";

// next에서 서버로 넘기는 코드 작성하는 곳임 menuApi.server여기도 비슷함
const BASE_URL = 'http://localhost:8081/api';

export const serverFetch = async(endpoint:string, options:RequestInit={}) => {
    // 서버컴포넌트의 fetch에 accesstoken추가하기
    const cookieStore = await cookies(); // 리케스트 쿠키를 그대로 가져 오는놈
    const headerList = await headers(); // 리케스트 쿠키를 헤더에 넣어줘야 해서 만듬
    
    // 미들웨어 추가전
    // const accessToken = cookieStore.get('accessToken')?.value;
    
    // 미들웨어 추가시 미들웨어가 재발급한 토큰이 있는지 확인 필요(나중에 하기)
    const accessToken = 
    headerList.get('x-new-access-token') ?? cookieStore.get('accessToken')?.value ?? "";

    const response = await fetch(
        `${BASE_URL+endpoint}`, {
            ...options,
            headers : {
                'Content-Type':'application/json', //이거는 기본값이라 안적어도 됨
                'Cookie' : cookieStore.toString(),
                ...(accessToken? {'Authorization':`Bearer ${accessToken}`}:{}), // 미들웨어 추가전은 여기만
                ...(accessToken? {'Authorization':`Bearer ${accessToken}`}:{}), // 미들웨어 추가시 코드
                ...options.headers
            }
        }
    );

    if(!response.ok){
        throw new Error('API ERROR'+response.status); // API ERROR 무슨에러 인지
    }
    
    return response.json();

}