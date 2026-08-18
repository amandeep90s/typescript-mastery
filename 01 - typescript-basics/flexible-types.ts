// Using any type defeats the purpose of using TypeScript. It is better to use union types instead of any type.
let myAge: any = 36;

myAge = "37";

// Using union types allows you to specify multiple types for a variable, providing more flexibility while still maintaining type safety.
let otherAge: number | string = 36;

otherAge = "37"; // This is valid because otherAge can be either a number or a string.
