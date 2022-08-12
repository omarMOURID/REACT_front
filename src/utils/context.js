import axios from "axios";
import React from "react";



const context = React.createContext(null)

function ContextProvider({ children }) {
    const [products, setProducts] = React.useState([])
    const [productsByCategory, setProductsByCategory] = React.useState([])
    const [categories, setCategories] = React.useState([])
    const [currentCategory, setCurrentCategory] = React.useState({})
    const [cart, setCart] = React.useState([])
    const [favorite, setFavorite] = React.useState([])

    function isInFavorite(id) {
        if (favorite.find(item => item === id)) {
            return true
        } else {
            return false
        }
    }

    React.useEffect(() => {
        axios.get("https://api.escuelajs.co/api/v1/products")
            .then(response => setProducts(response.data.slice(1, -2)))

        axios.get("https://api.escuelajs.co/api/v1/categories")
            .then(response => setCategories(() => response.data))

        localStorage.getItem('favorite') && setFavorite(JSON.parse(localStorage.getItem('favorite')))

    }, [])

    React.useEffect(() => {
        if (currentCategory?.id >= 1 && currentCategory?.id <= 6) {
            setProductsByCategory(() => products.filter(p => p.category.id === currentCategory.id))
        } else {
            setProductsByCategory(() => products)
        }
    }, [currentCategory, products])

    React.useEffect(() => {
        favorite.length && localStorage.setItem('favorite', JSON.stringify(favorite))
    }, [favorite])

    return (
        <context.Provider value={{ productsByCategory, products, cart, categories, setCurrentCategory, setFavorite, isInFavorite, favorite }} >
            {children}
        </context.Provider>
    )
}

export { ContextProvider, context }