import "./footer.css";
import FooterRights from "./FooterRights";
import FooterCategories from "./FooterCategories";
import FooterSocialMedia from "./FooterSocialMedia";

function Footer() {
    return (
    <footer className="site-footer bg-dark text-light">
      <div className="container">
        <div className="row ">
          <FooterCategories />
          <FooterSocialMedia />
        </div>
        <hr />
      </div>
      <FooterRights />
    </footer>
  );
}

export default Footer;
