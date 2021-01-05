import React, {useState, useMemo, useEffect} from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Navigation from "../navigation";
import Category from "../category";
import Tabs from "../tabs/tabs";
import {categoriesListSelector, categoriesLoadedSelector, categoriesLoadingSelector} from '../../redux/selectors';
import {loadCategories} from "../../redux/actions/actions";
import Loader from "../loader";

const Categories = (props) => {
//console.log('[categories][props]', props)
const {categories, loadCategories, loading, loaded} = props

    useEffect(() => {
        if (!loading && !loaded) loadCategories()
    }, [])

    if (loading || !loaded) return <Loader />

    const tabs = categories.map((category) => ({
        title: category.name,
        content: <Category category={category} />,
    }))

    return <Tabs tabs={tabs} />
}

export default connect(  createStructuredSelector({
        categories: categoriesListSelector,
        loading: categoriesLoadingSelector,
        loaded: categoriesLoadedSelector,
    }),
    {loadCategories})(Categories)

// const mapStateToProps = (state, props) => ({
//     categories: categoriesListSelector(state),
//     loading: categoriesLoadingSelector(state, props),
//     loaded: categoriesLoadedSelector(state, props)
// })
//
// export default connect(mapStateToProps, {loadCategories})(Categories)

