import "./css/index.css";
import { render, router } from "./lib";
import Header from "./components/Header";
import Skill from "./components/Skill";

const header = document.querySelector("#header");
const skill = document.querySelector("#skill");

router.on("/", () => render(Header(), header));
router.on("/", () => render(Skill(), skill));

router.resolve();
