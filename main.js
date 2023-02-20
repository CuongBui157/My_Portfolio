import { router, render } from "./src/lib";
import Home from "./src/component/home/Home";
import AdminPage from "./src/component/admin/AdminPage";
import AdminContent from "./src/component/admin/Banner/Content";
import AddContentLink from "./src/component/admin/Banner/AddContentLink";
import EditContentLink from "./src/component/admin/Banner/EditContentLink";

const container = document.querySelector(".container");

router.on("/home", () => render(Home, container));

// admin
router.on("/admin", () => render(AdminPage, container));

//content-link
router.on("/admin/listcontent", () => render(AdminContent, container));
router.on("/admin/listcontent/add", () => render(AddContentLink, container));
router.on("/admin/listcontent/:id/edit", ({ data }) =>
  render(() => EditContentLink(data), container)
);

router.resolve();
