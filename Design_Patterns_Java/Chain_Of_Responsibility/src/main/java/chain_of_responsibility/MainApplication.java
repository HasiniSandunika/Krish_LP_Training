package chain_of_responsibility;

public class MainApplication {

    public static void main(String[] args) {
        BindChain.buildChain();
        EmployeeSalary employee1=new EmployeeSalary("0001", "Hasini", "ASE", 5000, 200);
        EmployeeSalary employee2=new EmployeeSalary("0002", "Hasini", "SE", 6000, 250);
        EmployeeSalary employee3=new EmployeeSalary("0003", "Hasini", "AQA", 5000, 150);
        EmployeeSalary employee4=new EmployeeSalary("0004", "Hasini", "QA", 6000, 210);
        BindChain.InitialLevel().addSalary(employee1);
        BindChain.InitialLevel().addSalary(employee2);
        BindChain.InitialLevel().addSalary(employee3);
        BindChain.InitialLevel().addSalary(employee4);

        System.out.println(employee1);
        System.out.println(employee2);
        System.out.println(employee3);
        System.out.println(employee4);
    }

}
