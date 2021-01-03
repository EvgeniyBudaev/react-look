import React from 'react'
import Card from "../card";
import Basket from "../basket";

const Products = (props) => {
    //console.log('[products] [props]', props)

    return (
        <>
            <div>
                {
                    props.products.map(id => (
                        <Card key={id} id={id} />
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

