package factory_method_design_pattern;

public class EmployeeLevel2 extends Employee {

    private static final int LEVEL2_ADD=500;

    public EmployeeLevel2(int id, LEVELS levels, int hours) {
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
            salary= BASE_SALARY+ BASE_SALARY* OVERTIME_ADD+LEVEL2_ADD;
        else
            salary= BASE_SALARY+LEVEL2_ADD;
    }

}
