import { router, render } from "@/lib";
import DefaultLayout from "@/layouts/DefaultLayout";

window.scroll({ behavior: "smooth" })
const app = document.querySelector("#app")

router.on('/', () => render(() => DefaultLayout(), app));

router.notFound(() => console.log("not found page"))

router.resolve()

