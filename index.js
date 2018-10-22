var http = require('http');
var express = require
var fs = require('fs');
var server = http.createServer(function(request,response){
    switch(request.url){
        case '/':
        //var fs: typeof import("fs")
        fs.createReadStream('./public/home.html').pipe(response);
        //response.end('home');
        break;
        case '/about_us':
        response.end('about us');
        break;
        case '/editado':
        response.end('editado');
        break;
    }
});


server.listen(8000);