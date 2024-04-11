import k from "./kaboom";
import g from "./global";

let print = (message?: any, ...optionalParams: any[]) => {
  console.log(message, optionalParams);
  k.debug.log(message);
};

let printHello = () => {
  print("Hello, World!");
};

g.print = print;
g.printHello = printHello;
