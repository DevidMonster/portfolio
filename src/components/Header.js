import images from "@/asset/images";
import { useEffect } from "@/lib";
import tippy from "tippy.js";
import 'tippy.js/dist/tippy.css'

function Header(menu) {

    useEffect(() => {
        tippy('#menu_btn', {
            content: `<ul>         
                ${menu.map(item => `
                    <li><a href="${item.link}" class="tw-w-48 tw-text-white tw-block tw-p-3 tw-rounded-xl hover:tw-bg-regal-blue-tight" data-navigo>${item.title}</a></li>
                `).join('')}
            </ul>`,
            trigger: 'click',
            allowHTML: true,
            animation: 'fade',
            interactive: true,
            hideOnClick: true,
        })
    })
    return `
        <div class="tw-flex tw-justify-between tw-p-8 tw-items-center tw-sticky tw-backdrop-blur-lg tw-z-10 tw-top-0 tw-px-8 tw-shadow-md tw-h-16 tw-border-b tw-border-gray-500 tw-text-white tw-font-bold">
            <a href="/"><img class=""  src="${images.logo}" alt="Nguyễn Quang Đăng"/></a>
            <ul id="menu" class="tw-hidden tw-gap-4 md:tw-flex">
                ${menu.map(item => `
                    <li>
                        <a class="tw-text-regal-purple hover:tw-text-regal-blue-tight tw-text-2xl tw-duration-300" href="${item.link}" data-navigo>${item.title}</a>
                    </li>
                `).join('')}
            </ul>
            
            <!-- This is used to open the menu on mobile devices -->
            <div class="tw-flex tw-items-center md:tw-hidden">
                <button id="menu_btn" class="tw-text-regal-purple tw-text-4xl tw-font-bold tw-opacity-70 hover:tw-opacity-100 tw-duration-300">
                    &#9776;
                </button>
            </div>
        </div>

    `;
}

export default Header;