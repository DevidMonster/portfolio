import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { menuAdmin } from "@/data";

function AdminLayout(Content) {
    return ` 
        <div id="home" class="tw-bg-gradient-to-br tw-from-regal-purple tw-to-regal-blue">
            ${Header(menuAdmin)}
            ${Content()}
            ${Footer()}
        </div>
    `;  
}

export default AdminLayout;