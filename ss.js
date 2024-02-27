// var http = require('http')

// http.createServer(function(req,res){
//     res.write("hello")
//     res.end()
// }).listen(7000)

// var crypto = require('crypto');

// // Encrypted data

// // var mykey = crypto.createCipher('aes-128-cbc', 'mypassword');
// var mykey = crypto.createCipher('aes-128-cbc','mypassword');
// var mystr = mykey.update('abcdef', 'utf8', 'hex')
// mystr += mykey.final('hex');

// console.log(mystr);

// // Decryped data

// var mykey = crypto.createDecipher('aes-128-cbc', 'mypassword');
// var mystr = mykey.update('34feb914c099df25794bf9ccb85bea72', 'hex', 'utf8')
// mystr += mykey.final('utf8');

// console.log(mystr); 


// var http = require('http')
// var fs = require('fs')


//     http.createServer((req,res)=>{
//         fs.readFile('index.html',(error,data)=>{
//         res.writeHead(200,{'Content Type':'text/html'})
//         res.write('helo')
//         res.end()
//     }).listen(7000)
// })


var helo = function (data){
    console.log(data)
}

var hey = function (cb){
    cb('hello')
}
hey(helo)

function operation(num1,num2,cb){
    return cb(num1,num2)
} 

function sum(num1,num2){
    return num1+num2
}

console.log(operation(2,4,sum))