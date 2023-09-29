import axios from "axios";
export const findAllPosts = async (type, title, page) =>{
    const token = localStorage.getItem('token')
    const result = await axios.get(`http://localhost:8080/api/post/user?type=${type}&title=${title}&page=${page}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).catch((err)=>{
            console.log(err)
        })
    return result.data.content
}
export const typePost = async (name) =>{
    const result = await axios.get(`http://localhost:8080/api/typePost?name=${name}`)
    return result
}

export const remove = async (post) =>{
    const token = localStorage.getItem('token')
    await axios.patch(`http://localhost:8080/api/post/deletePost`,post,
    {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
}
export const detail = async (id) =>{
    const token = localStorage.getItem('token')
    const result = await axios.get(`http://localhost:8080/api/post/detail/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
    return result.data
}

export const createPosts = async (newPost) => {
    const token = localStorage.getItem('token')
    await axios.post(`http://localhost:8080/api/post/createPost`,newPost,
         {
             headers: {
                 Authorization: `Bearer ${token}`,
             }
         })

}
// Duyệt bài viết
export const browsePost = async (post) => {
    const token = localStorage.getItem('token')
    await axios.post(`http://localhost:8080/api/post/browse`,post,
         {
             headers: {
                 Authorization: `Bearer ${token}`,
             }
         })
}