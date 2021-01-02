import React from 'react'
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