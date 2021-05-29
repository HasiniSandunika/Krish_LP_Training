package chain_of_responsibility;

public class Employee {
    private final String id;
    private final String name;
    private final String position;

    public Employee(String id, String name, String position) {
        this.id = id;
        this.name = name;
        this.position = position;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getPosition() {
        return position;
    }

}
