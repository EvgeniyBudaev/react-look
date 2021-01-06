import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import Category from "../category";
import {categoriesListSelector} from '../../redux/selectors';
import styles from "./categories.module.css";
import {CATEGORIES} from "../../routes";


const Categories = (props) => {
//console.log('[categories][props]', props)
    const {categories, match} = props

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
    }))(Categories)

// const mapStateToProps = (state, props) => ({
//     categories: categoriesListSelector(state),
//     loading: categoriesLoadingSelector(state, props),
//     loaded: categoriesLoadedSelector(state, props)
// })
//
// export default connect(mapStateToProps, {loadCategories})(Categories)

