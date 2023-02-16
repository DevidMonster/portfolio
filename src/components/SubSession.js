function SubSession(title, content) {
    return `
        <div class="tw-mt-3">
            <h1 class="tw-text-2xl tw-text-regal-blue tw-underline">${title}</h1>
            <div>
                ${content}
            </div>
        </div>
    `;
}

export default SubSession;