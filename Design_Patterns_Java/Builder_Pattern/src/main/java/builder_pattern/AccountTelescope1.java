package builder_pattern;

public class AccountTelescope1 {

    private String accNo;
    private String holder;
    private String city;
    private String type;
    private double deposit;

    public AccountTelescope1(String accNo, String holder, String city) {
        this.accNo=accNo;
        this.holder=holder;
        this.city = city;
    }

    public AccountTelescope1(String accNo, String holder, String city, String type) {
        this(accNo, holder, city);
        this.type = type;
    }

    public AccountTelescope1(String accNo, String holder, String city, String type, double deposit) {
        this(accNo, holder, city, type);
        this.deposit = deposit;
    }

    @Override
    public String toString() {
        return  "From AccountTelescope1\n"+
                "Account No: " + accNo + '\n' +
                "Holder: " + holder + '\n' +
                "City: " + city + '\n' +
                "Account Type: " + type + '\n' +
                "Amount of Deposited: " + deposit +
                '\n';
    }

}
