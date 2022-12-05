import { Link } from "react-router-dom";

function FooterCategories(){
  const categories = [
    { categoria: "Pantalones", link:"pantalones" },
    { categoria: "Remeras y polos", link: "remeras-y-polos" },
    { categoria: "Abrigos y camperas", link: "abrigos-y-camperas" },
    { categoria: "Calzados", link: "calzados" },
    { categoria: "Camisas", link: "camisas" },
    { categoria: "Sweaters y cardigans", link: "sweaters-y-cardigans" }
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