import React from "react";
import Favorite from "../components/Favorite";
import { Link } from "react-router-dom";
import { context } from "../utils/context"
import { AiOutlineShopping, AiOutlineAppstoreAdd, AiOutlineQuestionCircle } from "react-icons/ai"
import { MdOutlineFavoriteBorder } from "react-icons/md"

function NavBar() {
    const { cart, setCurrentCategory } = React.useContext(context)
    const [toggle, setToggle] = React.useState(false)
    return (
        <>
            <nav className="nav-bar">
                <div className="nav-brand">
                    <Link to="/" onClick={() => setCurrentCategory({})}><AiOutlineAppstoreAdd size={50} /></Link>
                </div>
                <div className="nav-items">
                    <Link to="/"><AiOutlineQuestionCircle size={30} /></Link>
                    <a onClick={() => setToggle(prevData => !prevData)}><MdOutlineFavoriteBorder size={30} /></a>
                    <Link to="/" className="nav-cart"><AiOutlineShopping size={30} /> Bag {cart.length}</Link>
                </div>
            </nav>
            <Favorite toggle={toggle} setToggle={setToggle} />
        </>
    )
}

export default NavBar