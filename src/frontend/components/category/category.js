import React from 'react';
import {connect} from 'react-redux';
import Products from "../products";

const Category = (props) => {
    const {products} = props.category
    return (
        <div>
            <Products products={products} />
        </div>
    )
}

export default Category