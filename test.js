import { request } from "@/util/httpRequest"
import axios from "axios"

const getAPI = () => {
    request.get(`/projects?q=`, {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => console.log(res))
        .catch(err => console.log(err)) 
}
getAPI()