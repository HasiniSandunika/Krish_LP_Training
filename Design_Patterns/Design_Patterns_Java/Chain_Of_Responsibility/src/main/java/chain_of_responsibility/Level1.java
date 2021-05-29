package chain_of_responsibility;

public class Level1 extends EmployeeSalaryHandler {

    @Override
    public double addSalary(EmployeeSalary employeeSalary) {
        if (employeeSalary.getHours() <= employeeSalary.getHoursLevel1())
            return 0;
        employeeSalary.setAddition(employeeSalary.getOtAddition() * employeeSalary.getBaseSalary());
        if (employeeSalary.getHours() > employeeSalary.getHoursLevel1() &&
                employeeSalary.getHours() <= employeeSalary.getHoursLevel2())
            return employeeSalary.getAddition();
        else
            return successor.addSalary(employeeSalary);
    }

}
