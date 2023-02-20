

function Session(backGroundColor = "", id, title, content) {
  
    return `
        <div id="${id}" class="${backGroundColor} tw-p-14">
            <h1 class="tw-text-regal-purple tw-font-bold tw-text-5xl tw-text-center tw-underline">${title}</h1>
            <div>
                ${content}
            </div>
        </div>
    `;
}

export default Session;