import Tags from "@/components/tags"
import { router, useEffect, useState } from "@/lib"
import { request } from "@/util/httpRequest"

function AddProject() {
    const [listTag, setListTag] = useState([...new Set([])])
    const postAPI = async (option) => { 
        const dataResult = request.post("/projects", {
            ...option
        }, {
            headers: {
                "Content-type": 'application/json'
            }
        })
        console.log(dataResult)
        router.navigate("/project-admin")
    }

    useEffect(() => {
        const form = document.querySelector(".form_submit")
        const inpValue = document.querySelector(".inp_add")
        const inpDes = document.querySelector(".inp_des")
        const inpLink = document.querySelector(".inp_link")
        const imageValue = document.querySelector(".inp_add_file")
        
        form.addEventListener('submit',async (e) => {
            e.preventDefault()
            console.log(imageValue.files)
            const urls = await uploadFiles(imageValue.files)
            postAPI({
                name: inpValue.value,
                images: urls,
                techs: listTag,
                description: inpDes.value,
                link: inpLink.value
            })
           
            
        })

    })

    useEffect(() => {
        const btn_remove = document.querySelectorAll('.btn-delete')
        if(btn_remove.length > 0) {
            for(const btn of btn_remove) {
                btn.addEventListener('click', function() {
                    handleDelete(this.dataset.id)
                })
            }
        }
    })

    const handleClick = (value) => {
        console.log(value)
        if(value !== "") {
            setListTag(prev => [...new Set([...prev, value])])
        }
    }

    const handleDelete = (value) => {
        console.log(value)
        setListTag(prev => prev.filter(item => item !== value))
    }


    const uploadFiles = async(files) => {
        console.log(files)
        const CLOUND_NAME = "dpwto5xyv"
        const PRESET_NAME = "shopDV-upload"
        const FOLDER_NAME = "learnECMAS"
        const urls = [];
        const api = `https://api.cloudinary.com/v1_1/${CLOUND_NAME}/image/upload`

        const formData = new FormData()

        formData.append('upload_preset', PRESET_NAME)
        formData.append('folder', FOLDER_NAME)

        for(const file of files) {
            formData.append('file', file)

            const dataResult = await request.post(api,formData,{
                headers: {
                    "Content-type": 'multipart/form-data'
                }
            })
            urls.push(dataResult.secure_url)
        }
        return urls
    }
console.log(listTag)
    return /*html*/`
        <div class="add_container tw-w-4/5 tw-mx-auto tw-min-h-screen tw-text-white">
            <h1>Add New Project</h1>
            <form class="form_submit">
                <div class="tw-py-3">
                    <h2>Add Tech</h2>
                    <div class="box">
                        ${listTag.map(item => `
                            <li class="Tag">
                                <span>${item}</span>
                                <a class="btn-delete tw-cursor-pointer" data-id="${item}">X</a>
                            </li>
                        `).join('')}
                    </div>
                    ${Tags(handleClick)}
                </div>
                <label>Name Project</label>
                <input class="inp_add" type="text" placeholder="Type Name here..." required/>
                <br/>
                <label>Picture Project</label>
                </br>
                <input class="inp_add_file" type="file" multiple placeholder="Choose Images" required/>
                </br>
                <label>Description</label>
                <textarea required class="inp_des tw-w-full tw-bg-transparent tw-border-1 tw-border-white tw-p-3" rows="8" placeholder="Enter description"></textarea>
                <label>Link Web</label>
                <input required class="inp_link" type="text" placeholder="Type Link here..."/>
                <button class="btn_add">Add Project</button>
            </form>
        </div>
    `
}

export default AddProject