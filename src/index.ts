import k from "./kaboom";
import g from "./global";
import * as plat from "./whatPlatform";
import tests from "./tests/tests";

let print = (message?: any, ...optionalParams: any[]) => {
  console.log(message, optionalParams);
  k.debug.log(message);
};

let printHello = () => {
  print("Hello, World!");
};

g.print = print;
g.printHello = printHello;

if (plat.isBrowser) {
  // Run Browser Things Here
  console.log("OKF GlobalImport Working!");
}
if (plat.isNode) {
  // Run Node Things Here
  tests();
}
