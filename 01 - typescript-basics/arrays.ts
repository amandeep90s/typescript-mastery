let hobbies = ["sports", "coding"];

// hobbies.push(10); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

let users: (string | number)[] = ["Amandeep", 36]; // This is valid because users can contain both strings and numbers.
users.push("John");

// Generics types allow you to create reusable components that work with a variety of data types while still maintaining type safety.
const numbers: Array<number | string> = ["one", 2, 3];

// Tuples are a special type of array that allows you to define the types of elements at specific positions in the array.
let user: [string, number] = ["Amandeep", 36]; // This is valid because user is a tuple that contains a string and a number.
