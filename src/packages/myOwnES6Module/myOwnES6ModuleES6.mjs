function sayHello() {
    console.log('Hello from inside a function of myOwnES6Module.mjs');
}

const property1 = 'Property 1 String value';
const property2 = 2;

export default {
    sayHello,
    property1,
    property2
};