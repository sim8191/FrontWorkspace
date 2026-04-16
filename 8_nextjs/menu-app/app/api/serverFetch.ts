// next에서 서버로 넘기는 코드 작성하는 곳임 menuApi.server여기도 비슷함
const BASE_URL = 'http://localhost:8081/api';

export const serverFetch = async(endpoint:string, options:RequestInit={}) => {
    const response = await fetch(
        `${BASE_URL+endpoint}`, {
            ...options,
            headers : {
                'Content-Type':'application/json', //이거는 기본값이라 안적어도 됨
                ...options.headers
            }
        }
    );

    if(response.ok == false){
        throw new Error('API ERROR'+response.status); // API ERROR 무슨에러 인지
    }
    
    return response.json();

}