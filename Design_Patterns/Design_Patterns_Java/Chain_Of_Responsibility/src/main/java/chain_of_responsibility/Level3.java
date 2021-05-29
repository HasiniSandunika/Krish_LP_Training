package chain_of_responsibility;

public class Level3 extends EmployeeSalaryHandler{

    @Override
    public double addSalary(EmployeeSalary employeeSalary) {
        employeeSalary.setAddition(employeeSalary.getAddition()+employeeSalary.getOtherAddition());
        return employeeSalary.getAddition();
    }
}
