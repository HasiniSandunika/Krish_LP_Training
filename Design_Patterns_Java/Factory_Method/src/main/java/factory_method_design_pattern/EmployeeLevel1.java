package factory_method_design_pattern;

public class EmployeeLevel1 extends Employee {

    private static final int LEVEL1_ADD=1000;

    public EmployeeLevel1(int id, LEVELS levels, int hours) {
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
            salary= BASE_SALARY+ BASE_SALARY* OVERTIME_ADD+LEVEL1_ADD;
        else
            salary= BASE_SALARY+LEVEL1_ADD;
    }

}
