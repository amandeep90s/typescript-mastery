enum Role {
  Admin,
  Editor,
  Viewer,
}

const userRole: Role = Role.Editor;

console.log(userRole); // Output: User role is: Editor

type JobRole = "admin" | "editor" | "viewer";

const jobRole: JobRole = "admin";

console.log(jobRole); // Output: Job role is: admin
