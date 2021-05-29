package chain_of_responsibility;

public class EmployeeSalary extends Employee{

    private static final int HOURS_LEVEL1=180;
    private static final int HOURS_LEVEL2=200;
    private static final int HOURS_LEVEL3=220;
    private static final double OT_ADDITION=0.3;
    private static final double PROJECT_ADDITION=1000;
    private static final double OTHER_ADDITION=2000;
    private final int hours;
    private final double baseSalary;
    private double addition;

    public EmployeeSalary(String id, String name, String position, double baseSalary, int hours){
        super(id, name, position);
        this.baseSalary=baseSalary;
        this.hours=hours;
    }

    public double getBaseSalary() {
        return baseSalary;
    }

    public int getHoursLevel1() {
        return HOURS_LEVEL1;
    }

    public int getHoursLevel2() {
        return HOURS_LEVEL2;
    }

    public int getHoursLevel3() {
        return HOURS_LEVEL3;
    }

    public double getOtAddition() {
        return OT_ADDITION;
    }

    public double getProjectAddition() {
        return PROJECT_ADDITION;
    }

    public double getOtherAddition() {
        return OTHER_ADDITION;
    }

    public double getAddition() {
        return addition;
    }

    public void setAddition(double addition){
        this.addition=addition;
    }

    public int getHours() {
        return hours;
    }

    @Override
    public String toString() {
        return "\n"+"Employee Salary Sheet: "+super.getId()+"\n"+
                "Employee Name: "+super.getName()+"\n"+
                "Employee Position: "+super.getPosition()+"\n"+
                "Total Hours Worked: "+getHours()+"\n"+
                "Base Salary: "+getBaseSalary()+"\n"+
                "Addition: "+getAddition()+"\n"+
                "_____________________________\n"+
                "Total Salary: "+(getBaseSalary()+getAddition())+"\n"+
                "_____________________________\n"+
                "_____________________________\n";
    }
}
