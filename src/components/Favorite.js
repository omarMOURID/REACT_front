import React from "react";
import { Link } from "react-router-dom"
import { context } from "../utils/context";


function Favorite({ toggle, setToggle }) {
    const { favorite, products, setFavorite } = React.useContext(context)


    const favoriteProducts = products.filter(item => favorite.find(favItem => favItem === item.id)).map(
        item => {
            return <Link to={`/product/${item.id}`} className="favorite-product" key={item.id}>
                <img className="favorite-product-image" src={item.images[0]} alt={item.images[0]} />
                <div className="favorite-product-body">
                    <h1>{item.title}</h1>
                    <h2>${item.price}</h2>
                    <button onClick={() => setFavorite(prevArray => prevArray.filter(prevItem => prevItem !== item.id))}>Remove</button>
                </div>
            </Link>
        })
    return (
        <div className={`modal-container ${toggle && "activeFavorite"}`}>
            <div className="modal-bg" onClick={() => setToggle(prevData => !prevData)}>
            </div>
            <div className="favorite-modal" >
                <h1>My favorite</h1>
                <div className="favorite-products">
                    {favoriteProducts}
                </div>
            </div>
        </div>
    )
}

export default Favorite;