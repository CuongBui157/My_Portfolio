import Header from "./Header";
import Banner from "./banner/Banner";
import Skill from "./skill/Skill";
import Contact from "./Contact";

const Container = () => {
  return /*html*/ `
        <div id="header"></div>

        <main>
            <div id="banner"></div>
            <div id="skill"></div>
            <div id="contact"></div>
        </main>
        <p class="author">Created and Developed by @BuiTienCuong</p>
  `;
};

export default Container;
