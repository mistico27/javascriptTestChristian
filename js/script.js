class DispositivoEntrada{
    constructor(tipoEntrada,marca){
        this._tipoEntrada = tipoEntrada;
        this._marca=marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada){
        this._tipoEntrada=tipoEntrada;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca=marca;
    }
}


class Raton extends DispositivoEntrada{
    static contadorRatones =0;
    constructor (tipoEntrada,marca){
        super(tipoEntrada,marca);
        this.id_raton = ++ Raton.contadorRatones;
    }

    get idRaton(){
        return this.id_raton;
    }

    toString(){
        return `Raton:[idRaton: ${this.id_raton}, tipoEntrada: ${this.tipoEntrada}, marca: ${this.marca}]`;
    }
}


class Teclado extends DispositivoEntrada{
    static contadorTeclado =0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada,marca);
        this._idteclado =++Teclado.contadorTeclado;
    }

    get idTeclado(){
        return this._idteclado;
    }

    toString(){
        return `Teclado: [ idTeclado: ${this._idteclado}, tipoEntrada: ${this.tipoEntrada}, marca:${this.marca}]`;

    }

}


class Monitor{
    static contadorMonitores =0;
    constructor(marca,tamaño){
        this._idMonitor =++Monitor.contadorMonitores;
        this._marca =marca;
        this._tamaño = tamaño;
    }

    getidMonitor(){
        return this._idMonitor;
    }

    toString(){
        return `Monitor: [idMonitor: ${this._idMonitor}, marca:${this._marca}, tamaño: ${this._tamaño}]`;
    }

}


class Computadora{
    static contadorComputadoras =0;
        constructor(nombre,monitor,raton,teclado){
            this._idComputadora =++ Computadora.contadorComputadoras;
            this._nombre=nombre;
            this._monitor = monitor;
            this._raton = raton;
            this._teclado = teclado;

        }
    toString(){
        return `computadora ${this._idComputadora}: nombre:${this._nombre}\n monitor: ${this._monitor},\n raton: ${this._raton},\n teclado: ${this._teclado} `;
    }    
}


class Orden{
    static contadorOrdenes =0;
    constructor(){
        this._idOrden =++ Orden.contadorOrdenes;
        this._computadoras =[];
    }

    get IdOrden(){
        return this._idOrden;
    }

    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }

    mostrarOrden(){
        let computadorasOrden = '';
        for(let computadora of this._computadoras){
            computadorasOrden += `\n ${computadora}`;

        }

        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
    }

}




let raton1 = new Raton('USB', 'hp');
let raton2 = new Raton('bluetooth', 'Dell');

console.log(raton1.toString());
console.log(raton2.toString());


let teclado1 = new Teclado('Bluetooth','MSI');
let tecaldo2 = new Teclado('USB', 'hp');
console.log(tecaldo2.toString());
console.log(teclado1.toString());


let monitor1 = new Monitor('hp',12);
console.log(monitor1.toString());


let computadora = new Computadora('hp', monitor1,raton1,tecaldo2);
console.log(computadora.toString());

let computadoraII = new Computadora('apple', monitor1,raton2,teclado1);
console.log(computadora.toString());


let Orden1= new Orden();
Orden1.agregarComputadora(computadora);
Orden1.agregarComputadora(computadoraII);
Orden1.agregarComputadora(computadora);
Orden1.mostrarOrden();


let Orden2= new Orden();
Orden2.agregarComputadora(computadora);
Orden2.mostrarOrden();
