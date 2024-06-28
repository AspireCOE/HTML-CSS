"use strict";
class User {
    constructor(user_info) {
        this.userName = user_info.userName;
        this.password = user_info.password;
    }
    authenticatePassword(password) {
        return this.password === password ? true : false;
    }
    changePassWord(password) {
        this.password = password;
    }
}
const accountUser1 = new User({ userName: "Ramu", password: "Ramu1234" });
console.log(accountUser1.authenticatePassword("ramu"));
console.log(accountUser1.authenticatePassword("Ramu1234"));
accountUser1.changePassWord("Ramu");
console.log(accountUser1.authenticatePassword("ramu"));
