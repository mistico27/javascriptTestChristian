///arreglo
const personas=[
  new Persona('christian','beltran'),
  new Persona('karla','manzano')
];


function mostrarPersonas(){
  console.log("mostrar");
  let texto='';
  ///for of de cada persona
  for(let persona of personas){
    console.log(persona);
    texto +=`<li>${persona.nombre}  ${persona.apellido}</li>`;
  }

  ///mostrar elementos del Dom
  document.getElementById('personas').innerHTML=texto;

}


function agregarPersona(){
  const forma = document.forms['forma'];
  const nombre = forma['nombre'];
  const apellido= forma['apellido'];
  if(nombre.value ==='' || apellido.value === ''){
    alert("no hay informacion para agregar");
  }else{
    const persona = new Persona(nombre.value,apellido.value);
    personas.push(persona);  
    mostrarPersonas();
  }
  
}
////reloj 
const mostrarReloj =() =>{
  let fecha = new Date();
  let hr= fomtatoHora(fecha.getHours());
  let min=fomtatoHora(fecha.getMinutes());
  let sec =fomtatoHora(fecha.getSeconds());
  document.getElementById('hora').innerHTML=`${hr}:${min}:${sec}`;

  const meses = ['Ene','feb',"mar","abril","may","jun","jul","ago","sept","oct","nov","dic"];
  const dias =["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
  let diaSemana = dias[fecha.getDay()];
  let dia = fecha.getDate();
  let mes = meses[fecha.getMonth()];
  let year =fecha.getFullYear()
  let fechaTexto = `${diaSemana} ${dia} ${mes} ${year}`;
  document.getElementById('fecha').innerHTML=fechaTexto;
  document.getElementById('contenedorII').classList.toggle("animar");
}



const fomtatoHora=(hora)=>{
  if(hora<10){
    hora = '0'+hora;
  }
  return hora;
}


//solo referencia
setInterval(mostrarReloj,1000);


