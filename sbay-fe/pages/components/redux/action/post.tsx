import axios from "axios";
import {LIST_GET_ALL_POST} from "@/pages/components/redux/action/type";
// @ts-ignore
export const ListGetAllPost = async (type, title, page) => {
    try {
        const res = (await axios.get(`http://localhost:8080/api/post?type=${type}&title=${title}&page=${page}`,))
        return{
            type:LIST_GET_ALL_POST,
            payload: res.data
        }
    } catch (e) {
    }
}