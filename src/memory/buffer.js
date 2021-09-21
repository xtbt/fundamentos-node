let buffer1 = Buffer.alloc(1);

let buffer2 = Buffer.alloc(4);

let buffer3 = Buffer.from([0, 1, 2, 3]);

let buffer4 = Buffer.from('Hello');

let abc = Buffer.alloc(26);

for (let i = 0 ; i < 26 ; i ++)
    abc[i] = i + 97;

console.log(buffer1);

console.log(buffer2);

console.log(buffer3);

console.log(buffer4);

console.log(abc);
console.log(abc.toString());