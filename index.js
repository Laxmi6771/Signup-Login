function signup(userName) {
  let users = ["alice", "bob", "charlie"];
  if (users.includes(userName)) {
    return "User Already Registered, Please Login";
  } else {
    users.push(userName);
    return "Signup Successful, Please Login";
  }
}

// Example usage
console.log(signup("bob"));     // User Already Registered
console.log(signup("Laxmi")); // Signup Successful

function login(userName, password) {
  let users = ["alice", "bob", "charlie"];
  if (!users.includes(userName)) {
    return "User Not Found, Please Signup";
  } else if (password === "Emp@123") {
    return "Login Successful...";
  } else {
    return "Wrong Password....";
  }
}

// Example usage
console.log(login("bob", "Emp@123")); // Login Successful
console.log(login("bob", "wrong"));   // Wrong Password
console.log(login("Laxmi", "Emp@123")); // User Not Found