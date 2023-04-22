let r =10;
const pi = 3.1416;
let Area = pi *r *r;

console.log("hola soy  el primer programa");
console.log("El el radio del circulo es " + Area);

console.log(" ");
console.log("Este es el segundo programa");
if(Area>10){
    console.log("El Area del circulo es mayor a 10 unidades cuadradas");
}else{
    console.log("El area es menor o es igual a 10 unidades cuadradas");
}

console.log(" ");
console.log("Este es el tercer programa");
let somos = "somos";
let koders= "koders"
console.log(somos+" "+koders);


console.log("");
console.log("Este es el problema de los poligonos");
function getAreaForPolygon(lados,perimetro, apotema){
    if(lados<5){
        console.log("No funciona esta formula, intente con otra... por favor");
        return null;
    }else{
        let result= (perimetro*apotema)/2;
        return result;
    }
    

}


let poligono = getAreaForPolygon(5,10,5);
console.log("Area es igual a " +poligono + " Unidades cuadradas");



console.log("")

console.log("Esta seccion es para las funcion flecha");
console.log("Programa 1");

var biggerOrSmaller = function (num) {
    var res = true;
    if(num% 2 === 0 ){
        console.log("Este numero es par");
        
    }else{
        console.log("Este numero  NO es par");
        res= false;
    }
    return res;
  };
  console.log( biggerOrSmaller(39) ); 


  console.log("");
  console.log("Programa 2");
  
  var MAYOR = function (num) {
      if(num >=18 ){
          console.log("es mayor de edad");
      }else{
          console.log("tio no puede tomar cerveza aun");
      }
    };
    console.log( MAYOR(39) ); 







