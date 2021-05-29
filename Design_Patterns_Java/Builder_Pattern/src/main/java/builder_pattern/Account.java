package builder_pattern;

public class Account {

    private final String accNo;
    private final String holder;
    private final String city;
    private final String type;
    private final double deposit;

    public Account(AccountBuilder accountBuilder) {
        this.accNo=accountBuilder.accNo;
        this.holder=accountBuilder.holder;
        this.city=accountBuilder.city;
        this.type=accountBuilder.type;
        this.deposit=accountBuilder.deposit;
    }

    static class AccountBuilder{

        private final String accNo;
        private final String holder;
        private final String city;
        private String type;
        private double deposit;

        public AccountBuilder(String accNo, String holder, String city){
            this.accNo=accNo;
            this.holder=holder;
            this.city=city;
        }

        public Account build(){
            return new Account(this);
        }

        public AccountBuilder setType(String type){
            this.type=type;
            return this;
        }

        public AccountBuilder setDeposit(double deposit){
            this.deposit=deposit;
            return this;
        }
    }

    @Override
    public String toString() {
        return "Account No: " + accNo + '\n' +
                "Holder: " + holder + '\n' +
                "City: " + city + '\n' +
                "Account Type: " + type + '\n' +
                "Amount of Deposited: " + deposit +
                '\n';
    }

}
