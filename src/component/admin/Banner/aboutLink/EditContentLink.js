import { getContentLink, updateContentLink } from "../../../../api/contentLink";
import { useEffect, useState } from "../../../../lib";
import { router } from "../../../../lib";
import axios from "axios";

const EditContentLink = ({ id }) => {
  const [contentLink, setContentLink] = useState([]);

  useEffect(() => {
    getContentLink(id).then(({ data }) => setContentLink(data));
  }, []);

  useEffect(() => {
    const form = document.getElementById("form-add");
    const contentName = document.getElementById("content-name");
    const contentImg = document.getElementById("content-img");
    const contentLink = document.getElementById("content-link");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const url = await uploadFiles(contentImg.files);
      const newProduct = {
        name: contentName.value,
        img: url,
        link: contentLink.value,
      };

      updateContentLink(id, newProduct).then(() => {
        router.navigate("/admin/listcontent");
      });
    });
  });

  const uploadFiles = async (files) => {
    if (files) {
      const CLOUD_NAME = "dyewrrq39";
      const PRESET_NAME = "myportfolio";
      const FOLDER_NAME = "MyPortfolio";
      const url = [];
      const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

      const formData = new FormData();

      formData.append("upload_preset", PRESET_NAME);
      formData.append("folder", FOLDER_NAME);

      for (let file of files) {
        formData.append("file", file);

        const response = await axios.post(api, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        url.push(response.data.secure_url);
      }
      return url;
    }
  };

  return /*html*/ `
        <h1>Edit link</h1>
          <form id="form-add" action="">
            <div class="inputGroup">
              <label for="">Name</label>
              <input type="text" id="content-name" class="form-control" value="${contentLink.name}"/>
            </div>
            <div class="inputGroup">
              <label for="">Img-link</label>
              <input type="file" id="content-img" class="form-control" value="${contentLink.img}"/>
            </div>
            <div class="inputGroup">
              <label for="">Link</label>
              <input type="text" id="content-link" class="form-control" value="${contentLink.link}"/>
            </div>
            <button class="btn btn-primary">Edit Link</button>
          </form>
      `;
};

export default EditContentLink;
