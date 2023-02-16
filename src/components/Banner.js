import images from "@/asset/images";

function Banner() {
    return `
        <div class="tw-flex tw-relative tw-justify-between tw-items-center tw-min-h-screen tw-text-white">
            <div class="tw-flex-1 tw-p-9 tw-z-7">
                <h1 class="tw-text-4xl md:tw-text-7xl tw-font-bold ">
                    Hi, I'm 
                    </br>
                    <span class="md:tw-text-6xl tw-text-4xl tw-leading-tight tw-inline-flex tw-h-16 md:tw-h-24 tw-pt-2 tw-overflow-x-hidden tw-animate-type-reverse tw-whitespace-nowrap tw-text-brand-accent tw-will-change-transform">
                        Nguyễn Quang Đăng
                    </span><span class="tw-box-border tw-inline-block tw-w-1 tw-h-9 tw-bg-white md:tw-h-16 tw-animate-cursor tw-animate-toggle-text tw-will-change-transform">
                    </span>
                </h1>
                <h2 class="md:tw-text-3xl tw-text-2xl tw-my-4">
                    I have 1,5 years of experience in Web Development
                </h2>
                <p>
                    Should Hire me
                </p>
                <button class="tw-rounded-full tw-my-2 hover:tw-border-regal-blue hover:tw-text-regal-blue tw-border-2 tw-border-white tw-p-3">
                    <a href="#" target="_blank">
                        My resume >
                    </a>
                </button>
            </div>
            <div class="tw-flex-1 tw-absolute tw-right-0 tw-z-0 tw-bottom-0 lg:tw-relative tw-h-screen">
                <img class="tw-animate-img-line tw-transition-all tw-w-full lg:tw-w-1/2  tw-h-full tw-object-cover tw-block lg:tw-my-0 lg:tw-mx-auto" src="${images.avatar}" alt="Avatar"/>
            </div>
        </div>
    `;
}

export default Banner;