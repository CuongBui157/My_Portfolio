const AdminPage = () => {
  return /*html*/ `
      <h1>Menu Admin</h1>
      <div class="admin-list">
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link" href="/admin">AdminPage</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="admin/listcontent">AboutLink</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="admin/about">AboutContent</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="admin/card">SkillContent</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="admin/projects">SkillProjects</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="admin/listcustomers">List Of Customers</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link link-success" href="/home" tabindex="-1" >Home</a>
                </li>
            </ul>
        </div>
        
  `;
};

export default AdminPage;
