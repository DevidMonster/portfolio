import { router, render, routerAdmin } from "@/lib";
import DefaultLayout from "@/layouts/DefaultLayout";
import AdminLayout from "@/layouts/AdminLayout";
import ProjectData from "@/pages/admin/ProjectData";
import AddProject from "@/pages/admin/AddProject";
import EditProject from "@/pages/admin/EditProject";

const app = document.querySelector("#app")

router.on('/', () => render(() => DefaultLayout(), app));
routerAdmin.on('/project-admin', () => render(() => AdminLayout(ProjectData), app));
routerAdmin.on('/project-add', () => render(() => AdminLayout(AddProject), app));
routerAdmin.on('/:id/project-edit', ({ data }) => render(() => AdminLayout(() => EditProject(data)), app));

router.notFound(() => console.log("not found page"))
routerAdmin.notFound(() => console.log("not found page"))

router.resolve()
routerAdmin.resolve()

