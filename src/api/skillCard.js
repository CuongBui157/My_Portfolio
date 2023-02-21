import instance from "./config";

const getSkillCards = () => {
  return instance.get("/skillCard");
};

const getSkillCard = (id) => {
  return instance.get(`/skillCard/${id}`);
};

const deleteSkillCard = (id) => {
  return instance.delete(`/skillCard/${id}`);
};

const addSkillCard = (skillCard) => {
  return instance.post("/skillCard", skillCard);
};

const updateSkillCard = (id, skillCard) => {
  return instance.put(`/skillCard/${id}`, skillCard);
};

export {
  getSkillCards,
  getSkillCard,
  deleteSkillCard,
  addSkillCard,
  updateSkillCard,
};
