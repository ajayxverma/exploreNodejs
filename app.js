const http = require("http");
const fs = require("fs");

const func1 = () => console.log("Function 1");
const func2 = () => console.log("Function 2");

const funct3 = () =>  {
  func1();
  setTimeout(func1, 0);
  func2();
}


funct3()