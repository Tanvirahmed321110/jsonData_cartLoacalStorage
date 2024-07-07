
const getCartInLocalStorage  = ()=>{
    const storageCart = localStorage.getItem('cart')
    
    if(storageCart){
        return JSON.parse(storageCart)
    }
    return []
}

// save to local storage

const saveToLocalStorage = (itemId)=>{
    const cart = getCartInLocalStorage()
    cart.push(itemId)
    
    const cartStringfy = JSON.stringify(cart)
    localStorage.setItem('cart',cartStringfy)
}


// remove form ls
const removeFromLocalStorage = (id)=>{
    const cart = getCartInLocalStorage()
    const remaining = cart.filter((eachItem => eachItem.id !== id))
    
    saveToLocalStorage(remaining)
}

export {getCartInLocalStorage, saveToLocalStorage,removeFromLocalStorage}