function myfunction(){
    console.log('saludos desde mi funcion');
}

//myfunction();


let myfunctionII =()=>{
    console.log("Saludos desde la nueva funcion");
}

//myfunctionII();


///nueva forma
const myFunctionIII =() => console.log("Saludos desde la nueva funcion en una sola linea");

//myFunctionIII();


const saludar = () =>{
    return 'saludar desde funcion saludar';
}

//console.log(saludar());


const regresaObjeto =()=>({
nombre:'juan',apellido:'Perez'
});


//console.log(regresaObjeto());


const myfunctionParam=(menssage)=>{
    return menssage;
}

//console.log(myfunctionParam("como es posible que ami lado"));

const funcionConParametros = function(message){
    console.log(message);
}

//funcionConParametros("aqui esta la papa");
/****************************************************************************/

/*
function callback mandar a llamr una funcion dentro de una funcion
*/



function myfunction1(){
    console.log("saludos desde la funcion 1");
}

function myfunction2(){
    console.log("saludos desde la funcion 2");
}


///funciones tipo callback puedo mandar a llamr una funcion como parametro porque en javascript una funcion es un objeto
function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(a,b,funcionCallback){
    let rez = a+b;
    funcionCallback(`the result is ${rez}`);
}

//sumar(2,3,imprimir);
/******************************funciones callback****************************************************************************************/

///llamadas asincronas con uso timeout

function myFunctionCallBack(){
    console.log('Saludo asíncrono despues de 3 S');
}

///setTimeout (funcion, tiempo enmilisegundos)
//setTimeout(myFunctionCallBack,3000);


//setTimeout(()=>{console.log("saludos desde el nuevo asincrono")},1000);


let reloj =()=>{
    let fecha= new Date();
    console.log(`${fecha.getHours()}: ${fecha.getMinutes()}: ${fecha.getSeconds()}`);
}


setInterval(reloj,1000);

///Promesas javascript

