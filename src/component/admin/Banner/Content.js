import AdminHeader from "../AdminHeader";
import { deleteContentLink, getContentLinks } from "../../../api/contentLink";
import { useEffect, useState } from "../../../lib";

const AdminContent = () => {
  const [contentLinks, setContentLink] = useState([]);

  useEffect(() => {
    getContentLinks().then(({ data }) => setContentLink(data));
  }, []);

  useEffect(() => {
    const btns = document.querySelectorAll(".btn");
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        const id = btn.dataset.id;
        deleteContentLink(id).then(() => {
          const newContentLinks = contentLinks.filter(
            (contentLink) => contentLink.id != id
          );
          setContentLink(newContentLinks);
        });
      });
    }
  }, [contentLinks]);

  return /*html*/ `
        ${AdminHeader()}
        </div>
        <h1>ContentLink</h1>
        <a class="link-info" href="#/admin/listcontent/add">Add new Link</a>
        <table class="table table-bordered table-striped">
            <thead class="table-dark">
            <tr>
                <th>STT</th>
                <th>NAME</th>
                <th>IMG</th>
                <th>LINK</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
                ${contentLinks
                  .map((contentLink, index) => {
                    return /*html*/ `
                      <tr>
                        <th>${index + 1}</th>
                        <td>${contentLink.name}</td>
                        <td>
                            <img width="100px" src="${contentLink.img}" alt="">
                        </td>
                        <td>${contentLink.link}</td>
                        <td>
                        <button data-id="${
                          contentLink.id
                        }" class="btn btn-danger btn-remove">Delete</button>
                        <a class="link-success" href="#/admin/listcontent/${contentLink.id}/edit">Edit</a>
                        </td>
                    </tr>
                  `;
                  })
                  .join("")}
                        
                    
            </tbody>
        </table>
  `;
};

export default AdminContent;
