import axios from "axios"

export default {
    getRandos: () => {
        return axios.get("https://randomuser.me/api/?results=10")        
    }
}