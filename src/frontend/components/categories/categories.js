import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import Navigation from "../navigation";
import Category from "../category";
import Tabs from "../tabs/tabs";
import {categoriesListSelector, categoriesLoadedSelector, categoriesLoadingSelector} from '../../redux/selectors';
import {loadCategories} from "../../redux/actions/actions";
import Loader from "../loader";
import styles from "./categories.module.css";
import {CATEGORIES} from "../../routes";


const Categories = (props) => {
//console.log('[categories][props]', props)
    const {categories, loadCategories, loading, loaded, match} = props

    useEffect(() => {
        if (!loading && !loaded) loadCategories()
    }, [])

    if (loading || !loaded) return <Loader />

    const {restId} = match.params

    const category = categories.find(category => category.id === restId)

    return (
        <>
            <div className={styles.tabs}>
                {categories.map(({id, name}) => (
                    <NavLink
                        key={id}
                        to={CATEGORIES + `${id}`}
                        className={styles.tab}
                        activeStyle={{color: 'red'}}
                        activeClassName={styles.active}
                    >
						{name}
					</NavLink>
                ))}
            </div>
            <Category category={category} />
        </>
    )

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

