
// this.nombre = "Fabian Andres";
// console.log(this.nombre);


// function saludar(){
//     var apelldio2 = "BARRAGAN ESPINOSA";
//     let apelldio3 = "barragan espinosa";
//     this.apellidos = "Barragan Espinosa";
// }
// saludar();
// console.log(this.apellidos);
// console.log(apelldio2);
// console.log(apelldio3);

// Maneras de declarar objetos
// const obj =  new Object();
// const obj2 = {};
// const obj3 =  Object.prototype.constructor();


// const lista2 = new Object();
// lista2.nombre = "Fabian";
// lista2.apellido = "Barragan";



const lista = {
    nombre: "Fabian Andres",
    apellido: "Barragan Espinosa",
    mostrar: p1 => `Hola ${p1} como estas`,
};
function saludar(Callback,p2){
    // console.log(this.mostrar(this.nombre));
    console.log(Callback(p2));
}
// saludar.call(lista, lista.mostrar, lista.nombre);
// saludar.apply(lista, [lista.mostrar, lista.nombre]);
const ejecutar = saludar.bind(lista, lista.mostrar, lista.nombre);
ejecutar();






// const inner = ( function (){
//     let num = 0;
//     return function () {
//         num++;
//         return num;
//     }
// })();

// console.log(inner());
// console.log(inner());
