import axios from "axios";

export const ListGetAllTypePost = async () => {
    try {
        const res = await axios.get(`http://localhost:8080/api/typePost`)
        return res.data
    } catch (e) {

    }
}
//@ts-ignore
export const ListGetTypePostSearch = async (id,title,page) => {

    try {
        const res = await axios.get(`http://localhost:8080/api/post/typePostSearch?id=${id}&title=${title}&page=${page}`)
        return res.data
    } catch (e) {
    }
}
// Sổ các sản phẩm cùng loại
//@ts-ignore
export const ListGetTheSameKind = async (id) => {
    try {
        const res = await axios.get(`http://localhost:8080/api/post/getPostByType?id=${id}`)
        return res.data
    } catch (e) {

    }
}