import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";

import { menu } from "@/data";

function DefaultLayout() {

    return ` 
        <div id="home" class="tw-bg-gradient-to-br tw-from-regal-purple tw-to-regal-blue">
            ${Header(menu)}
            ${Banner()}
            ${About()}
            ${Projects()}
            ${Contact()}
            ${Footer()}
        </div>
    `;  
}

export default DefaultLayout;