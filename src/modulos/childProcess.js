const { exec, spawn } = require('child_process');

exec('ls -la', function (error, stdout, sterror) {
    try {
        if (error) throw new Error(error);
        console.log(stdout);
    } catch (error) {
        console.error(error);
        return false;
    };
});

exec('node src/modules/console.js', function (error, stdout, sterror) {
    try {
        if (error) throw new Error(error);
        console.log(stdout);
    } catch (error) {
        console.error(error);
        return false;
    };
});

let mychildprocess = spawn('ls', ['-la']);
console.info(mychildprocess.pid);
console.info(mychildprocess.connected);

mychildprocess.stdout.on('data', function (data) {
    console.log(data.toString());
})

mychildprocess.on('exit', function () {
    console.log('Process finished');
})