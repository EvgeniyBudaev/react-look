import React from 'react';
import Products from "../products";

const Category = (props) => {
    //console.log('[category][props]', props)
    const {id, products} = props.category

    return (
        <div>
            <Products products={products} categoryId={id} />
        </div>
    )
}


export default Category