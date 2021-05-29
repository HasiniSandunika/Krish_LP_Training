package factory_method_design_pattern;

public class EmployeeLevel3 extends Employee {

    private static final int LEVEL3_ADD=250;

    public EmployeeLevel3(int id, LEVELS levels, int hours) {
        super(id, levels, hours);
        this.id=id;
        this.levels=levels;
        this.hours=hours;
        calculateSalary();
        save();
    }

    @Override
    protected void calculateSalary() {
        if(hours> THRESHOLD_TIME)
            salary= BASE_SALARY+ BASE_SALARY* OVERTIME_ADD+LEVEL3_ADD;
        else
            salary= BASE_SALARY+LEVEL3_ADD;
    }

}
