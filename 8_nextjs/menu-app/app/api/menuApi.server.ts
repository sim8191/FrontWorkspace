// next에서 서버로 넘기는 코드 작성하는 곳임 serverFetch여기랑 함께
// 메뉴의 조회, 검색 등을 추가 할 장소

import { Menu } from "../type/menu"
import { serverFetch } from "./serverFetch"

export const loadMenus = async ():Promise<Menu[]> => {
    // 항상 새로운 데이터 fetch
    // return serverFetch("/menus",{cache:'no-store'})

    // 10초 간격 캐싱
    return serverFetch("/menus",{next:{revalidate:10}})
}

export const getMenu = async(id:number):Promise<Menu> => {
    return serverFetch(`/menus/${id}`,{next :{tags:['menus']}})
}