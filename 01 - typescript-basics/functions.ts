function multiple(a: number, b: number): number {
  return a * b;
}

console.log(multiple(5, 10)); // Output: 50

function log(message: string): void {
  console.log(message);
}

// never type function
// never type is used to indicate that a function never returns a value and will always throw an error or terminate the program.
// It is often used for functions that throw exceptions or have infinite loops.
function throwError(message: string): never {
  throw new Error(message);
}
