import {
  deleteAboutContent,
  getAboutContents,
} from "../../../../api/aboutContent";
import { useEffect, useState } from "../../../../lib";

const About = () => {
  const [aboutContents, setAboutContents] = useState([]);

  useEffect(() => {
    getAboutContents().then(({ data }) => setAboutContents(data));
  }, []);

  useEffect(() => {
    const btns = document.querySelectorAll(".btn");

    for (let btn of btns) {
      btn.addEventListener("click", function () {
        const id = btn.dataset.id;

        deleteAboutContent(id).then(() => {
          const newAboutContent = aboutContents.filter(
            (aboutContent) => aboutContent.id != id
          );
          setAboutContents(newAboutContent);
        });
      });
    }
  }, [aboutContents]);

  return /*html*/ `
        <a class="nav-link" href="/admin">Trở về trang menu</a>
        <h1>About Admin</h1>
        <a class="link-info" href="#/admin/about/add">Add new content</a>
        <table class="table table-bordered table-striped">
            <thead class="table-dark">
            <tr>
                <th>STT</th>
                <th>GREETING</th>
                <th>AVATAR</th>
                <th>CONTENT</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
                ${aboutContents
                  .map((aboutContent, index) => {
                    return /*html*/ ` 
                  <tr>
                        <th>${index + 1}</th>
                        <td>${aboutContent.greeting}</td>
                        <td>
                            <img width="100px" src="${
                              aboutContent.avatar
                            }" alt="">
                        </td>
                        <td>${aboutContent.content}</td>
                        <td>
                        <button data-id="${
                          aboutContent.id
                        }" class="btn btn-danger btn-remove">Delete</button>
                        <a class="link-success" href="#/admin/about/${
                          aboutContent.id
                        }/edit">Edit</a>
                        </td>
                    </tr>`;
                  })
                  .join("")}
            </tbody>
        </table>
    `;
};

export default About;
