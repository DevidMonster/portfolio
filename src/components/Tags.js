import { useEffect } from "@/lib";

function Tags(handleClick) {

    useEffect(() => {
        const inputTag = document.querySelector(".Text-Tag")
        const btnAddTag = document.querySelector(".btn-addTag")

        btnAddTag.addEventListener('click', () => {
            handleClick(inputTag.value)
        })
    })

    return `
        <input type="text" placeholder="Type Here" class="Text-Tag">
        <button type="button" class="tw-rounded tw-text-white tw-bg-regal-purple btn-addTag">Add Tag</button>
    `;
}

export default Tags;