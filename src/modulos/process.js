const procs = require('process');
// Previous line commented because process is a global included into node core

// As arrow function
process.on('beforeExit', () => {
    console.log('Exiting...');
});

// As anonymous function
process.on('exit', function () {
    console.log('Program terminated');
});

// ------------------------- EXCEPTION STUFF ----------------------------------
// Function declaration, as anonymous function
const exceptionCatcher = function (error, origin) {
    console.error('Personalized error: ', error);
    console.error('Origin: ', origin);
};
// Event handler pointing to exception catcher
process.on('uncaughtException', exceptionCatcher);

// * COMMENT NEXT LINE TO SEE UNHANDLED PROMISE BEHAVIOR
ghostFunction(); // To provoque the uncaught exception, which ends the process
// * COMMENT PREVIOUS LINE TO SEE UNHANDLED PROMISE BEHAVIOR

console.log('This info is unaccesible if the exception was caught :D');

// --------------------------- PROMISE STUFF ----------------------------------
// Function declaration, as arrow function
const rejectionCatcher = (error, origin) => {
    console.error('Personalized error: ', error);
    console.error('Origin: ', origin);
};
// Event handler pointing to rejection catcher
process.on('unhandledRejection', rejectionCatcher);

function somePromiseFunction() {
    return new Promise((resolve, reject) => {
        if (false) resolve('Everything was OK');
        else reject('Nothing was OK');
    });
};

somePromiseFunction();

console.log('This info is accesible even if the rejection was caught :D');