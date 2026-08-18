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
