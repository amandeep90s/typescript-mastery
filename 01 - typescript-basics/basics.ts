let username: string;

username = "Amandeep";

// username = true; // Error: Type 'boolean' is not assignable to type 'string'.

let age = 36;

// Assigning types of function parameters
function sum(a: number, b = 10) {
  return a + b;
}

const result = sum(3);
console.log(result); // Output: 13
