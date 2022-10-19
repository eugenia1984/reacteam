import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faDribbble,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="site-footer bg-dark text-light">
      <div className="container">
        <div className="row ">
          <div className="col-xs-6 col-md-6">
            <h6>Categorias</h6>
            <ul className="footer-links d-flex justify-content-between">
              <li>
                <a href="http://scanfcode.com/category/c-language/">
                  Pantalones
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/front-end-development/">
                  Remeras
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/back-end-development/">
                  Buzos
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/java-programming-language/">
                  Calzado
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a
                  href="https://facebook.com"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <i>
                    <FontAwesomeIcon icon={faFacebook} />
                  </i>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <i>
                    <FontAwesomeIcon icon={faTwitter} />
                  </i>
                </a>
              </li>
              <li>
                <a
                  href="https://dribbble.com"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <i>
                    <FontAwesomeIcon icon={faDribbble} />
                  </i>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <i>
                    <FontAwesomeIcon icon={faLinkedin} />
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container text-light">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2022 All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
