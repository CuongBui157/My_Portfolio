import { addSkillCard } from "../../../api/skillCard";
import { router, useEffect } from "../../../lib";
import axios from "axios";

const AddAdminCard = () => {
  useEffect(() => {
    const form = document.getElementById("form-add");
    const cardLogo = document.getElementById("card-logo");
    const cardTitle = document.getElementById("card-title");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const url = await uploadFiles(cardLogo.files);

      const newCard = {
        logo: url,
        title: cardTitle.value,
      };

      addSkillCard(newCard).then(() => {
        router.navigate("/admin/card");
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
        <h1>Add a new card</h1>
          <form id="form-add" action="">
            <div class="inputGroup">
              <label for="">LOGO</label>
              <input type="file" id="card-logo" class="form-control" />
            </div>
            <div class="inputGroup">
              <label for="">TITLE</label>
              <input type="text" id="card-title" class="form-control" />
            </div>
            <button class="btn btn-primary">Add card</button>
          </form>
      `;
};

export default AddAdminCard;
