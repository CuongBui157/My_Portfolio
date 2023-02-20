import { addContentLink } from "../../../api/contentLink";
import { router, useEffect } from "../../../lib";
import axios from "axios";

const AddContentLink = () => {
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

      addContentLink(newProduct).then(() => {
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
    <h1>Add a new link</h1>
      <form id="form-add" action="">
        <div class="inputGroup">
          <label for="">Name</label>
          <input type="text" id="content-name" class="form-control" />
        </div>
        <div class="inputGroup">
          <label for="">Img-link</label>
          <input type="file" id="content-img" class="form-control" />
        </div>
        <div class="inputGroup">
          <label for="">Link</label>
          <input type="text" id="content-link" class="form-control" />
        </div>
        <button class="btn btn-primary">Add new Link</button>
      </form>
  `;
};

export default AddContentLink;
