import { deleteProject, getProjects } from "../../../api/projectsPage";
import { useEffect, useState } from "../../../lib";

const AdminProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then(({ data }) => setProjects(data));
  }, []);

  useEffect(() => {
    const btns = document.querySelectorAll(".btn");
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        const id = btn.dataset.id;
        deleteProject(id).then(() => {
          const newProjects = projects.filter((project) => project.id != id);
          setProjects(newProjects);
        });
      });
    }
  }, [projects]);

  return /*html*/ `
        <a class="nav-link" href="/admin">Trở về trang menu</a>
        <h1>Projects</h1>
        <a class="link-info" href="#/admin/projects/add">Add new card</a>
        <table class="table table-bordered table-striped">
            <thead class="table-dark">
            <tr>
                <th>STT</th>
                <th>NAME</th>
                <th>LINK WEB</th>
                <th>LINK GITHUB</th>
                <th>CardId</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
                ${projects
                  .map((project, index) => {
                    return /*html*/ `
                      <tr>
                        <td>${index + 1}</td>
                        <td>${project.name}</td>
                        <td>${project.web}</td>
                        <td>${project.github}</td>
                        <td>${project.cardid}</td>
                        <td>
                        <button data-id="${
                          project.id
                        }" class="btn btn-danger btn-remove">Delete</button>
                        <a class="link-success" href="#/admin/projects/${
                          project.id
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

export default AdminProjects;
