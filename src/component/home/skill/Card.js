const Card = () => {
  return /*html*/ `
        <div class="skill-item__card">
            <div class="header-card">
                <div class="img-card">
                    <img src="./src/img/skill_img/html.png" alt="" />
                </div>
                <h1 class="title-card">HTML</h1>
            </div>

            <div class="content-card">
                <a class="btn-link" href="#">
                    Xem dự án
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                    </svg>
                </a>
            </div>
        </div>
  `;
};

export default Card;
