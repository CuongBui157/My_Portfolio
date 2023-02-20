import {
  getAboutContent,
  updateAboutContent,
} from "../../../../api/aboutContent";
import { router, useEffect, useState } from "../../../../lib";
import axios from "axios";

const EditAbout = ({ id }) => {
  const [aboutContent, setAboutContent] = useState([]);

  useEffect(() => {
    getAboutContent(id).then(({ data }) => setAboutContent(data));
  }, []);

  useEffect(() => {
    const form = document.getElementById("form-add");
    const greeting = document.getElementById("about-greeting");
    const avatar = document.getElementById("about-avatar");
    const content = document.getElementById("about-content");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const url = await uploadFiles(avatar.files);

      const newContent = {
        greeting: greeting.value,
        avatar: url,
        content: content.value,
      };

      updateAboutContent(id, newContent).then(() => {
        router.navigate("/admin/about");
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
          <h1>Edit content</h1>
            <form id="form-add" action="">
              <div class="inputGroup">
                <label for="">Greeting</label>
                <input type="text" id="about-greeting" class="form-control" value="${aboutContent.greeting}"/>
              </div>
              <div class="inputGroup">
                <label for="">Avatar</label>
                <input type="file" id="about-avatar" class="form-control" value="${aboutContent.avatar}"/>
              </div>
              <div class="inputGroup">
                <label for="">Content</label>
                <textarea id="about-content" class="form-control" maxlength="270" placeholder="Tối đa 270 ký tự" >${aboutContent.content}</textarea>
              </div>
              <button class="btn btn-primary">Update Content</button>
            </form>
        `;
};

export default EditAbout;
