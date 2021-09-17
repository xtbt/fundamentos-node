console.log('Different types of console outputs:');

console.log('This is a normal log output.');
console.info('This is a preformatted info console output.');
console.warn('This is a warning console output.');

const myArray = [
    {
        a: 1, 
        b: 'Dos'
    },
    {
        c: 3,
        d: 'Cuatro'
    }
];
console.table(myArray);

console.group('Grupo 1');
console.log('mensaje equis');
console.log('mensaje equis');
console.log('mensaje equis');
console.group('Grupo 2');
console.log('otro mensaje');
console.log('otro mensaje');
console.group('Grupo 3');
console.log('el mensaje más interno')
console.groupEnd('Grupo 3');
console.log('otro mensaje');
console.groupEnd('Grupo 2');
console.log('mensaje equis')
console.log('mensaje equis')
console.groupEnd('Grupo 1');

for (let i = 0 ; i < 10 ; i ++) {
    console.count('counter');
    if (i === 4)
        console.countReset('counter');
};