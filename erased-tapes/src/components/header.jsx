import "../header.css";

function Header() {
  return (
    <header className="header">

      <img
        src="/logo.svg"
        className="logo"
        alt="Erased Tapes Logo"
      />

      <nav className="navigation">
        <a href="#blog">Our Blog</a>
        <a href="#artists">Our Artists</a>
        <a href="#story">Our Story</a>
      </nav>

    </header>
  );
}

export default Header;
