import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function FooterSocialMedia(){
  const github= "https://github.com/VaninaWinnik/reacteam";

  const socialMedia = [
    { href: github, icon: faFacebook },
    { href: github, icon: faTwitter },
    { href: github, icon: faLinkedin }
  ];

  return (
    <div className="col-xs-12 col-sm-5 col-md-3 d-flex justify-content-center">
      <div className="row">
        <h6 className="col-12">Redes sociales</h6>
        <ul className="col-12 social-icons">
          {socialMedia.map((media, index) => (
            <li key={index}>
              <a href={media.href} target={"_blank"} rel="noreferrer" >
                <i><FontAwesomeIcon icon={media.icon} /></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FooterSocialMedia;