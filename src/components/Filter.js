import React from "react";
import { context } from "../utils/context"

function Filter() {
    const { categories, setCurrentCategory } = React.useContext(context)

    const filterItems = categories.map((item, index) => (<div
        key={index}
        className="filter-item"
        onClick={() => setCurrentCategory(item)}
    >
        {item.name}
    </div>
    ))


    return (
        <div className="filter-bar">
            {filterItems}
        </div>
    )
}

export default Filter