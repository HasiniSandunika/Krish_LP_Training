package chain_of_responsibility;

public class Level2 extends EmployeeSalaryHandler{

    @Override
    public double addSalary(EmployeeSalary employeeSalary) {
        if(employeeSalary.getHours()>employeeSalary.getHoursLevel2() &&
                employeeSalary.getHours()<=employeeSalary.getHoursLevel3()){
            employeeSalary.setAddition(employeeSalary.getAddition()+employeeSalary.getProjectAddition());
            return employeeSalary.getAddition();
        }
        else{
            employeeSalary.setAddition(employeeSalary.getAddition()+employeeSalary.getProjectAddition());
            return successor.addSalary(employeeSalary);
        }
    }

}
