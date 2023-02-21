import {
  deleteListCustomers,
  getListCustomers,
} from "../../../api/listofcustomers";
import { useEffect, useState } from "../../../lib";

const ListOfCustomers = () => {
  const [listCustomers, setListCustomers] = useState([]);

  useEffect(() => {
    getListCustomers().then(({ data }) => setListCustomers(data));
  }, []);

  useEffect(() => {
    const btns = document.querySelectorAll(".btn");
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        const id = btn.dataset.id;
        deleteListCustomers(id).then(() => {
          const newListCustomers = listCustomers.filter(
            (customer) => customer.id != id
          );
          setListCustomers(newListCustomers);
        });
      });
    }
  }, [listCustomers]);

  return /*html*/ `
          <a class="nav-link" href="/admin">Trở về trang menu</a>
          <h1>List Of Customers</h1>
          <table class="table table-bordered table-striped">
              <thead class="table-dark">
              <tr>
                  <th>STT</th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>PHONE</th>
                  <th></th>
              </tr>
              </thead>
              <tbody>
                  ${listCustomers
                    .map((customer, index) => {
                      return /*html*/ `
                        <tr>
                          <th>${index + 1}</th>
                          <td>${customer.name}</td>
                          <td>${customer.email}</td>
                          <td>${customer.phone}</td>
                          <td>
                          <button data-id="${
                            customer.id
                          }" class="btn btn-danger btn-remove">Delete</button>
                          </td>
                      </tr>
                    `;
                    })
                    .join("")}
                          
                      
              </tbody>
          </table>
    `;
};

export default ListOfCustomers;
