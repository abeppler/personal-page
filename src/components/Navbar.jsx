import "../styles/components/navbar.sass";

const Navbar = () => {
  return (
    <header>
      <p className="logo">Anderson Beppler</p>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="https://github.com/abeppler/personal-page">
              GitHub Projeto
            </a>
          </li>
          <li>
            <a href="https://wa.me/5547996383373">Chama no Zap</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
