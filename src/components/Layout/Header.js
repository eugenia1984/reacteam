import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import clothes from '../../assets/images/banner2.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={clothes} alt='clothes everywhere' />
      </div>
    </Fragment>
  );
};

export default Header;
