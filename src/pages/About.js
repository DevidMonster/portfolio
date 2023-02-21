import images from "@/asset/images";
import Info from "@/components/Info";
import Loading from "@/components/Loading";
import Session from "@/components/Session";
import SubSession from "@/components/SubSession";
import { useEffect, useState } from "@/lib";
import { request } from "@/util/httpRequest";

function About() {
    const [profile, setProfile] = useState({})

    const fetchAPI = async() => {
        const projectResult = await request.get("/profiles", {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": '*'
            }
        })
        setProfile(projectResult)
    }

    useEffect(() => {
        fetchAPI()
    }, [])

    return `
        ${Session('tw-bg-white','about', `About`, `
            <div class="tw-w-3/2 tw-gap-4 tw-py-14 tw-flex tw-flex-wrap tw-mx-auto">
                <div class="md:tw-w-1/6 lg:tw-w-1/4 tw-w-4/5 tw-mx-auto tw-overflow-hidden">
                    <img class="tw-w-full tw-h-full tw-object-cover" src="${images.avatar2}"/>
                </div>
                <div class="tw-flex-1">
                    ${Object.keys(profile).length > 0 ? (
                        `
                            ${SubSession('Web Developer', `
                                ${profile.about.content}  
                            `)}
                            <div class="tw-flex tw-flex-wrap">
                                <div class="md:tw-flex-1 tw-w-full">
                                    ${SubSession('More Info', `
                                        ${profile.infos.map(item => `
                                            ${Info(item.name, item.content)}  
                                        `).join('')}
                                         
                                    `)}
                                </div>
                                <div class="md:tw-flex-1 tw-w-full">
                                    ${SubSession('Skill', `
                                        ${profile.skills.map(item => `
                                            ${Info(item.name, item.content)} 
                                        `).join('')}
                                    `)}
                                </div>
                            </div>                        
                        `
                    ) : (
                        `<div class="tw-h-full tw-flex tw-items-center">${Loading(true)}</div>`
                    )}
                    
                </div>
            </div>
        `)}
    `; 
}

export default About;