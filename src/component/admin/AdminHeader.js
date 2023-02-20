const AdminHeader = () => {
  return /*html*/ `
        <div class="admin-list">
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link" href="/admin">AdminPage</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="admin/listcontent">Content</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Skill</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link link-success" href="/home" tabindex="-1" >Home</a>
                </li>
            </ul>
        </div>
  `;
};

export default AdminHeader;
