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
console.log(signup("manogna")); // Signup Successful