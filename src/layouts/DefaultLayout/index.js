import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";

import { menu } from "@/data";
import { useEffect, useState } from "@/lib";
import { request } from "@/util/httpRequest";

function DefaultLayout() {
    const [projects, setProjects] = useState([])

    const fetchAPI = async() => {
        const projectResult = await request.get("/projects", {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": '*'
            }
        })
        setProjects(projectResult)
    }

    useEffect(() => {
        fetchAPI()
    }, [])
    return ` 
        <div id="home" class="tw-bg-gradient-to-br tw-from-regal-purple tw-to-regal-blue">
            ${Header(menu)}
            ${Banner()}
            ${About()}
            ${Projects(projects)}
            ${Contact()}
            ${Footer()}
        </div>
    `;  
}

export default DefaultLayout;