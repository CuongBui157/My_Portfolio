import { router, render } from "./src/lib";
import Header from "./src/components/home/Header";
import Banner from "./src/components/home/Banner";
import Skill from "./src/components/home/Skill";
import Contact from "./src/components/home/Contact";

const header = document.querySelector("#header");
const banner = document.querySelector("#banner");
const skill = document.querySelector("#skill");
const contact = document.querySelector("#contact");

router.on("", () => render(Header(), header));
router.on("", () => render(Banner(), banner));
router.on("", () => render(Skill(), skill));
router.on("", () => render(Contact(), contact));

router.resolve();
