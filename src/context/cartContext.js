import {useState , createContext , useContext} from 'react'

const cartContext = createContext ([])

export const useCartContext = () => useContext(cartContext)

export default function CartContextProvider ({children}){
    
    const [cartList ,setCartList] = useState([])

  
    // const addToCart = (item, cantidad) => {

    //     const index = cartList.findIndex(i => i.id === item.id)//-1, pos
    
    //       if (index > -1) {
    //         const oldQy = cartList[index].cantidad
    
    //         cartList.splice(index, 1)
    //         setCartList([...cartList, { item, cantidad: cantidad + oldQy}])
    //       }
    //       else {
    //         setCartList([...cartList, {item, cantidad}])
    //       }
    //   }


    function addToCart (item) {
        setCartList([...cartList , item])
    } 

    function borrarLista () {
        cartList([])
    }

    console.log(cartList)

    return (
        <cartContext.Provider value = {{
            cartList,
            addToCart,
            borrarLista
        }}>
            {children}
        </cartContext.Provider>
    )

}