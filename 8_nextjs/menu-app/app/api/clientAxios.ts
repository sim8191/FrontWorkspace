// 공통 모듈 작성 ("http://localhost:8081/api/menus"이런거 계속쓰면 힘드니까)
// get<Menu[]>("http://localhost:8081/api/menus", { 여기서 "http://localhost:8081/api/menus"이부분을 공통으로 쓴다는거야
// api.get<Menu[]>("/menus",{ 이런식으로 쉽게 쓰려고

import axios from "axios";

export const api = axios.create({
    baseURL : "http://localhost:8081/api"
})
