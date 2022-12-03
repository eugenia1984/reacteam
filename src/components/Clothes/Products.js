import { Fragment } from 'react';

import ProductsSummary from './ProductsSummary';
import AvailableProducts from './AvailableProducts';

const Products = (name) => {
  return (
    <Fragment>
      <ProductsSummary />
      <AvailableProducts name={name} />
    </Fragment>
  );
};

export default Products;
