import React from 'react';
import MyLink from "../my-link/my-link";

const CartPage = () => {
    return (
        <div>
            Cart Page
            <MyLink to={'/cart/23'}  >test</MyLink>
        </div>
    );
};

export default CartPage;