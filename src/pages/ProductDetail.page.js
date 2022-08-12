import React from 'react';
import { useParams } from 'react-router-dom';
import { context } from '../utils/context';
import ProductDetails from '../components/ProductDetails';

function ProductDetail() {
    const [product, setProduct] = React.useState(null)
    const { products } = React.useContext(context)
    const { id } = useParams()

    React.useEffect(() => {
        setProduct(products.filter(item => item.id == id)[0])
    }, [id, products])


    return (
        <main className="project-details-main">
            {product ? <ProductDetails
                product={product}
            /> :
                <div>on loading</div>
            }
        </main>
    )
}

export default ProductDetail