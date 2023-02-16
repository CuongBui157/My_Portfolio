import Nav from "./Nav";

const Header = () => {
  return `
        <header>
          <div class="header-logo">BTC</div>
          ${Nav()}
        </header>
  `;
};

export default Header;
