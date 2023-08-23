// const { Console } = require("console");
// const fs = require("fs");
// fs.writeFile(
//   "sample.txt",
//   "Hello World",
//   (err)=>{
//     if(err) throw err;
//     console.log("File created!");
//   }
// );

const http= require("http");
const fs = require("fs");

const server = http.createServer((req,res) => {
  const stream = fs.createReadStream("sample.txt");
  stream.pipe(res);
  // fs.readFile("sample.txt",(err,data)=>{
  //   res.end(data);
  // })
});
server.listen(3000);