import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./CardStyled.css";
import Swal from "sweetalert2";

export const CardListItem = ({ btnText, product }) => {
  const { id, title, price, srcImg, description, colors, size } = product;

  const handlerClick = () => {
    Swal.fire({
      title: title,
      text: description,
      html: `<p> <b>Descripción</b>: ${description} <br/> <b>Precio</b>: $ ${price}  <br/> <b>colores</b>: ${colors.map((e)=> e)} <br/> <b>talles</b>: ${size.map((e)=> e)}</p>`,
      imageUrl: srcImg[0],
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: title,
      showCloseButton: true,
      showConfirmButton: false,
      timer: 2000
    });
  };

  return (
    <>
      <Card className="product-card" key={id}>
        <Card.Img className="product-card-img" variant="top" src={srcImg[0]} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>$ {price}</Card.Text>
          <Button variant="dark" onClick={handlerClick}>
            {btnText}
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};
