// next에서 클라이언트로 넘기는 코드 작성하는 곳임

import { Menu, MenuCreate, MenuUpdatePatch } from "../type/menu";
import { api } from "./clientAxios"

export const searchMenus = async function(searchKeyword:{
    type : string,
    taste : string
}){
    const response = await api.get<Menu[]>('/menus',{
        params:{
            ...searchKeyword
        }
    });
    return response;
}

export const deleteMenu = async(id:number) => {
    return await api.delete(`/menus/${id}`);
}

// 등록 요청용 클라이언트
export const createMenu = async  (menu: MenuCreate) => {
    return await api.post('/menus', menu);
}

// export const putMenu = async (id:number , newMenu: MenuUpdatePatch) => {
//     return await api.put(`/menus/${id}`, newMenu);
// }
export const editMenu = async (menu: Menu) => {
    return await api.put(`/menus/${menu.id}`, menu);
}