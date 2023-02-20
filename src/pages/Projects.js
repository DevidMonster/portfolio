import images from "@/asset/images";
import Item from "@/components/Item";
import Session from "@/components/Session";

function Projects(projects) {


    return `
        ${Session('','project', 'Portfolio', `
          <div class="tw-flex tw-h-screen tw-justify-center tw-items-center tw-flex-wrap tw-gap-6 tw-my-7">
                ${projects.map(item => `
                    ${Item(`${item.images[0]}`, item.name, item.description, item.techs, item.link)}
                `).join('')}
          </div>
          <a class="tw-underline tw-block tw-text-center tw-text-2xl tw-text-white hover:tw-text-regal-blue" target="_blank" href="https://github.com/DevidMonster">See more and detail on GitHub</a>
        `)}
    `;
}

export default Projects;