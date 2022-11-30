import LogoImagen from "../../assets/images/logo.png";

function Logo()  {
  return (
    <img
      src={LogoImagen}
      width="30"
      height="30"
      className="d-inline-block align-top"
      alt="logo de Alta Pinta"
    />
  )
}

export default Logo;