import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom"



function Product({ id, image, title, category, price }) {

    return (
        <Link to={`/product/${id}`} className="product">
            <img className="product-image" src={image} alt={title}></img>
            <div className="product-text">
                <div className="product-info">
                    <h1 className="product-title">{title}</h1>
                    <h2 className="product-category">{category}</h2>
                </div>
                <h1 className="product-price">${price}</h1>
            </div>
        </Link>
    )
}

Product.propTypes = {
    id: propTypes.number,
    image: propTypes.string,
    title: propTypes.string,
    category: propTypes.string,
    price: propTypes.number
}

export default React.memo(Product)