import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function ShoppingCart() {
  return (
    <p className="text-light">
      <FontAwesomeIcon icon={faHeart} />
    </p>
  );
}

export default ShoppingCart;
