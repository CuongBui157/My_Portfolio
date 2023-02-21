import { getProjects } from "../../api/projectsPage";
import { getSkillCard } from "../../api/skillCard";
import { useEffect, useState } from "../../lib";

const projectsPage = ({ id }) => {
  const [projects, setProjects] = useState([]);
  const [skillCard, setSkillCard] = useState([]);

  useEffect(() => {
    getProjects().then(({ data }) => setProjects(data));
    getSkillCard(id).then(({ data }) => setSkillCard(data));
  }, []);

  return /*html*/ `
        <a href="/">Về trang chủ</a>
        <h1>Danh sách dự án ${skillCard.title}</h1>
        <ul class="list-group">
            ${projects
              .map((project) => {
                console.log(projects);
                if (project.cardid == id) {
                  return /*html*/ `<li class="list-group-item"><a href="">${project.name}</a></li>`;
                }
              })
              .join("")}
        </ul>
  `;
};

export default projectsPage;
