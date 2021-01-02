import React from 'react'

const Navigation = (props) => {
    return (
        <div>
            {
                props.categories.map(category => (
                    <button
                        key={category.id}
                        onClick={() => props.onCategoryClick(category.id)}
                    >
                        {category.name}
                    </button>
                ))
            }
        </div>
    )
}

export default Navigation