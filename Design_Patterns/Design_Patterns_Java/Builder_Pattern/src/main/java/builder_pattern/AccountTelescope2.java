package builder_pattern;

public class AccountTelescope2 {

    private String accNo;
    private String holder;
    private String city;
    private String type;
    private double deposit;

    public AccountTelescope2(String accNo, String holder, String city, String type, double deposit) {
        this.accNo = accNo;
        this.holder = holder;
        this.city = city;
        this.type = type;
        this.deposit=deposit;
    }

    public AccountTelescope2(String accNo, String holder, String city, String type) {
        this(accNo, holder, city, type, 0);
    }

    public AccountTelescope2(String accNo, String holder, String city) {
        this(accNo, holder, city, null);
    }

    @Override
    public String toString() {
        return "From AccountTelescope2\n"+
                "Account No: " + accNo + '\n' +
                "Holder: " + holder + '\n' +
                "City: " + city + '\n' +
                "Account Type: " + type + '\n' +
                "Amount of Deposited: " + deposit +
                '\n';
    }

}
