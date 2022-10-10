
import footer from "../data/icon/logo_footer.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <img className="footer_logo" src={footer} alt="logo kasa" />
        <p className="footer_text">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};
export default Footer;
