let hobbies = ["sports", "coding"];

// hobbies.push(10); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

let users: (string | number)[] = ["Amandeep", 36]; // This is valid because users can contain both strings and numbers.
users.push("John");
