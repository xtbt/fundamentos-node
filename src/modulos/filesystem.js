const filesystem = require('fs');
console.log(filesystem);

function readFile(path, callback) {
    filesystem.readFile(path, function (error, data) {
        try {
            if (error) throw new Error(error);
            callback(data);
        } catch (error) {
            console.error(error.message);
        }
    });
};

function writeFile(path, content, callback) {
    filesystem.writeFile(path, content, function (error) {
        try {
            if (error) throw new Error(error);
            callback();
        }
        catch (error) {
            console.error(error.message);
        };
    });
};

readFile('demofiles/textfile1.txt', function (data) {
    console.info(data.toString());
});

const contenido = 'This is the content of text file number 2';

writeFile('demofiles/textfile2.txt', contenido, function () {
    console.info('Text file saved correctly');
})


