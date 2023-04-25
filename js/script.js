console.log("Ejercicios funcionesII");
console.log("Ejercicio I: Caducidad de un producto");

let myProduct = {
    name:"milk",
    year: 2021,
    getDateForRootenStatus: function (year) {
        let status = true;
        if(this.year<2023){
        }else{
            status=false;
        }
        return status;
      },
};

let myProductII = {
    name:"Dairy",
    year: 2024,
    getDateForRootenStatus: function (year) {
        let status = true;
        if(this.year<2023){
        }else{
            status=false;
        }
        return status;
      },
};


function isRootten(status, name){
    let answer ='';
    switch(status){
        case false:
            answer ="El producto " + name +" esta fresco";
            break;
        case true:
            answer ="El producto " + name +" esta caduco";
            break; 
        default:
            answer ="El producto no tiene fecha de caducidad"

    }
    return answer;
}

let test = isRootten(myProductII.getDateForRootenStatus(this.year),myProductII.name);
let testII = isRootten(myProduct.getDateForRootenStatus(this.year),myProduct.name);

console.log(test);
console.log(testII);



console.log("")
console.log("Ejercicio II: Mostrar Descripcion de un auto");

let car={
    name: "Sentra",
    company:"Nissan",
    year:2018,
    airconditioning:true
}

let carII={
    name: "Volvo V90",
    company:"Volvo",
    year:2023,
    airconditioning:false
}



function showCar(name,company,year,airconditioning){
    let anser ='';
    if (airconditioning === true){
        anser ="the  car´s name is " + name + " its company is " + company + " and its from the year " + year + " and it has airconditioning";
    }else{
        anser ="the  car´s name is " + name + " its company is " + company + " and its from the year " + year + " and it does no have airconditioning";
    }

    return anser;
}

let testea = showCar(car.name,car.company,car.year,car.airconditioning);
let testeaII = showCar(carII.name,carII.company,carII.year,carII.airconditioning);

console.log(testea);
console.log(testeaII);


console.log("")
console.log("Ejercicio III: Fecha del album");


let band ={
    name: "Queen",
    album:"Jazz",
    year:1978
}

let bandII ={
    name: "maná",
    album:"amar es combatir",
    year:2006
}

function beholdAlbum(name,album,year){
    let period = 2023 - year;

    return `the album ${album}, of the  band ${name}   was released on ${year}  and it has been ${period} years since its recording`;
}


let resultSet = beholdAlbum(band.name,band.album, band.year);
let resultSetII = beholdAlbum(bandII.name,bandII.album, bandII.year);


console.log(resultSet);
console.log(resultSetII);
