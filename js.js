const http = require('http');
const fs = require('fs');
const PORT = 3000;
const server = http.createServer((req,res) => { 

    try {
        let numArr = req.url.split(/number1=|&number2=/);
        
        console.log(`Певрое число - ${numArr[1]}`);
        console.log(`Второе число - ${numArr[2]}`);
        
            if (numArr[0] == '/?') {
            if (isNaN(parseInt(numArr[1])) || isNaN(parseInt(numArr[2]))) throw new Error("");
              console.log(Number(numArr[1]) + Number(numArr[2]));
              res.writeHead(200, {'Content-Type': 'application/json'});
            
              let json = {
                        user: 'VyacheslavSinyakov',
                        num1: numArr[1],
                        num2: numArr[2],
                        sum: Number(numArr[1]) + Number(numArr[2]),
                        dif: Number(numArr[1]) - Number(numArr[2]),
                        mul: Number(numArr[1]) * Number(numArr[2]),
                        div: Number(numArr[1]) / Number(numArr[2])
                      };

              res.end(JSON.stringify(json));
              }
              else {
                fs.readFile("index.html", (error, data) => res.end(data));
              }
      }
      catch {
        res.writeHead(400, {'Content-Type': 'application/json'});
              let json = {
                name: 'VyacheslavSinyakov',
                error: "Error 400"
              };
              res.end(JSON.stringify(json));
      }
    
});



server.listen(3000, ()=> console.log(`Сервер работает на порте ${PORT}`));

