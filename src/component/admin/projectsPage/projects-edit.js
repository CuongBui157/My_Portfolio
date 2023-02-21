import { getProject, updateProject } from "../../../api/projectsPage";
import { getSkillCards } from "../../../api/skillCard";
import { router, useEffect, useState } from "../../../lib";

const EditProject = ({ id }) => {
  const [skillCards, setSkillCards] = useState([]);
  const [project, setProject] = useState({});

  useEffect(() => {
    getSkillCards().then(({ data }) => setSkillCards(data));
    getProject(id).then(({ data }) => setProject(data));
  }, []);

  useEffect(() => {
    const form = document.getElementById("form-add");
    const projectName = document.getElementById("project-name");
    const projectWeb = document.getElementById("project-web");
    const projectGithub = document.getElementById("project-github");
    const projectCardId = document.getElementById("project-cardid");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const newProject = {
        name: projectName.value,
        web: projectWeb.value,
        github: projectGithub.value,
        cardid: projectCardId.value,
      };

      updateProject(id, newProject).then(() => {
        router.navigate("/admin/projects");
      });
    });
  });

  return /*html*/ `
              <h1>Edit project</h1>
                <form id="form-add" action="">
                  <div class="inputGroup">
                    <label for="">NAME</label>
                    <input type="text" id="project-name" class="form-control" value="${
                      project.name
                    }"/>
                  </div>
                  <div class="inputGroup">
                    <label for="">WEB</label>
                    <input type="text" id="project-web" class="form-control" value="${
                      project.web
                    }"/>
                  </div>
                  <div class="inputGroup">
                    <label for="">GITHUB</label>
                    <input type="text" id="project-github" class="form-control" value="${
                      project.github
                    }"/>
                  </div>
                  <div class="inputGroup">
                    <label for="">CardId</label>
                      <select name="select" id="project-cardid" >
                          <option value="${
                            project.cardid
                          }">Choose a language</option>
                          ${skillCards.map((skillCard) => {
                            return /*html*/ `
                              <option value="${skillCard.id}">${skillCard.title}</option>
                                  `;
                          })}
                          
                      </select>
                  </div>
                  <button class="btn btn-primary">Update project</button>
                </form>
            `;
};

export default EditProject;
