const user: {
  name: string;
  age: number | string;
  hobbies: string[];
  role: {
    description: string;
    id: number;
  };
} = {
  name: "John Doe",
  age: 30,
  hobbies: ["reading", "gaming", "coding"],
  role: {
    description: "Admin",
    id: 1,
  },
};

// The must not be null type
let val: {} = "Aman";
val = 20;
val = true;
// val = null; // This will cause an error because null is not assignable to type '{}'
// val = undefined; // This is allowed because undefined is assignable to type '{}'

// Flexible objects with Record type
const userRecord: Record<string, string | number> = {
  name: "Jane Doe",
  age: 25,
  city: "New York",
};
