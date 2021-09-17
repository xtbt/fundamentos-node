console.log(global);

let contador = 0;
let intervalo = setInterval(function () {
    if (contador === 4)
        clearInterval(intervalo);
    else
        console.log('Mensaje '+(contador+1)+'/5');
    contador++;
}, 1000);


let mitimeout = (callback) => setTimeout(function () {
    console.info('* Mostrando información sobre el proceso:')
    console.log(process);
    callback();
}, 5000);

console.log(mitimeout);

let inmediato = setImmediate(function () {
    console.log('Esto se ejecuta de inmediato.');
});

mitimeout(function () {
    console.log(__dirname);
    console.log(__filename);
});

