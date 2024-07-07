import { useEffect, useState } from 'react'
import '../Bottles/Bottles.css'
import Cart from '../Cart/Cart'
import Bottle from './Bottle/Bottle'
import { getCartInLocalStorage, removeFromLocalStorage, saveToLocalStorage } from '../../utilitis/localStroage';

export default function  Bottles () {
    
    const [bottles,setBottles] = useState([]);
    const [cart,setCart] = useState([])
    
    useEffect(()=>{
        fetch('../bottoles.json')
        .then(res=> res.json())
        .then(data=> setBottles(data))
    },[])
    
    useEffect(()=>{
        if(bottles.length){
            const storedCart = getCartInLocalStorage()
            
            const saveCart = []
            for(const id of storedCart){
                const bottle = bottles.find(bottle=> bottle.id === id) 
                saveCart.push(bottle)
            }
            setCart(saveCart)
        }
    },[bottles])
    
    
    const handleBuyNow = (bottle)=>{
        const newCart = [...cart,bottle]
        setCart(newCart)
        
        // set local storage
        saveToLocalStorage(bottle.id)
    }
    
    const handleRemoveCart = (id)=>{
        // remove form display
        const remaining = cart.filter(each =>each.id !== id)
        setCart(remaining)
        // remove form ls
        removeFromLocalStorage(id)
    }
    
    
    return(
        <main>
            <section>
                <div className="container">
                    <div className="bottles-wrapper">
                        {/* ===== Cart Header ==== */}
                        <div className="bottles-header">
                            <div>
                                <h4>Total Products: {bottles.length} </h4>
                            </div>
                            
                            {/* =====  Cart Page  ===== */}
                            <div>
                                <Cart cart={cart}  handleRemoveCart={handleRemoveCart}></Cart>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            
            
            {/* ====== products section  ====== */}
            <section>
                <div className="container">
                    <div className="products">
                        {
                            bottles.map(bottle => <Bottle 
                                key={bottle.id}
                                bottle={bottle}
                                handleBuyNow= {handleBuyNow}
                                ></Bottle>)
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}
