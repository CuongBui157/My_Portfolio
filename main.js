import { router, render } from "./src/lib";
import Home from "./src/component/home/Home";

// admin
import AdminPage from "./src/component/admin/AdminPage";

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

const container = document.querySelector(".container");

router.on("/", () => render(Home, container));

// admin
router.on("/admin", () => render(AdminPage, container));

//About-link
router.on("/admin/listcontent", () => render(AdminContent, container));
router.on("/admin/listcontent/add", () => render(AddContentLink, container));
router.on("/admin/listcontent/:id/edit", ({ data }) =>
  render(() => EditContentLink(data), container)
);

//About-content
router.on("/admin/about", () => render(About, container));
router.on("/admin/about/add", () => render(AddAbout, container));
router.on("/admin/about/:id/edit", ({ data }) =>
  render(() => EditAbout(data), container)
);

//Skill-card
router.on("/admin/card", () => render(AdminCard, container));
router.on("/admin/card/add", () => render(AddAdminCard, container));
router.on("/admin/card/:id/edit", ({ data }) =>
  render(() => EditAdminCard(data), container)
);

router.resolve();
