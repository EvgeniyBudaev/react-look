import React, {useEffect} from 'react'
import {Link, Route} from "react-router-dom";
import {CATEGORIES} from "../routes";
import Categories from "../components/categories/categories";
import Loader from "../components/loader";
import {loadCategories} from "../redux/actions/actions";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {categoriesListSelector, categoriesLoadedSelector, categoriesLoadingSelector} from "../redux/selectors";

const CategoriesPage = (props) => {
    const {categories, loadCategories, loading, loaded, match} = props

    useEffect(() => {
        if (!loading && !loaded) loadCategories()
    }, [])

    if (loading || !loaded) return <Loader />

    if (match.isExact) {
        return (
            <div>
                <div>Выберите категорию</div>
                {categories.map(({id, name}) => <div key={id}>
                    <Link to={CATEGORIES + `${id}`}>{name}</Link>
                </div>)}
            </div>
        )
    }

    return (
        <Route path={CATEGORIES + ":restId"} component={Categories} />
    )
}

export default connect(  createStructuredSelector({
        categories: categoriesListSelector,
        loading: categoriesLoadingSelector,
        loaded: categoriesLoadedSelector,
    }),
    {loadCategories})(CategoriesPage)


// const mapStateToProps = (state, props) => ({
//     categories: categoriesListSelector(state),
//     loading: categoriesLoadingSelector(state, props),
//     loaded: categoriesLoadedSelector(state, props)
// })
//
// export default connect(mapStateToProps, {loadCategories})(CategoriesPage)


