import React, {useState, useMemo} from 'react'
import {connect} from 'react-redux'
import Navigation from "../navigation";
import Category from "../category";
import Tabs from "../tabs/tabs";

const Categories = (props) => {
const {categories} = props

    const tabs = categories.map((category) => ({
        title: category.name,
        content: <Category category={category} />,
    }))

    return <Tabs tabs={tabs} />
}

const mapStateToProps = (state) => ({
    categories: state.categoriesReducer,
})

export default connect(mapStateToProps)(Categories)