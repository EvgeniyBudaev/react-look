import React, {useState, useMemo, useEffect} from 'react';
import {connect} from 'react-redux';
import Navigation from "../navigation";
import Category from "../category";
import Tabs from "../tabs/tabs";
import {categoriesListSelector} from '../../redux/selectors';
import {loadCategories} from "../../redux/actions/actions";
import Loader from "../loader";

const Categories = (props) => {
//console.log('[categories][props]', props)
const {categories, loadCategories} = props

    useEffect(() => {
        loadCategories()
    }, [])

    if (categories.length === 0) return <Loader />
    const tabs = categories.map((category) => ({
        title: category.name,
        content: <Category category={category} />,
    }))

    return <Tabs tabs={tabs} />
}

const mapStateToProps = (state) => ({
    categories: categoriesListSelector(state),
})

export default connect(mapStateToProps, {loadCategories})(Categories)

