import DetalleOrden from "./DetalleOrden.js";
import OrdenCompra from "./OrdenCompra.js";
import Producto from "./Producto.js";

let producto = new Producto(`codProd 1`,`nombre producto aceite`,100)
let producto1 = new Producto(`codProd 2`,`nombre producto agua`,200)
let producto2 = new Producto(`codProd 3`,`nombre producto mayo`,300)


let detalleOrden1 = new DetalleOrden(`1`,producto,3)
let detalleOrden2 = new DetalleOrden(`2`,producto1,5)
let detalleOrden3 = new DetalleOrden(`3`,producto2,7)

let detalles=[detalleOrden1,detalleOrden2,detalleOrden3]

console.log(detalles);

let ordenCompra = new OrdenCompra(`1`,`13-08-2024`,`13-08-2024`,detalles)


console.log(ordenCompra)
