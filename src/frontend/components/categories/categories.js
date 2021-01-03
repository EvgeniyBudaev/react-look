import React, {useState, useMemo} from 'react';
import {connect} from 'react-redux';
import Navigation from "../navigation";
import Category from "../category";
import Tabs from "../tabs/tabs";
import {categoriesListSelector} from '../../redux/selectors';

const Categories = (props) => {
//console.log('[categories][props]', props)
const {categories} = props

    const tabs = categories.map((category) => ({
        title: category.name,
        content: <Category category={category} />,
    }))

    return <Tabs tabs={tabs} />
}

const mapStateToProps = (state) => ({
    categories: categoriesListSelector(state),
})

export default connect(mapStateToProps)(Categories)