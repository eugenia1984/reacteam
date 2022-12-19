import { Link } from "react-router-dom";

function FooterCategories(){
  const categories = [
    { categoria: "Pantalones", link:"" },
    { categoria: "Remeras y polos", link: "" },
    { categoria: "Abrigos y camperas", link: "" },
    { categoria: "Calzados", link: "" },
    { categoria: "Camisas", link: "" },
    { categoria: "Sweaters y cardigans", link: "" }
  ];

  return(
    <div className="col-xs-12 col-sm-7 col-md-9">
            <h6>Categorias</h6>
            <ul className="footer-links d-flex justify-content-center">
              {categories.map((categorie, index) => (
                <li key={index}>
                  <Link to={`/productos/${categorie.link}`}>{categorie.categoria}</Link>
                </li>
              ))}
            </ul>
          </div>
  )
}

export default FooterCategories;