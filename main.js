import { router, render } from "./src/lib";
import Home from "./src/component/home/Home";

// admin
import AdminPage from "./src/component/admin/AdminPage";
import projectsPage from "./src/component/projectsPage/projectsPage";

//About-link
import AdminContent from "./src/component/admin/Banner/aboutLink/Content";
import AddContentLink from "./src/component/admin/Banner/aboutLink/AddContentLink";
import EditContentLink from "./src/component/admin/Banner/aboutLink/EditContentLink";

//About-content
import About from "./src/component/admin/Banner/about_content/About";
import AddAbout from "./src/component/admin/Banner/about_content/AddAbout";
import EditAbout from "./src/component/admin/Banner/about_content/EditAbout";

//Skill-card
import AdminCard from "./src/component/admin/Skill/Card";
import AddAdminCard from "./src/component/admin/Skill/AddCard";
import EditAdminCard from "./src/component/admin/Skill/EditCard";
import AdminProjects from "./src/component/admin/projectsPage/projects";
import AddProject from "./src/component/admin/projectsPage/projetcs-add";
import EditProject from "./src/component/admin/projectsPage/projects-edit";
import ListOfCustomers from "./src/component/admin/Contact/ListOfCustomers";

const container = document.querySelector(".container");

router.on("/", () => render(Home, container));

//projectsPage
router.on("/:id/projects", ({ data }) =>
  render(() => projectsPage(data), container)
);

// admin
router.on("/admin", () => render(AdminPage, container));

//admin-About-link
router.on("/admin/listcontent", () => render(AdminContent, container));
router.on("/admin/listcontent/add", () => render(AddContentLink, container));
router.on("/admin/listcontent/:id/edit", ({ data }) =>
  render(() => EditContentLink(data), container)
);

//admin-About-content
router.on("/admin/about", () => render(About, container));
router.on("/admin/about/add", () => render(AddAbout, container));
router.on("/admin/about/:id/edit", ({ data }) =>
  render(() => EditAbout(data), container)
);

//admin-Skill-card
router.on("/admin/card", () => render(AdminCard, container));
router.on("/admin/card/add", () => render(AddAdminCard, container));
router.on("/admin/card/:id/edit", ({ data }) =>
  render(() => EditAdminCard(data), container)
);

//admin-projectsPage
router.on("/admin/projects", () => render(AdminProjects, container));
router.on("/admin/projects/add", () => render(AddProject, container));
router.on("/admin/projects/:id/edit", ({ data }) =>
  render(() => EditProject(data), container)
);

//admin-ListOfCustomers
router.on("/admin/listcustomers", () => render(ListOfCustomers, container));

router.resolve();
