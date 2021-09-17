import React from 'react'
import Item from './Item'

const ItemList = ({productosDeLaApi}) => {
    return (
    <>
        {productosDeLaApi.map(productosDeLaApi => <Item productosDeLaApi={productosDeLaApi}/>
        
        )}
    </>
    )
}

export default ItemList
