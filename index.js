let users = ["Chinni", "Ashitha", "keshav"];

function signup(userName) {
    if (users.includes(userName)) {
        return "User Already Registered, Please Login";
    } else {
        users.push(userName);
        return "Signup Successful, Please Login";
    }
}


console.log(signup("Chinni"));   
console.log(signup("Swetha"));   
