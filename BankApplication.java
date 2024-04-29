abstract class Account {
    private String accountNumber;
    private double balance;

    public Account(String accountNumber, double initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    public boolean withdraw(double amount) {
        if (amount <= balance) {
            balance -= amount;
            return true;
        } else {
            return false;
        }
    }

    public abstract String getAccountInfo(); // Abstract method
}

class SavingsAccount extends Account {
    private double interestRate;

    public SavingsAccount(String accountNumber, double initialBalance, double interestRate) {
        super(accountNumber, initialBalance);
        this.interestRate = interestRate;
    }

    @Override
    public String getAccountInfo() {
        return String.format(
            "Account Number: %s, Balance: %.2f, Account Type: Savings, Interest Rate: %.2f%%",
            getAccountNumber(),
            getBalance(),
            this.interestRate * 100
        );
    }
}

class CheckingAccount extends Account {
    private double overdraftLimit;

    public CheckingAccount(String accountNumber, double initialBalance, double overdraftLimit) {
        super(accountNumber, initialBalance);
        this.overdraftLimit = overdraftLimit;
    }

    @Override
    public String getAccountInfo() {
        return String.format(
            "Account Number: %s, Balance: %.2f, Account Type: Checking, Overdraft Limit: %.2f",
            getAccountNumber(),
            getBalance(),
            this.overdraftLimit
        );
    }
}

public class BankApplication {
    public static void main(String[] args) {
        SavingsAccount savings =new SavingsAccount("S12345", 1000, 0.02);
        CheckingAccount checking =new CheckingAccount("C12345", 500, 100);

        System.out.println(savings.getAccountInfo());
        System.out.println(checking.getAccountInfo());
    }
}
