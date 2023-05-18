///manejo de errores
//throw mi error
'use stric'

let result=-4;
try{
  if(isNaN(result)) throw 'no es un numero';
  else if(result==='') throw 'es cadena vacia';
  else if(result <=0) throw 'debe ser un valor Positivo';
}catch(error){
  console.log(error);
  //console.log(error.name);
  //console.log(error.message);
}