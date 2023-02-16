
import images from "@/asset/images";
import Session from "@/components/Session";

function Contact() {
    return `
        ${Session('tw-bg-white','contact', 'Contact', `
            <div class="tw-flex tw-justify-center tw-gap-6 tw-h-40 tw-p-6">
                <a class="tw-mt-5"  target="_blank" href="https://www.facebook.com/profile.php?id=100027646819920" ><img src="${images.facebook}" alt="facebook"/></a>
                <a class="tw-mt-5" target="_blank" href="mailto: mrbat905@gmail.com"><img src="${images.gmail}" alt="gmail"/></a>
                <a class="tw-mt-5" target="_blank" href="https://github.com/DevidMonster"><img src="${images.github}" alt="github"/></a>
            </div>
            
        `)}
        <div>
            <p class="tw-bg-white tw-h-24 tw-text-1xl md:tw-text-3xl tw-text-regal-purple tw-text-center">Currently active looking for Frontend Developer Internship</p>
        </div>
    `;
}

export default Contact;