enum Role {
  Admin,
  Editor,
  Viewer,
}

const userRole: Role = Role.Editor;

console.log(userRole); // Output: User role is: Editor

const jobRole: "admin" | "editor" | "viewer" = "admin";

console.log(jobRole); // Output: Job role is: admin
