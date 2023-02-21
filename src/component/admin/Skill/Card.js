import { deleteSkillCard, getSkillCards } from "../../../api/skillCard";
import { useEffect, useState } from "../../../lib";

const AdminCard = () => {
  const [skillCards, setSkillCards] = useState([]);

  useEffect(() => {
    getSkillCards().then(({ data }) => setSkillCards(data));
  }, []);

  useEffect(() => {
    const btns = document.querySelectorAll(".btn");
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        const id = btn.dataset.id;
        deleteSkillCard(id).then(() => {
          const newSkillCards = skillCards.filter(
            (skillCard) => skillCard.id != id
          );
          setSkillCards(newSkillCards);
        });
      });
    }
  }, [skillCards]);

  return /*html*/ `
        <a class="nav-link" href="/admin">Trở về trang menu</a>
        <h1>SkillCard</h1>
        <a class="link-info" href="#/admin/card/add">Add new card</a>
        <table class="table table-bordered table-striped">
            <thead class="table-dark">
            <tr>
                <th>STT</th>
                <th>LOGO</th>
                <th>TITLE</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
                ${skillCards
                  .map((skillCard, index) => {
                    return /*html*/ `
                      <tr>
                        <th>${index + 1}</th>
                        <td>
                            <img width="100px" src="${skillCard.logo}" alt="">
                        </td>
                        <td>${skillCard.title}</td>
                        <td>
                        <button data-id="${
                          skillCard.id
                        }" class="btn btn-danger btn-remove">Delete</button>
                        <a class="link-success" href="#/admin/card/${
                          skillCard.id
                        }/edit">Edit</a>
                        </td>
                    </tr>
                  `;
                  })
                  .join("")}
                        
                    
            </tbody>
        </table>
  `;
};

export default AdminCard;
