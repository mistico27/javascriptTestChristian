let mentors = [
    ["Naomi", "López"], 
    ["Israel", "Salinas"], 
    ["Charles", "Silva"], 
    ["Rose", "Ortega"], 
  ];
  let koders = [
    {
      name: "Verónica Cruz",
      scores: {
        html: 10,
        css: 9.2,
        js: 9.7,
        bootstrap: 8,
      },
      isGraduated: true,
    },
    {
      name: "Miguel Aceves",
      scores: {
        html: 8.7,
        css: 10,
        js: 8.3,
        bootstrap: 9.8,
      },
      isGraduated: false,
    },
    {
      name: "Antonio Cano",
      scores: {
        html: 9.2,
        css: 10,
        js: 10,
        bootstrap: 6.5,
      },
      isGraduated: false,
    },
  ];
  /*
      1.- Necesito una lista que contenga los nombres completos de los mentores ordenados alfabéticamente
      2.- Necesito una lista con los nombres y promedios generales de todos los koders
      3.- Necesito una lista con los nombres de aquellos koders que aún no se han graduado
      4.- Necesito conocer el promedio grupal de cada materia impartida en el bootcamp
          html -> 9
          css -> 10
      5.- Necesito saber cúal es el koder con el promedio más alto y cúal el que tiene el promedio más bajo
      */

console.log("Primer ejercicio");

const myMentors= (arreglo) =>{
    for(let z=0; z<arreglo.length; z++){
      console.log(arreglo[z][0] +" " + arreglo[z][1]);   
    }
}

//let test= myMentors(mentors);


console.log("Programa II");


const myGrades =(arreglo) =>{
    for(let i=0; i<arreglo.length; i++){
        let sumtotal =arreglo[i].scores.html + arreglo[i].scores.css + arreglo[i].scores.js+arreglo[i].scores.bootstrap;
        
        console.log(arreglo[i].name + " Promedio total " + sumtotal/4);      
    }
}

//let test= myGrades(koders);

console.log("porgrama III");

const kodersUngraduated =(arreglo) =>{
    for(let z=0; z<arreglo.length; z++){
        if(arreglo[z].isGraduated!=true){
            let segraduo =`${arreglo[z].name}  , no se ha graduado`;
            console.log(segraduo);
        }
        
        
    }
}


//let nuevotest = kodersUngraduated(koders);

console.log("programa IV");


const groupalGrades =(arreglo) =>{
    for(let i=0; i<arreglo.length; i++){
        let a = arreglo[i].scores.html;
        a =a+a;
        console.log(a);
    }
}


let total = groupalGrades(koders);