import images from "@/asset/images";
import { useEffect } from "@/lib";

function Banner() {
    useEffect(() => {
        const bannerText = document.querySelector('#banner_text')
        const text = bannerText.querySelectorAll('.typed-cursor')
        if(text.length === 0) {
            const typed = new Typed('#text', {
                strings: ['', 'Nguyễn Quang Đăng'],
                loop: true,
                typeSpeed: 100,
                backSpeed: 20,
                backDelay: 1000,
            })
        }

    })
    
    return `
        <div class="tw-flex tw-relative tw-justify-between tw-overflow-hidden tw-items-center tw-min-h-screen tw-text-white">
            <div class="tw-flex-1 tw-p-9 tw-z-7">
                <h1 id="banner_text" class="tw-text-left tw-text-4xl md:tw-text-7xl tw-font-bold ">
                    Hi, I'm 
                    </br>
                    <span id="text" class="md:tw-text-6xl tw-text-4xl tw-h-16 md:tw-h-24 tw-pt-2">
                    </span>
                </h1>
                <h2 class="md:tw-text-3xl tw-text-2xl tw-my-4">
                    I have 1 year of web development experience
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
            <div class="before:tw-absolute before:tw-top-0 before:tw-left-0 before:tw-rotate-180 before:tw-animate-item-line  before:tw-transition-all before:tw-block before:tw-w-500 before:tw-h-500 before:tw-rounded-full before:tw-bg-gradient-to-br before:tw-from-pink-500 before:tw-to-orange-300 tw-flex-1 tw-absolute tw-right-0 tw-z-0 tw-bottom-0 lg:tw-relative tw-h-screen">
                <img class="tw-animate-img-line tw-transition-all tw-z-10 lg:tw-absolute lg:tw-top-6 lg:tw-right-1/3 tw-h-full tw-object-cover tw-block lg:tw-my-0 lg:tw-mx-auto" src="${images.avatar}" alt="Avatar"/>
            </div>
        </div>
    `;
}

export default Banner;