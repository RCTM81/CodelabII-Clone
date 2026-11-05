
import "../footer.css";

function Footer() {
  return (
    <footer className="footer-container">

      {/* Footer navigation */}
      <nav className="footer-navigation">
        <a href="#">Our Blog</a>
        <a href="#">Our Artists</a>
        <a href="#">Our Story</a>
      </nav>

      {/* Copyright */}
      <p>Copyright © 2023 Erased Disks Ltd.</p>

      {/* Social media icons */}
      <div className="footer-social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/facebook-icon.png" alt="Facebook" />
        </a>

        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="/instagram-icon.svg" alt="Instagram" />
        </a>

        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="/X.jpg" alt="X" />
        </a>
      </div>

    </footer>
  );
}

export default Footer;
