import React from 'react'
import Card from "../card";
import Basket from "../basket";

const Products = (props) => {
    //console.log('[products] [props]', props)

    return (
        <>
            <div>
                {
                    props.products.map(product => (
                        <Card key={product.id} product={product} />
                    ))
                }
            </div>
            <div>
                <Basket />
            </div>
        </>
    )
}

export default Products

