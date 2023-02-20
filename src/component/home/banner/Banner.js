import { getAboutContent } from "../../../api/aboutContent";
import { useEffect, useState } from "../../../lib";
import Content from "./Content";

const Banner = () => {
  const [aboutContent, setAboutContent] = useState({});
  useEffect(() => {
    getAboutContent(1).then(({ data }) => setAboutContent(data));
  },[]);
  return /*html*/ `
        <div class="banner-hello">
            <h1>${aboutContent.greeting}</h1>
        </div>
        <div class="banner-img">
            <div class="card">
                <h1>ABOUT ME</h1>
                <img
                src="${aboutContent.avatar}"
                alt=""
                />

                <div class="content">
                    ${Content()}
                </div>
            </div>
        </div>
  `;
};

export default Banner;
