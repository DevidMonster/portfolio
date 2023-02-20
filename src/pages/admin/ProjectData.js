import Loading from "@/components/Loading"
import { useEffect, useState } from "@/lib"
import { request } from "@/util/httpRequest"

function ProjectData() {
    const [data, setData] = useState([])
    const [searchValue, setSearchValue] = useState(``)

    const fetchAPI = async (searchValue) => {
        const dataResult = await request.get(`/projects?q=${searchValue}`, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        setData(dataResult)
    }

    useEffect(() => {
        fetchAPI(searchValue)
    }, [searchValue])

    useEffect(() => {
        const searchInput = document.querySelector(".inp_search")
        if(searchInput) {

            searchInput.addEventListener('change', function() {
                setSearchValue(this.value)
            })
        }

        const btnReload = document.querySelector(".btn-reload_data")
        if(btnReload) {
            btnReload.addEventListener('click', () => {
                handleReload()
            })
        }

        const btnDelete = document.querySelectorAll(".btn_delete")
        if(btnDelete) {
            for(let btn of btnDelete) {
                btn.addEventListener("click", function() {
                    console.log(this.dataset.id)
                    handleDelete(this.dataset.id)
                })
            }
        }
    }) 

    const handleReload = () => {
        setSearchValue(``)
    }

    const handleDelete = async (id) => {
        await request.deleteItem("/projects/" + id)
        fetchAPI(searchValue)
    }

    return /*html*/`
        <div class="project_container tw-min-h-screen tw-pt-10 tw-text-white">
            <div class="tw-flex tw-items-center tw-gap-3">
                <input type="search" class="inp_search" placeholder="search here"/>
                <button>Search</button>
            </div>
            ${searchValue !== "" ? 
                `
                <div class="powiadomienie">
                    <p>search Result for '${searchValue}'</p>
                    <button class="btn-reload_data">Reload</button>
                </div>
                ` 
                    :
                ""
            }
            <div class="tw-overflow-x-scroll md:tw-overflow-x-auto">
                <table class="table_project tw-border-1 tw-text-xs md:tw-text-sm">
                    <thead>
                        <tr>
                            <td>#id</td>
                            <td>Name</td>
                            <td>Images</td>
                            <td>Description</td>
                            <td>Tech</td>
                            <td>Link</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        ${data.length === 0 ? (
                            `
                                <tr>
                                    <td colspan="7">${Loading()}</td>
                                </tr>
                            `
                        ) : (
                            data.map(item => `
                            <tr>
                                <td>${item.id}</td>
                                <td>
                                    <a href="/detail/${item.id}">${item.name}</a>
                                </td>
                                <td>
                                    <img class="tw-max-w-none tw-w-52 md:tw-w-52" src="${item.images[0]}"/>
                                </td>
                                <td>
                                    <p class="tw-block tw-w-60">${item.description}</p>
                                </td>
                                <td >
                                    <ul class="tw-list-disc">${item.techs.map(item => `<li>${item}</li>`).join('')}</ul>
                                </td>
                                <td>
                                    <a class="hover:tw-text-regal-blue" href="${item.link}" target="_blank">${item.link}</a>
                                </td>
                                <td>
                                    <Button class="btn_delete" data-id="${item.id}">Delete</Button>
                                    <Button><a href="/${item.id}/project-edit">Edit</a></Button>
                                </td>
                            </tr>
                            `).join('')
                        )}
                    </tbody>
                </table>
            </div>
        </div>
        `
    }

export default ProjectData