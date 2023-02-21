import { addListCustomers } from "../../../api/listofcustomers";
import { router, useEffect } from "../../../lib";

const Contact = () => {
  useEffect(() => {
    const form = document.getElementById("formAdd");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const newCustomer = {
        name: name.value,
        email: email.value,
        phone: phone.value,
      };

      addListCustomers(newCustomer).then(() => {
        router.navigate("/");
      });
    });
  });

  return /*html*/ `
        <h3>CONTACT</h3>
        <div class="contact-item">
            <form id="formAdd" action="">
                <div class="inputGroup">
                    <input type="text" id="name" required="" autocomplete="off" />
                    <label for="name">Your Name</label>
                </div>
                <div class="inputGroup">
                    <input type="text" id="email" required="" autocomplete="off" />
                    <label for="email">Your Email</label>
                </div>
                <div class="inputGroup">
                    <input type="number" id="phone" required="" autocomplete="off" />
                    <label for="phone">Your Phone</label>
                </div>
                <button class="btn">Submit</button>
            </form>

            <div class="contact-item__detail">
                <div class="detail_group">
                    <h1>EMAIL</h1>
                    <p>cuongbui1572003@gmail.com</p>
                </div>
                <div class="detail_group">
                    <h1>PHONE</h1>
                    <p>+84 38 247 0415<br>+84 38 606 1507</p>
                </div>
                <div class="detail_group">
                    <h1>ADDRESS</h1>
                    <p>Ngõ 80, Xuân Phương, Nam Từ Liêm, Hà Nội</p>
                </div>
            </div>
        </div>
  `;
};

export default Contact;
