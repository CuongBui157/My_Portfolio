import instance from "./config";

const getListCustomers = () => {
  return instance.get("/listCustomers");
};

const deleteListCustomers = (id) => {
  return instance.delete(`/listCustomers/${id}`);
};

const addListCustomers = (listCustomers) => {
  return instance.post("/listCustomers", listCustomers);
};

export { getListCustomers, addListCustomers, deleteListCustomers };
