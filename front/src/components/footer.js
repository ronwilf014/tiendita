import './footer.css';
import logo from '../assets/rick-original.png';

const Footer = () => {
  return (


    <footer>
      <img src={logo} alt="Logo de la empresa" className="w-20" />
      <div className="footer_socials">
        <div className="footer_redes">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-pinterest-p"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
        </div>
        <div className="copy_right">
          copyright 2022 | Ronald Wilf Design
        </div>
      </div>

    </footer>

  )
}


export default Footer;