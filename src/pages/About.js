import images from "@/asset/images";
import Info from "@/components/Info";
import Session from "@/components/Session";
import SubSession from "@/components/SubSession";

function About() {

    return `
        ${Session('tw-bg-white','about', `About`, `
            <div class="tw-w-3/2 tw-gap-4 tw-py-14 tw-flex tw-flex-wrap tw-mx-auto">
                <div class="md:tw-w-1/6 lg:tw-w-1/4 tw-w-4/5 tw-mx-auto tw-overflow-hidden">
                    <img class="tw-w-full tw-h-full tw-object-cover" src="${images.avatar2}"/>
                </div>
                <div class="tw-flex-1">
                    ${SubSession('Web Developer', `
                        <p>
                            My name is Dang. I am a web designer and developer, I am currently studying at FPT Polytechnic College as a 4th term student. Besides studying at school, I also take extra classes outside or online like F8.fullstack, Udemy, ...
                        </p>
                        </br>
                        <p>
                            My goal is to become a Frontend developer. I have a passion for coding and am not afraid of difficulties and am always ready to receive new knowledge.
                        </p>
                    `)}
                    <div class="tw-flex tw-flex-wrap">
                        <div class="md:tw-flex-1 tw-w-full">
                            ${SubSession('More Info', `
                                ${Info('Full Name', 'Nguyễn Quang Đăng')}  
                                ${Info('Birth Day', '31/8/2003')}  
                                ${Info('Address', '46 Hàng Bồ, Hoàn Kiếm, Hà Nội')}  
                                ${Info('Phone', '<a href="tel:0396265650" target="_blank">0396265650</a>')}  
                                ${Info('Education', 'FPT Polytechnic')}  
                                ${Info('Email', '<a href="mailto: mrbat905@gmail.com" target="_blank">mrbat905@gmail.com</a>')}  
                                ${Info('GitHub', '<a href="https://github.com/DevidMonster" target="_blank">https://github.com/DevidMonster</a>')}  
                            `)}
                        </div>
                        <div class="md:tw-flex-1 tw-w-full">
                            ${SubSession('Skill', `
                                ${Info('Html, Css', 'Good')} 
                                ${Info('JavaScript', 'Medium')} 
                                ${Info('ReactJs', 'Medium')} 
                                ${Info('PHP, MySql', 'Medium')} 
                                ${Info('Swift', 'Week')} 
                                ${Info('NodeJs, Express', 'Medium')} 
                            `)}
                        </div>
                    </div>
                </div>
            </div>
        `)}
    `; 
}

export default About;