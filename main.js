import Banner from "./src/components/home/banner/Banner";
import Contact from "./src/components/home/Contact";
import Header from "./src/components/home/Header";
import Skill from "./src/components/home/skill/Skill";
import "./src/css/index.css";

const header = document.querySelector("#header");
const banner = document.querySelector("#banner");
const skill = document.querySelector("#skill");
const contact = document.querySelector("#contact");

import { router, render } from "./src/lib";

router.on("", () => render(Header(), header));
router.on("", () => render(Banner(), banner));
router.on("", () => render(Skill(), skill));
router.on("", () => render(Contact(), contact));

router.resolve();
