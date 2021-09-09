import ItemCount from "./ItemCount"


function ItemListContainer() {
    
    const onAdd = (cantidad) => {
        console.log(cantidad)
    }

    return(
        <>
        <ItemCount stock ={5} initial ={1} onAdd ={onAdd}/>
        </>
    ) 
    
}

export default ItemListContainer
