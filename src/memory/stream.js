const filesystem = require('fs');
const Transform = require('stream').Transform;

let data = '';

let readableStream = filesystem.createReadStream(__dirname+'/mytextfile.txt');
readableStream.setEncoding('utf8');

readableStream.on('data', function(chunk) {
    data += chunk;
});

readableStream.on('end', function () {
    console.log('\n// Beginning of readableStream output ------');
    console.log(data);
});

// Writing stream basic example
console.log('Writing a stream to STDOUT:')
process.stdout.write('Hello');
process.stdout.write('\tWorld');
process.stdout.write('\tMy friend\n');
console.log('END OF WRITE STREAM ------');

// Transform simplified implementation using ES6 standard
const upperTransform = new Transform({
    transform(chunk, encoding, callback) {
        upperChunk = chunk.toString().toUpperCase();
        callback(null, upperChunk);
    }
});

console.log('// Beginning of transformed output ------');
readableStream
    .pipe(upperTransform)
    .pipe(process.stdout);