var carritoVisible = false;
if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded',ready)

}else{
    ready();
}


function ready(){
    var botonesEliminarItem=document.getElementsByClassName('btn-eliminar');
    for(let i =0; i<botonesEliminarItem.length; i++){
        let botton = botonesEliminarItem[i];
        botton.addEventListener('click',eliminarItemCarrito);

    }

    ///suamr cantidad
    let botonesSumarCantidad= document.getElementsByClassName('sumar-cantidad');
    for(let i =0;i<botonesSumarCantidad.length; i++){
        let button = botonesSumarCantidad[i];
        button.addEventListener('click',sumarCantidad);
    }

    let botonesRestarCantidad= document.getElementsByClassName('sumar-cantidad');
    for(let i =0;i<botonesRestarCantidad.length; i++){
        let button = botonesRestarCantidad[i];
        button.addEventListener('click',restarCantidad);
    }


    //agregar al carrito
    let botonesAgregarCarrito= document.getElementsByClassName('boton-item');
    for(let i=0; i<botonesAgregarCarrito.length;i++){
        let button = botonesAgregarCarrito[i];
        button.addEventListener('click',aggregaralCarritoClicked);

    }

    document.getElementsByClassName('btn-pagar')[0].addEventListener('click', pagarClicked)


}


function eliminarItemCarrito(event){
    let buttonClicked =event.target;
    buttonClicked.parentElement.parentElement.remove();

    ///cart total
    actualizarTotalCarrito();

    ocultarCarrito();


}



function actualizarTotalCarrito(){
    let carritoContenedor = document.getElementsByClassName('carrito')[0];
    let carritoItems=carritoContenedor.getElementsByClassName('carrito-item');
    var total =0;

    for(i=0;i<carritoItems.length; i++){
        let item = carritoItems[i];
        let precioElemento= item.getElementsByClassName('carrito-item-precio')[0];

        var precio = parseFloat(precioElemento.innerText.replace('$','').replace('.',''));
        var cantidadItem = item.getElementsByClassName('carrito-item-cantidad')[0];
        console.log(precio);
        var cantidad = cantidadItem.value;
        total = total + (precio * cantidad);

    }
    total= Math.round(total*100)/100;
    document.getElementsByClassName('carrito-precio-total')[0].innerText='$'+total.toLocaleString("es") + ",00";


}



function ocultarCarrito(){
    let carritoItems = document.getElementsByClassName('carrito-items')[0];
    if(carritoItems.childElementCount==0){
        let carrito = document.getElementsByClassName('carrito')[0];
        carrito.style.marginRight ='-100%';
        carrito.style.opacity='0';
        carritoVisible=false;

        let items = document.getElementsByClassName('contenedor-items')[0];
        items.style.width='100%';

    }

}

//cumad cantidad
function sumarCantidad(event){
    let buttonClicked = event.target;
    let selector = buttonClicked.parentElement;
    let cantidadActual=selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    cantidadActual++;
    selector.getElementsByClassName('carrito-item-cantidad')[0].value=cantidadActual;
    actualizarTotalCarrito();
    
}

function restarCantidad(event){
    let buttonClicked = event.target;
    let selector = buttonClicked.parentElement;
    let cantidadActual=selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    cantidadActual--;
    if(cantidadActual>=1){
        selector.getElementsByClassName('carrito-item-cantidad')[0].value=cantidadActual;
        actualizarTotalCarrito();
    }    
}


function aggregaralCarritoClicked(event){
    let button =event.target;
    let item = button.parentElement;
    let titulo = item.getElementsByClassName('titulo-item')[0].innerText;
    let precio = item.getElementsByClassName('precio-item')[0].innerText;
    let imagenSrc= item.getElementsByClassName('img-item')[0].src;
    //agregar item
    agregarItemAlCarrito(titulo,precio,imagenSrc);
    hacerVisibleCarrito();

}



function agregarItemAlCarrito(titulo,precio,imagenSrc){
    let item = document.createElement('div');
    item.classList.add='item';
    let itemsCarrito = document.getElementsByClassName('carrito-items')[0];
    //controlar el item que esta ingresando

    let nombreSitemCarrito = itemsCarrito.getElementsByClassName('carrito-item-titulo');
    for(let i =0; i<nombreSitemCarrito.length; i++){
        if(nombreSitemCarrito[i].innerText == titulo){
            alert("The item is already on the chart");
            return;
        }

    }


    let itemCarritoContenido =`
    <div class="carrito-item">
    <img src="${imagenSrc}" width="80px" >
    <div class="carrito-item-detalles">
        <span class="carrito-item-titulo">${titulo}</span>
        <div class="selector-cantidad">
            <i class="fa-solid fa-minus restar-cantidad"></i>
            <input type="text" value="1" class="carrito-item-cantidad" disabled>
            <i class="fa-solid fa-plus sumar-cantidad"></i>
        </div>
        <span class="carrito-item-precio">${precio}</span>
    </div>
   <span class="btn-eliminar">
        <i class="fa-solid fa-trash"></i>
   </span>
</div>
    `
    
    item.innerHTML=itemCarritoContenido;
    itemsCarrito.append(item);

//funcionalidad eliminar
item.getElementsByClassName('btn-eliminar')[0].addEventListener('click',eliminarItemCarrito);


//Agregmos al funcionalidad restar cantidad del nuevo item
var botonRestarCantidad = item.getElementsByClassName('restar-cantidad')[0];
botonRestarCantidad.addEventListener('click',restarCantidad);

//Agregamos la funcionalidad sumar cantidad del nuevo item
var botonSumarCantidad = item.getElementsByClassName('sumar-cantidad')[0];
botonSumarCantidad.addEventListener('click',sumarCantidad);

actualizarTotalCarrito();
}


function pagarClicked(Event){
    alert("Gracias por su compra");
    let carritoItems= document.getElementsByClassName('carrito-items')[0];
    while(carritoItems.hasChildNodes){
        carritoItems.removeChild(carritoItems.firstChild);

    }
    actualizarTotalCarrito();

    ocultarCarrito();
}


function hacerVisibleCarrito(){
    carritoVisible=true;
    let carrito=document.getElementsByClassName('carrito')[0];
    carrito.style.marginRight='0';
    carrito.style.opacity='1';
    let items = document.getElementsByClassName('contenedor-items')[0];
    items.style.width='60%';

}


