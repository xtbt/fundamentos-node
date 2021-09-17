const http = require('http');

http.createServer(router).listen(3000);

function router (request, response) {
    console.log('New request from: ', request.url);

    switch(request.url) {
        case '/hello':
            response.write('Hellow, whats up');
            response.end();
            break;
        default:
            response.write('Error: Unknown request!!');
            response.end();
    }

    // // Write a response HEAD
    // response.writeHead(201, {'Content-Type': 'text/plain'});

    // // Write a response to the connected client
    // response.write('Now I can use HTTP requests!!');

    // // End the response
    // response.end();
};

console.info('Listening to http requests on port 3000');