export default class OrdenCompra{
    #idCompra
    #fechaEmision
    #fechaEntrega
    #detallesOrden

    constructor(idcompra, fechaEmision, fechaEntrega,detallesOrden = []){
        this.#idCompra = idcompra
        this.#fechaEmision = fechaEmision
        this.#fechaEntrega = fechaEntrega
        this.#detallesOrden = detallesOrden

    }

    get idCompra(){
        return this.#idCompra
    }
    set idCompra(idCompra){
        this.#idCompra=idCompra
    }
    get fechaEmision(){
        return this.#fechaEmision
    }
    set fechaEmision(fechaEmision){
        this.#fechaEmision=fechaEmision
    }
    get fechaEntrega(){
        return this.#fechaEntrega
    }
    set fechaEntrega(fechaEntrega){
        this.#fechaEntrega = fechaEntrega
    }
    get detallesOrden(){
        return this.#detallesOrden
    }
    set detallesOrden(detallesOrden){
        this.#detallesOrden = detallesOrden
    }
    

    calcularTotalOrden(){
        let total = 0
        
        for (let i=0; i<= this.detallesOrden.length;i++){
            
            console.log(this.#detallesOrden.calcularMontodetalle())
        }

        
        
        return total
    }
}    