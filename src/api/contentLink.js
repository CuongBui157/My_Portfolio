import instance from "./config";

const getContentLinks = () => {
  return instance.get("/contentLink");
};

const getContentLink = (id) => {
  return instance.get(`/contentLink/${id}`);
};

const deleteContentLink = (id) => {
  return instance.delete(`/contentLink/${id}`);
};

const addContentLink = (contentLink) => {
  return instance.post("/contentLink",contentLink);
};

const updateContentLink = (id,contentLink) => {
  return instance.put(`/contentLink/${id}`,contentLink);
};

export {
  getContentLinks,
  getContentLink,
  deleteContentLink,
  addContentLink,
  updateContentLink,
};
