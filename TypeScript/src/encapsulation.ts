class User {
  private userName: string;
  private password: string;

  constructor(user_info: { userName: string; password: string }) {
    this.userName = user_info.userName;
    this.password = user_info.password;
  }

  public authenticatePassword(password: string): boolean {
    return this.password === password ? true : false;
  }

  public changePassWord(password: string) {
    this.password = password;
  }
}

const accountUser1 = new User({ userName: "Ramu", password: "Ramu1234" });

console.log(accountUser1.authenticatePassword("ramu"));
console.log(accountUser1.authenticatePassword("Ramu1234"));

accountUser1.changePassWord("Ramu");
console.log(accountUser1.authenticatePassword("ramu"));
