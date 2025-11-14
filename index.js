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

function login(userName, password) {
    let users = ["Chinni", "Ashitha", "Keerthi", "Swetha"]; 

    if (!users.includes(userName)) {
        return "User Not Found, Please Signup";
    } else {
        if (password === "Emp@123") {
            return "Login Successful";
        } else {
            return "Wrong Password";
        }
    }
}

console.log(login("Chinni", "Emp@123"));  
console.log(login("Chinni", "wrong"));    
console.log(login("Unknown", "Emp@123")); 
