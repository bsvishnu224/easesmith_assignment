import { GoPerson } from "react-icons/go";
import { HiOutlineShoppingCart } from "react-icons/hi2"
import "./index.css"
const Header=()=>{
    return(
        <div className="Header-main-container">
            <img className="logo" src="https://i.ibb.co/FBH0DQ0/Group-59.png" alt="Logo"/>
            <div className="header-option-container">
                <p>Home</p>
                <p>Plants&Pots</p>
                <p>Tools</p>
                <p>Our Services</p>
                <p>Blogs</p>
                <p>Our Story</p>
                <p>FAQs</p>

            </div>
            <div className="cart-container">
                <div className="profile">
                    <GoPerson size={30} /><span>My Profile</span>
                    
                </div>
                <div className="cart">
                    <HiOutlineShoppingCart size={30} />
                    <span>Cart</span>

                </div>

            </div>

        </div>
    )
}

export default Header