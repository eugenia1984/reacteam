import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function ShoppingCart() {
  return (
    <div className="bg-dark">
      <div className="container">
        <p className="text-light  text-end p-3">
          <FontAwesomeIcon icon={faHeart} />
        </p>
      </div>
    </div>
  );
}

export default ShoppingCart;
