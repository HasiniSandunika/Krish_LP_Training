package factory_method_design_pattern;

public class EmployeeFactory {

    protected static Employee createEmployee(int id, LEVELS levels, int hours){
        switch (levels) {
            case LEVEL1 -> {
                return new EmployeeLevel1(id, levels, hours);
            }
            case LEVEL2 -> {
                return new EmployeeLevel2(id, levels, hours);
            }
            case LEVEL3 -> {
                return new EmployeeLevel3(id, levels, hours);
            }
            default -> {
                return null;
            }
        }
    }

}
