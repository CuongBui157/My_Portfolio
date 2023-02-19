import ContentLink from "./ContentLink";

const Banner = () => {
  return /*html*/ `
        <div class="banner-hello">
            <h1>Xin chào, tôi là Cường 🙋‍♂️</h1>
        </div>
        <div class="banner-img">
            <div class="card">
                <h1>ABOUT ME</h1>
                <img
                src="./src/img/z4117398338096_7ae3add938cd770784a70ed21f9c0bd7.jpg"
                alt=""
                />

                <div class="content">
                <h3>ABOUT ME</h3>

                <p>
                    Chào các bạn, tôi là Bùi Tiến Cường. Hiện tại tôi là sinh viên
                    kỳ 5 tại FTP Polytechnic. <br />Tôi là một Front end Developer
                    chịu trách nhiệm phát triển giao diện bên ngoài của một
                    website dựa vào những bản thiết kế. <br />Email:
                    cuongbui1572003@gmail.com <br />SĐT: +84 38 247 0415
                </p>
                <div class="content-item__link">
                    ${ContentLink()}
                </div>
            </div>
        </div>
  `;
};

export default Banner;
