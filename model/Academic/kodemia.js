
/*
1.- obtener el nombre del auto
2.- aplicar el descuento al precio del auto
3.- aplicar el metodo  al tamaño del arreglo de autos

*/

let cars = [
    {
        name:"Sentra",
        year:2023,
        price:380000,
        discount:15
    },
    {
        name:"Toledo",
        year:2023,
        price:375000,
        discount:10
    },
    {
        name:"Versa",
        year:2023,
        price:330000,
        discount:20
    },
]



const getDiscountAndName=(cars) =>{
    let nameAndPrice =cars.map((prices) =>{
           let {name,price,discount} =prices;
           //operacion
           let finalPrice = price -((price*discount)/100);
           return `El auto es ${name} y su precio es ${finalPrice}`;
    });

    return nameAndPrice[0];
}


console.log(getDiscountAndName(cars));



