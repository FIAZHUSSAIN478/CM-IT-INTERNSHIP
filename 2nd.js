const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter first number: ", (num1) => {
  rl.question("Enter second number: ", (num2) => {
    rl.question("Choose operation (+, -, *, /): ", (op) => {
      
      num1 = Number(num1);
      num2 = Number(num2);
      let result;

      switch (op) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          if (num2 === 0) {
            console.log(" Division by zero not allowed");
            rl.close();
            return;
          }
          result = num1 / num2;
          break;
        default:
          console.log(" Invalid operation");
          rl.close();
          return;
      }

      console.log(` Result: ${result}`);
      rl.close();
    });
  });
});
