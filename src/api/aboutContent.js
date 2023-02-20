import instance from "./config";

const getAboutContents = () => {
  return instance.get("/aboutContent");
};

const getAboutContent = (id) => {
  return instance.get(`/aboutContent/${id}`);
};

const deleteAboutContent = (id) => {
  return instance.delete(`/aboutContent/${id}`);
};

const addAboutContent = (aboutContent) => {
  return instance.post("/aboutContent", aboutContent);
};

const updateAboutContent = (id, aboutContent) => {
  return instance.put(`/aboutContent/${id}`, aboutContent);
};

export {
  getAboutContents,
  getAboutContent,
  addAboutContent,
  deleteAboutContent,
  updateAboutContent,
};
