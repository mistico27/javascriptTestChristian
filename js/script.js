console.log("programa I Iniciales con cualquier nombre completo");
console.log("nombre completo nombre Apellido paterno y Apellido Materno");

let myName ={
    name:'Christian',
    lastName1:'Beltran',
    lastName2:'Bedolla'
}
let myNameII ={
    name:'Jose',
    lastName1:'Del toro',
    lastName2:'Hernandez'
}


function showTheName(name, lastName1, lastName2){
    let newName = name[0];
    let newLastname1 = lastName1[0];
    let newLastname2 = lastName2[0];

    return newName + '.' + newLastname1 +'.' +newLastname2+'.'; 

}

console.log(showTheName(myName.name,myName.lastName1,myName.lastName2));
console.log(showTheName(myNameII.name,myNameII.lastName1,myNameII.lastName2));


console.log("ProgramaII evaluacion nombre de productos")
console.log("Deben ser faciles de recordar  hasta 5 letras son faciles de recordar");

let palabra ={
    name:"escoba",
}
let palabraII ={
    name:"mesa",
}

function EasyToRemember(palabra){
    let answer ='';
    if(palabra.length<5){
        answer = palabra + ' is Easy To remember';
    }else{
        answer= palabra + ' hard word to remember';
    }
    return answer;
}

let myTest = EasyToRemember(palabra.name);
let myTestII = EasyToRemember(palabraII.name);

console.log(myTest);
console.log(myTestII);


console.log("Programa III Hacer que cada palabra se pueda dividir equitativamente");

let word={
    name:"Christian"
}
let wordII={
    name:"Mara"
}

function divideMyWord(word){
    let answer1 ='';
    let answer2 ='';
    if(word.length % 2 === 0){
       let newWord= word.length/2;
       let newword2= word.length;
        answer1=word.slice(0, newWord);
        answer2 =word.slice(newWord, newword2);
       return `${answer1} \n${answer2}`;

    }else if(word.length % 2 === 1){
        let wordNew = word.length/2;
        let newword2= word.length;

        answer1= word.substring(wordNew+1);
        answer2 = word.slice(0, answer1.length);
        return `${answer2} \n${answer1}` ;
    }



   
}

console.log(divideMyWord(word.name));
console.log();
console.log(divideMyWord(wordII.name));
