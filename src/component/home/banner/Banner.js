import Content from "./Content";

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
                    ${Content()}
                </div>
            </div>
        </div>
  `;
};

export default Banner;
