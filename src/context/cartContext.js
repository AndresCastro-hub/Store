import {useState , createContext , useContext} from 'react'

const cartContext = createContext ([])

export const useCartContext = () => useContext(cartContext)

export default function CartContextProvider ({children}){
    
    const [cartList ,setCartList] = useState([])

  
    const addToCart = (item, cantidad) => {

        const index = cartList.findIndex(i => i.item.id === item.id)
    
          if (index > -1) {
            const oldQy = cartList[index].cantidad
    
            cartList.splice(index, 1)
            setCartList([...cartList, { item, cantidad: cantidad + oldQy}])
          }
          else {
            setCartList([...cartList, {item, cantidad}])
          }

      }


    const removeItem = (item) => {
    
        const deleteProduct = cartList.filter((prod) => prod.item.id !== item.item.id);

        setCartList([...deleteProduct]);

    }

    const iconCart = () => {
        return cartList.reduce((acum ,valor) => acum + valor.cantidad, 0 )
    }

    const clearCart = () => setCartList([]);

   
    const precioTotal =()=>{
        return cartList.reduce((acum, valor)=>(acum + (valor.cantidad * valor.item.precio)), 0) 
     }
    
     console.log(precioTotal)

    return (
        <cartContext.Provider value = {{
            cartList,
            addToCart,
            removeItem,
            iconCart,
            clearCart,
            precioTotal,
        }}>
            {children}
        </cartContext.Provider>
    )

}