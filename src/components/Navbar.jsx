import "../styles/components/navbar.sass";

const Navbar = () => {
  return (
    <header>
      <p className="logo">Anderson Beppler</p>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#">GitHub Projeto</a>
          </li>
          <li>
            <a href="#">Chama no Zap</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
