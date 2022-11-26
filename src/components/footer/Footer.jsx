import "./footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const categories = [
    {
      categoria: "Pantalones",
      link:"pantalones"
    },
    {
      categoria: "Remeras y polos",
      link: "remeras-y-polos"    
    },
    {
      categoria: "Abrigos y camperas",
      link: "abrigos-y-camperas"
    },
    {
      categoria: "Calzados",
      link: "calzados"
    },
    {
      categoria: "Camisas",
      link: "camisas"
    },
    {
      categoria: "Sweaters y cardigans",
      link: "sweaters-y-cardigans"
    }
  ];

  const socialMedia = [
    {
      href: "https://github.com/VaninaWinnik/reacteam",
      icon: {faFacebook},
    },
    {
      href: "https://github.com/VaninaWinnik/reacteam",
      icon: {faTwitter},
    },
    {
      href: "https://github.com/VaninaWinnik/reacteam",
      icon: {faLinkedin},
    }
  ]
  return (
    <footer className="site-footer bg-dark text-light">
      <div className="container">
        <div className="row ">
          <div className="col-xs-12 col-sm-7 col-md-9 col-lg-10">
            <h6>Categorias</h6>
            <ul className="footer-links d-flex justify-content-between">
              {categories.map((categorie, index) => (
                <li key={index}>
                  <Link to={`/productos/${categorie.link}`}>{categorie.categoria}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-xs-12 col-sm-5 col-md-3 col-lg-2">
            <ul className="social-icons">
              {socialMedia.map((media, index) => (
                <li key={index}>
                  <a
                    href={media.href}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <i><FontAwesomeIcon icon={media.icon} /></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container text-light">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-8 mx-auto">
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
