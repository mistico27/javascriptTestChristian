/*let myPromesa = new Promise((resolved,rejected)=>{
    let expression = false;
    if(expression){
        resolved('Resolvio correctamente');
    }else{
        rejected('Se produjo un error');
    }
});
*/
/*
myPromesa.then(
    valor => console.log(valor)
).catch(error => console.log(error));

no es necesario manejar el error al declarar una promesa
*/

/*
let Promesa = new Promise  ((resolved)=>{
    setTimeout(() =>  resolved('saludos con promesa y timeout'),3000);
});
Promesa.then(valor=>console.log(valor));
*/


/*async significa que una funcion va a regresar una promesa
*/


async function mifuncionConPromesa(){
    return 'saluydos con promesa y async';
}

mifuncionConPromesa().then(valor=>console.log(valor));



///async/await

async function funcionConPromesaAwait(){
    let miPromesa = new Promise(resolver =>{
        resolver('Promesa con await');
    });    
    console.log(await miPromesa);

}

funcionConPromesaAwait();

/** Promesas,await,asyn y setTimeout  */

async function funcionConPromesaAwaitYTimeOut(){
    let myNuevaPromise = new Promise(resolver =>{
        setTimeout(()=>resolver('Promesa con await y timeout'),2000);
    });
    console.log(await myNuevaPromise);
}

funcionConPromesaAwaitYTimeOut();
