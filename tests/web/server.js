const http = require('http');
const fs = require('fs');


const render = (file, contentType, response) => {
    fs.readFile(file, function (error, contents) {
        if (error) {
            response.writeHead(404);
            response.write('Not Found');
        } else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.write(contents);
        }
        response.end();
    });
};

const server = http.createServer((request, response) => {
    if (request.url === '/tests.js') {
        render("./tests/web/tests.js", 'text/javascript', response);
        return;
    }

    if (request.url === '/console.min.js.map') {
        render("./dist/var/console.min.js.map", 'text/javascript', response);
        return;
    }

    if (request.url === '/console.min.js') {
        render("./dist/var/console.min.js", 'text/javascript', response);
        return;
    }

    if (request.url === '/') {
        render("./tests/web/tests.html", 'text/html', response);
        return;
    }

    response.writeHead(404);
    response.write('Not Found');
    response.end();
});

// Start the server on port 3000
server.listen(3000, '127.0.0.1');
console.log('Web server running on http://127.0.0.1:3000');
