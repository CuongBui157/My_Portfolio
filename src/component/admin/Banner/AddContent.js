import { addContentLink } from "../../../api/contentLink";

const AddAdminContent = () => {
  return /*html*/ `
    <h1>Thêm link mới</h1>
    <form action="">
        <label id="name" for="name">name</label>
        <input type="file" id="img" />
        <input type="text" id="link" />
        <button class="btn btn-success">ADD newLink</button>
    </form>
  `;
};

export default AddAdminContent;
