
const productosDeLaApi = [
    {id : 1, categoria:'remeras', titulo: "Remera Adidas", descripcion: "Remera hecha a base de algodon para entrenar comodamente" , precio: 5000 , fotoUrl : "https://sporting.vteximg.com.br/arquivos/ids/203881-1000-1000/FH8586_APP_photo_front-center_white.jpg?v=637212869662570000"},
    {id : 2, categoria:'remeras', titulo: "Camiseta Adidas Afa 2021", descripcion: "La camiseta Adidas de la Selección Argentina de fútbol (AFA)" , precio: 9000 , fotoUrl : "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwcf3bf7b1/products/AD_FS6565/AD_FS6565-1.JPG"},
    {id : 3, categoria:'buzos', titulo: "Buzo Nike Sportswear", descripcion: "Ideal para uso cotidiano y para entrenar" , precio: 8999 , fotoUrl : "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw74406734/products/NI_CJ1694-684/NI_CJ1694-684-1.JPG"},
    {id : 4, categoria:'zapatillas', titulo: "Zapatillas Nike Winflo 8", descripcion: "Son zapatillas adecuadadas para todo el dia debido a su amortiguacion" , precio: 20000 , fotoUrl : "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwfeda8bdf/products/NI_CW3419-006/NI_CW3419-006-1.JPG"},
    {id : 5, categoria:'remeras', titulo: "Camiseta Adidas Afa Alternativa", descripcion: "La camiseta adidas de la Selección Argentina de fútbol (AFA) versión alternativa" , precio: 7999 , fotoUrl : "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw223a84f1/products/AD_FH8571/AD_FH8571-1.JPG"},
    {id : 6, categoria:'buzos', titulo: "Buzo Nike Liverpool FC", descripcion: "Buzo de hombre con material de Poliester con cierre y bolsillo para entrenamientos debido a su material" , precio: 12000, fotoUrl : "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw951f98d1/products/NI_DB0237-678/NI_DB0237-678-1.JPG"},
    {id : 7, categoria:'buzos', titulo: "Buzo Boca Juniors ", descripcion: "Buzo de Boca Juniors para entrenamientos, tenemos distintos en talles para todas las edades, consulte stock" , precio: 8999 , fotoUrl : "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwc1ed01ef/products/AD_GL7499/AD_GL7499-1.JPG"},
    {id : 8, categoria:'buzos', titulo: "Buzo Fila Letter Colors ", descripcion: "El buzo Fila Letter Colors llegó para quedarse. Confeccionado de cuello redondo y tejido de punto frizado" , precio: 7850 , fotoUrl : "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwd4180769/products/FI_F11L506013-7297/FI_F11L506013-7297-1.JPG"},
    {id : 9, categoria:'botines', titulo: "Botines Puma Ultra", descripcion: "Los botines Puma Ultra 4.2 TT BADP están confeccionados en materiales sintéticos para una mayor resistencia" , precio: 9299 , fotoUrl : "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw135269a8/products/PU_106643-03/PU_106643-03-1.JPG"},
    {id : 10,categoria:'botines',  titulo: "Botines Puma Future", descripcion: "Los botines Puma Future Z 4.1 FG/AG BADP están confeccionados en materiales sintéticos" , precio: 9299 , fotoUrl : "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw9a7f2a58/products/PU_106637-03/PU_106637-03-1.JPG"},
]

export const fetch = new Promise ((res,rej) =>{
    
    let respuesta = '200'

    if(respuesta === '200'){
        setTimeout(()=>{
            res(productosDeLaApi)
        },2000)
    }else{
        rej('404')
    }
})

const productoDeLaApi =  {id : 9, titulo: "Botines Puma Ultra", descripcion: "Los botines Puma Ultra 4.2 TT BADP están confeccionados en materiales sintéticos para una mayor resistencia" , precio: '$9299' , fotoUrl : "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw135269a8/products/PU_106643-03/PU_106643-03-1.JPG"}

export const fetchUno = new Promise ((resolve) =>{
    
    setTimeout(() =>{
        resolve(productoDeLaApi)
    },2000)
})