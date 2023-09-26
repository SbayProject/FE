import axios from "axios";

export const ListGetAllTypePost = async () => {
    try {
        const res = await axios.get(`http://localhost:8080/api/typePost`)
        return res.data
    }catch (e) {
        
    }
}