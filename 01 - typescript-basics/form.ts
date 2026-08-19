const usernameField = document.getElementById("username");

if (!usernameField) throw new Error("Username field not found");

console.log(usernameField.value);
