import { getAboutContent } from "../../../api/aboutContent";
import { getContentLinks } from "../../../api/contentLink";
import { useEffect, useState } from "../../../lib";

const Content = () => {
  const [contentLinks, setContentLink] = useState([]);
  const [aboutContent, setAboutContent] = useState({});

  useEffect(() => {
    getContentLinks().then(({ data }) => setContentLink(data));
  }, []);

  useEffect(() => {
    getAboutContent(1).then(({ data }) => setAboutContent(data));
  }, []);
  return /*html*/ `
        <h3>ABOUT ME</h3>

        <p>
            ${aboutContent.content}
        </p>
        <div class="content-item__link">
            ${contentLinks
              .map((contentLink) => {
                for (let i = 0; i < 4; i++) {
                  return `
                    <a href="${contentLink.link}">
                        <img
                            src="${contentLink.img}"
                            alt=""
                        />
                    </a>
                    `;
                }
              })
              .join("")}
        </div>
  `;
};

export default Content;
