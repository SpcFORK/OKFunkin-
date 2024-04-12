export default function tests() {
  if (process.argv[2] === "test") {
    /* Test Runner */
    console.log("Running Test: " + process.argv[3]);
    console.log();
    switch (process.argv[3]) {
      case "game":
        console.log("OFK Game Doesnt Have Tests");
        console.log("Silly :)");
        process.exit(404);
        break;

      default:
        console.log("Invalid test: " + process.argv[3]);
        process.exit(404);
        break;
    }
  }
}
