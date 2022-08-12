import React from "react";
import { context } from "../utils/context"
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md"


function ProductDetails({ product }) {
    const { setFavorite, isInFavorite } = React.useContext(context)

    const favoriteItem = (isInFavorite(product.id) ?
        <MdOutlineFavorite className="fav-btn" onClick={() => setFavorite(prevArray => prevArray.filter(item => item !== product.id))} size={40} /> :
        <MdOutlineFavoriteBorder className="fav-btn" onClick={() => setFavorite(prevArray => [...prevArray, product.id])} size={40} />
    )

    const imagesItem = product.images.map((image, index) => <img
        key={index}
        className={`product-details-image${index + 1}`}
        src={image}
        alt={image}
    />)

    return (
        <div className="product-details">
            <div className="product-details-header">
                {imagesItem}
            </div>
            <div className="product-details-footer">
                <div className="product-details-footer-left">
                    <h1>{product.title}</h1>
                    <h3>{product.category.name}</h3>
                    <div className="details">
                        <h1>Details</h1>
                        <p>{product.description}</p>
                    </div>
                </div>
                <div className="product-details-footer-right">
                    <h1>${product.price}</h1>
                    {favoriteItem}
                    <button>Add to cart</button>
                </div>
            </div>

        </div>
    )
}


export default React.memo(ProductDetails)