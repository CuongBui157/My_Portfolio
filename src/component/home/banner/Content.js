import { getContentLinks } from "../../../api/contentLink";
import { useEffect ,useState } from "../../../lib";

const Content = () => {
  const [contentLinks, setContentLink] = useState([]);

  useEffect(() => {
    getContentLinks().then(({ data }) => setContentLink(data));
  }, []);

  return /*html*/ `
        <h3>ABOUT ME</h3>

        <p>
            Chào các bạn, tôi là Bùi Tiến Cường. Hiện tại tôi là sinh viên
            kỳ 5 tại FTP Polytechnic. <br />Tôi là một Front end Developer
            chịu trách nhiệm phát triển giao diện bên ngoài của một
            website dựa vào những bản thiết kế. <br />Email:
            cuongbui1572003@gmail.com <br />SĐT: +84 38 247 0415
        </p>
        <div class="content-item__link">
            ${contentLinks.map((contentLink) => {
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
            }).join("")}
        </div>
  `;
};

export default Content;
