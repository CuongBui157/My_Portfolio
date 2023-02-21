import instance from "./config";

const getProjects = () => {
  return instance.get("/projects");
};

const getProject = (id) => {
  return instance.get(`/projects/${id}`);
};

const deleteProject = (id) => {
  return instance.delete(`/projects/${id}`);
};

const addProject = (project) => {
  return instance.post("/projects", project);
};

const updateProject = (id, project) => {
  return instance.put(`/projects/${id}`, project);
};

export { getProjects, getProject, deleteProject, addProject, updateProject };
