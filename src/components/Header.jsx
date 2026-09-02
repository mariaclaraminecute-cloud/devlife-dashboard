function Header() {
  return (
    <header className="top-header">
      <div className="header-inner">
        <div>
          <p className="brand-label">DevLife</p>
          <h2>Dashboard</h2>
        </div>

        <nav className="header-nav" aria-label="Navegação principal">
          <span>Hoje</span>
          <span>Semana</span>
          <span>Projetos</span>
        </nav>
      </div>
    </header>
  );
}

export default Header;
