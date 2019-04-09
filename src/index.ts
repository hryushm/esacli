import program from "commander";

program
  .version("0.1.0")
  .option("-q, --query [querystring]", "query string")
  .parse(process.argv);

console.log(`query parameter is ${program.query}`);
