import { getSkillCards } from "../../../api/skillCard";
import { useEffect, useState } from "../../../lib";

const Card = () => {
  const [skillCards, setSkillCards] = useState([]);

  useEffect(() => {
    getSkillCards().then(({ data }) => setSkillCards(data));
  }, []);

  return /*html*/ `
            ${skillCards
              .map((card) => {
                for (let i = 0; i < 3; i++) {
                  return /*html*/ `
                        <div class="skill-item__card">
                            <div class="header-card">
                                <div class="img-card">
                                    <img src="${card.logo}" alt="" />
                                </div>
                                <h1 class="title-card">${card.title}</h1>
                            </div>
                
                            <div class="content-card">
                                <a class="btn-link" href="#/${card.id}/projects">
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
                }
              })
              .join("")}
  `;
};

export default Card;
