import PropTypes from 'prop-types';

import './Cart.css'

export default function Cart ({cart,handleRemoveCart}){
    console.log(cart)
    return(
        <div>
            <div className="cart">
                <div className="cart-head text-center">
                    Total Items {cart.length}: 
                </div>
                <div className="cart-content">
                {
                    cart.map(item => <div className='cart-item' key={item.id}>
                        <img src={item.img} alt="" />
                        <div>{item.name.slice(0,20)}</div>
                        <div>{item.price}</div>
                        <button onClick={()=>handleRemoveCart(item.id)}>X</button>
                    </div>)
                }
                </div>
                
                {/* ===== cart footer ==== */}
                <div className="cart-footer">
                    <h5>Total: </h5>
                    <div><span>00</span>$</div>
                </div>
            </div>
        </div>
    )
}
Cart.propTypes = {
    cart: PropTypes.array,
    handleRemoveCart: PropTypes.func
}