function Item(image, name, description, frameWork = [], link) {
    return `
        <div class="tw-bg-white tw-gap-1 md:tw-w-2/6 tw-flex tw-flex-col tw-rounded-xl hover:tw-scale-105 tw-transition-all tw-h-3/4">
            <img src="${image}" class="tw-rounded-xl tw-w-full tw-h-2/5"/>
            <h1 class="tw-px-3 tw-text-xl tw-text-left tw-font-bold tw-text-regal-purple">> ${name}</h1>
            <ul class="tw-px-3 tw-flex tw-gap-2 tw-flex-wrap">
                ${frameWork.map(item => `
                    <li class="tw-p-1 tw-rounded tw-border-1 tw-border-regal-purple tw-font-medium">${item}</li>
                `).join(' ')}
            </ul>
            <p class="tw-px-3 tw-flex-1">${description}</p>
            <a href="${link}" target="_blank" class="tw-m-3 tw-block tw-p-3 tw-rounded-lg tw-mx-auto tw-border-2 tw-border-regal-purple tw-text-regal-purple hover:tw-text-regal-blue hover:tw-border-regal-blue">View web</a>
        </div>
    `;
}

export default Item;