import Card from '../UI/Card';
import ProductItem from './ClothesItem/ProductItem';
import classes from './AvailableProducts.module.css';
import DUMMY_PRODUCTS from '../../data';

const AvailableProducts = (props) => {
  const productList = DUMMY_PRODUCTS.filter(product=>product.category===props.name.name).map((product) => (
    <ProductItem
      key={product.id}
      id={product.id}
      name={product.title}
      description={product.descption}
      price={product.price}
    />
  ));

  return (
    <section className={classes.products}>
      <Card>
        <ul>{productList}</ul>
      </Card>
    </section>
  );
};

export default AvailableProducts;
