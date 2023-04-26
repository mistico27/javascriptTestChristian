class Producto{
    static contadorProductos=0;
    constructor(nombre,precio){
        ///id de produto que se aumenta sistematicamente
        this.id_producto=++Producto.contadorProductos;
        this.nombre=nombre;
        this.precio=precio;
    }

    ///futuros usos de metodo get
    get idProducto(){
        return this.id_producto;
    }

    get Nombre(){
        return this.nombre;
    }

    set Nombre(nombre){
        this.nombre=nombre;
    }

    get Precio(){
        return this.precio;
    }

    set Precio(precio){
        this.precio=precio;
    }

    toString(){
    return `idProducto: ${this.id_producto} , nombre : ${this.nombre}, precio:  $${this.precio}`;
    }
}


class Order{
    static contadorOrdenes=0;

    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this.id_Orden=++Order.contadorOrdenes;
        this.productos =[];
        this.contadoProductoAgregados =0;
    }

    get idOrden(){
        return this.id_Orden;
    }

    agregarProducto(Producto){
        if(this.productos.length < Order.MAX_PRODUCTOS){
            this.productos.push(Producto);
            this.productos[this.contadoProductoAgregados++] =Producto; 
        }else{
            console.log("No se pueden agregar más productos");
            
        }
    }

    calcularTotal(){
        let totalVenta =0;
        for(let produto of this.productos){
            totalVenta += produto.precio; //totalVenta =TotalVenta + producto.precio
        }
        return totalVenta;
    }


    mostrarOrden(){
        let productoOrden="";
        for(let Producto of this.productos){
            productoOrden += '\n'+Producto.toString() + '';
        }
        console.log(`Orden:${this.id_Orden} Total: ${this.calcularTotal()}, Productos: ${productoOrden} `);
    }

}

let producto1 = new Producto("eggs",10);
let producto2 = new Producto("camisa",100.34);
let producto3 = new Producto("apple",20);

let orden1 = new Order();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);


let orden2 = new Order();
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto1);





orden1.mostrarOrden();
orden2.mostrarOrden();