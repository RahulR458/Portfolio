var http = require("http");
var fs = require("fs");
// var path = require("path");

const PORT = 8080;

http.createServer(function(request, response) {
    if (request.url === "/") {
        fs.readFile("index.html", function(error, html) {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(html);
            response.end();
        });
    } else if (request.url === "/portfolio.html" || request.url === "/netflix.html" || request.url === "/disney.html" || request.url === "/zomato.html" || request.url === "/index.html") {
        fs.readFile(request.url.substring(1), function(error, data) {
            if (error) {
                response.writeHead(404, { "Content-Type": "text/html" });
                response.write("error");
                response.end();
            } else {
                response.writeHead(200, { "Content-Type": "text/html" });
                response.write(data);
                response.end();
            }
        });
    } else if (request.url.endsWith(".css")) {
        fs.readFile(request.url.substring(1), function(error, data) {
            if (error) {
                response.writeHead(404, { "Content-Type": "text/html" });
                response.write("error");
                response.end();
            } else {
                response.writeHead(200, { "Content-Type": "text/css" });
                response.write(data);
                response.end();
            }
        });
    } else if (request.url.endsWith(".jpg")) {
        fs.readFile(request.url.substring(1), function(error, data) {
            if (error) {
                response.writeHead(404, { "Content-Type": "text/html" });
                response.write("error");
                response.end();
            } else {
                response.writeHead(200, { "Content-Type": "image/jpeg" });
                response.write(data);
                response.end();
            }
        });
    } else if (request.url.endsWith(".webp")) {
        fs.readFile(request.url.substring(1), function(error, data) {
            if (error) {
                response.writeHead(404, { "Content-Type": "text/html" });
                response.write("error");
                response.end();
            } else {
                response.writeHead(200, { "Content-Type": "image/webp" });
                response.write(data);
                response.end();
            }
        });
    } else if (request.url.endsWith(".js")) {
        fs.readFile(request.url.substring(1), function(error, data) {
            if (error) {
                response.writeHead(404, { "Content-Type": "text/html" });
                response.write("error");
                response.end();
            } else {
                response.writeHead(200, { "Content-Type": "text/javascript" });
                response.write(data);
                response.end();
            }
        });
    } else {
        response.writeHead(404, { "Content-Type": "text/html" });
        response.write("error");
        response.end();
    }
}).listen(PORT);
