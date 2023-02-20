import { useEffect, useState } from "@/lib"
import { request } from "@/util/httpRequest"

function Detail({ id }) {
    const [item, setItem] = useState({})

    const fetchAPI = async () => {
        const itemResult = await request.get("/projects/" + id)
        setItem(itemResult)
    }

    useEffect(() => {
        fetchAPI()
    }, [])

    return /*html*/`
        <h1>${item.name}</h1>
    `
}

export default Detail