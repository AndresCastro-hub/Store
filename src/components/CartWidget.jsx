import {FaShoppingCart} from 'react-icons/fa'
import {useCartContext} from '../context/cartContext'

function CartWidget() {

    const {iconCart,cartList} = useCartContext()


    return (
        <>
        
        { cartList.length === 0 ? 
        <>
            <FaShoppingCart style={{color:'white' ,cursor:'pointer'}}/> 

        </>
        :

        <>
             <FaShoppingCart style={{color:'white' ,cursor:'pointer'}}/> 
             {iconCart() }
        </>
        
        
         
        }
        
            
        </>
    )
}

export default CartWidget
