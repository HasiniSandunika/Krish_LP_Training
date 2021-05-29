package chain_of_responsibility;

public abstract class EmployeeSalaryHandler implements SalaryAdd{

    protected EmployeeSalaryHandler successor;

    public abstract double addSalary(EmployeeSalary employeeSalary);

    public void setSuccessor(EmployeeSalaryHandler successor) {
        this.successor = successor;
    }

}
