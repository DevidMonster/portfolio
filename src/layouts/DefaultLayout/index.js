import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";

function DefaultLayout() {
    return ` 
        <div class="tw-bg-gradient-to-br tw-from-regal-purple tw-to-regal-blue">
            ${Header()}
            ${Banner()}
            ${About()}
            ${Projects()}
            ${Contact()}
            ${Footer()}
        </div>
    `;  
}

export default DefaultLayout;