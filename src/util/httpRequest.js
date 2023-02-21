import axios from "axios";



const instance = axios.create({
    baseURL: "http://localhost:3000",
})

// instance.defaults.headers.common["Content-type"] = 'application/json'
// instance.defaults.headers.common["Access-Control-Allow-Origin"] = '*'


const get = async (path, options) => {
    const data= await instance.get(path, options)
    return data.data
}

const post = async (path, options, headers) => {
    const data= await instance.post(path, options, headers)
    return data.data
}

const put = async (path, options, headers) => {
    const data= await instance.put(path, options, headers)
    return data.data
}

const deleteItem = async (path, options) => {
    const data= await instance.delete(path, options)
    return data.data
}


export const request = {
    get,
    post,
    put,
    deleteItem
}