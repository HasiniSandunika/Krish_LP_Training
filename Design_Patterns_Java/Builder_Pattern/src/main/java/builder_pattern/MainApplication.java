package builder_pattern;

public class MainApplication {

    public static void main(String[] args) {
        AccountTelescope1 accountTelescope1=new AccountTelescope1("001-234-332",
                "Hasini", "Colombo");
        System.out.println(accountTelescope1);
        AccountTelescope2 accountTelescope2=new AccountTelescope2("001-500-200",
                "Hasini", "Colombo", "Fixed-Deposit");
        System.out.println(accountTelescope2);

        Account.AccountBuilder accountBuilder=new Account.AccountBuilder("001-400-165",
                "Hasini", "Colombo");
        Account account=accountBuilder.setType("Current").setDeposit(5000).build();
        System.out.println(account);
        Account.AccountBuilder accountBuilder1=new Account.AccountBuilder("001-400-900",
                "Hasini", "Colombo");
        Account account1=accountBuilder1.setType("Fixed-Deposit").setDeposit(7000).build();
        System.out.println(account1);
    }

}
