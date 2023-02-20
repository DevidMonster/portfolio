import images from "@/asset/images";

function Loading() {
    return `
        <p class="tw-block tw-w-10 tw-h-10 tw-rounded-full tw-border-1 tw-animate-rotate tw-border-white tw-text-white tw-text-center tw-p-3 tw-mx-auto">
            <img src="${images.loaderWhite}" alt="loader"/> 
        </p>
    `;
}

export default Loading;