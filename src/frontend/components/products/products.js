import React, {Component} from 'react'
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import Card from "../card";
import Basket from "../basket";
import {productsLoadedSelector, productsLoadingSelector} from "../../redux/selectors";
import {loadProducts} from "../../redux/actions/actions";
import Loader from "../loader";

class Products extends Component {
    state = { error: null };

    loadProductsIfNeeded = () => {
        const { loadProducts, categoryId, loading, loaded } = this.props;
        if (!loading && !loaded) {
            loadProducts(categoryId);
        }
    };

    componentDidMount() {
        this.loadProductsIfNeeded();
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.categoryId !== this.props.categoryId) {
            this.loadProductsIfNeeded();
        }
    };

    componentDidCatch(error) {
        this.setState({ error });
    };

    render() {
        const { products, loading } = this.props;
        //console.log('[products][props]', this.props)

        if (loading) {
            return <Loader />;
        }

        if (this.state.error) {
            return <p>В этой категории товары не доступны</p>;
        }

        return (
            <>
                <div>
                    {
                        products.map(id => (
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
}

export default connect(
    createStructuredSelector({
        loading: productsLoadingSelector,
        loaded: productsLoadedSelector,
    }),
    { loadProducts }
)(Products);



