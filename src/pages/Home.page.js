import React from "react";
import { context } from "../utils/context";
import Product from "../components/Product";

function Home() {
    const { productsByCategory } = React.useContext(context)
    const productList = productsByCategory.map(product => <Product
        key={product.id}
        id={product.id}
        image={product.images[0]}
        category={product.category.name}
        title={product.title}
        price={product.price}
    />)


    return (
        <main>
            <div className="products-container">
                {productList}
            </div>

        </main>
    )
}

export default Home