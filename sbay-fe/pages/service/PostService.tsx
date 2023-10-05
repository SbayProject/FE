import axios from "axios";
import {notFound} from "next/navigation";
// @ts-ignore
export const ListGetAllPost = async (type, title, page) => {
    // await new Promise((resolve)=>setTimeout(resolve,2000))
    try {
        const res = (await axios.get(`http://localhost:8080/api/post?type=${type}&title=${title}&page=${page}`
        )).data
        return res.content
    } catch (e) {
    }
}
export const ListGetAllTop4NewPost = async () => {
    try {
        const res = await axios.get(`http://localhost:8080/api/post/newPost`)
        return res.data
    } catch (e) {

    }
}
// @ts-ignore
export const DetailPost = async (idPost) => {
    try {
        const res = await axios.get(`http://localhost:8080/api/post/detail/${idPost}`)
        return res.data
    } catch (e) {
        console.log(e)
    }
}

