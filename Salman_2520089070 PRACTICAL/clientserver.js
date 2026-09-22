http = require('node:http');
listener = function (request,response){
 response.writehead(200,{'content-type': 'text/html'});
respnse.end('<h2 style="text-align: center;">Hello World</h2>');
};
server = http.createServer(listener);
server.listen(3000);
console.log('Server running at http://127.0.0.1:3000/');