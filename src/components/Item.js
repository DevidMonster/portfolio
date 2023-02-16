function Item(image, name, description, frameWork = [], link) {
    return `
        <div class="tw-bg-white tw-gap-1 md:tw-w-1/4 tw-flex tw-flex-col tw-rounded-xl hover:tw-scale-105 tw-transition-all tw-h-96">
            <img src="${image}" class="tw-rounded-xl tw-w-full tw-h-40"/>
            <h1 class="tw-px-3 tw-font-bold tw-text-regal-purple">> ${name}</h1>
            <ul class="tw-px-3 tw-flex tw-gap-2 tw-flex-wrap">
                ${frameWork.map(item => `
                    <li class="tw-font-medium">${item}</li>
                `).join(' - ')}
            </ul>
            <p class="tw-px-3 tw-flex-1">${description}</p>
            <a href="${link}" target="_blank" class="tw-m-3 tw-block tw-p-3 tw-rounded-lg tw-mx-auto tw-border-2 tw-border-regal-blue tw-text-regal-blue hover:tw-text-regal-purple hover:tw-border-regal-purple">Go to web</a>
        </div>
    `;
}

export default Item;