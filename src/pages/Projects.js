import images from "@/asset/images";
import Item from "@/components/Item";
import Session from "@/components/Session";

function Projects() {
    return `
        ${Session('','project', 'Portfolio', `
          <div class="tw-flex tw-justify-center tw-items-center tw-flex-wrap tw-gap-6 tw-my-7">
              ${Item(`${images.project1}`, 'DevidShop || Fashion', 'Website selling clothes, serving customers', ["ReactJs", "NodeJs", "Express", "MongoDB"],'https://www.quangdang.ml/')}
              ${Item(`${images.project2}`, 'Xoss || Fashion', 'Website selling clothes, serving customers', ["PHP", "MySQL", "JavaScript"],'http://xoss.nguyenquangdang.ml')}
          </div>
          <a class="tw-underline tw-block tw-text-center tw-text-2xl tw-text-white hover:tw-text-regal-blue" target="_blank" href="https://github.com/DevidMonster">See on GitHub</a>
        `)}
    `;
}

export default Projects;