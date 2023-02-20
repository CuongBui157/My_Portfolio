import Header from "./header/Header";
import Banner from "./banner/Banner";
import Skill from "./skill/Skill";
import Contact from "./contact/Contact";

const Home = () => {
  return /*html*/ `
    <div class="home">
        <div id="header">
            ${Header()}
        </div>

        <main>
        <div id="banner">
            ${Banner()}
        </div>
        <div id="skill">
            ${Skill()}
        </div>
        <div id="contact">
            ${Contact()}
        </div>
        </main>
        <p class="author">Created and Developed by @BuiTienCuong</p>
    </div>
  `;
};

export default Home;
