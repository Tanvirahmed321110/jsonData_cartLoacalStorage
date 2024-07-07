
// import PropTypes from 'prop-types';
import '../Bottle/Bottle.css'

export default function Bottle({bottle,handleBuyNow}){
    
    const {name,img,price } = bottle
    
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className='name-price'>
                <div>{name}</div>
                <h4>{price}$</h4>
            </div>
            <div>
                <button onClick={()=>handleBuyNow(bottle)}>Buy Now</button>
            </div>
        </div>
    )
}

// Bottle.propTypes = {
//     bottle:PropTypes.array,
//     handleBuyNow:PropTypes.func,
//   };