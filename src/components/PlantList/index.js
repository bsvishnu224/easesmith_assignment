import {Link} from "react-router-dom"
import Popup from 'reactjs-popup'
import { RxCross2 } from "react-icons/rx";
import './index.css'
const PlantList=(props)=>{
    const {eachPlant}=props
    const {price,sellingPrice,name,image,rating,ratingImg,description,id}=eachPlant
    return(
        <div className="product-main-cont">
            <div className="product">
                <img className="img" src={image}/>
                <Link to={`/product/${id}`}><button className='view-product-button'>View Product</button></Link>
            </div>
            <div className='plant-info-cont'>
                <h1>{name}</h1>
                <p className='description'>{description}</p>
                <div className='rating-cont'><img src={ratingImg}/><p className='rating'>{rating}</p></div>
                <div className='price-cont'>
                    <p className='price'>{price}</p>
                    <p className='selling-price'>{sellingPrice}</p>
                </div>
                <div className='cart-btn-cont'>
                    <div className='add-to-cart-cont'>
                        <button className='minus-btn'>-</button>
                        <Popup
                            modal
                            trigger={
                            <button className="add-to-cart-btn">
                                Add-to-cart
                            </button>
                            }
                        >
                            {close => (
                            <>
                                <div className="cart-model-cont">
                                    <RxCross2 className="cross-icon" onClick={() => close()}/>
                                    <div className="cart-model">
                                        
                                        <p className="cart-heading">Your Cart</p>
                                        <hr/>
                                        <h1 className="heading">Congratulations Order Placed!</h1>
                                        <img className="cart-image" src="https://i.ibb.co/QXxZxnB/plant-1.png"/>
                                        <p className="cart-description">Thank you for choosing Chaperone services.
                                        We will soon get in touch with you!</p>
                                        <button className="continue-shopping-btn">CONTINUE SHOPPING</button>
                                        
                                    </div>
                                </div>
                                
                            </>
                            )}
                        </Popup>
                        <button className='plus-btn'>+</button>
                    </div>
                    <button className='buy-on-rent'>Buy on Rent</button>
                </div>


            </div>
        </div>
    )
}

export default PlantList