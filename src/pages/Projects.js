import Item from "@/components/Item";
import Loading from "@/components/Loading";
import Session from "@/components/Session";
import { useEffect, useState } from "@/lib";
import { request } from "@/util/httpRequest";

function Projects() {
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
        ${Session('','project', 'Portfolio', `
          <div class="tw-flex tw-h-screen tw-justify-center tw-flex-wrap tw-gap-6 tw-my-7">
                ${projects.length === 0? (
                    `
                        ${Loading()}
                    `
                ) : (projects.map(item => `
                    ${Item(`${item.images[0]}`, item.name, item.description, item.techs, item.link)}
                `).join(''))}
          </div>
          <a class="tw-underline tw-block tw-text-center tw-text-2xl tw-text-white hover:tw-text-regal-blue" target="_blank" href="https://github.com/DevidMonster">See more and detail on GitHub</a>
        `)}
    `;
}

export default Projects;