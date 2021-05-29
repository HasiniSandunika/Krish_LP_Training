package memento_pattern;

public class EmployeeReward {

    private final String id;
    private final String name;
    private final int IP;
    private final int level;
    private final String type;
    private final String place;

    public EmployeeReward(String id, String name, int IP, int level, String type, String place) {
        this.id = id;
        this.name = name;
        this.IP = IP;
        this.level = level;
        this.type = type;
        this.place = place;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public int getIP() {
        return IP;
    }

    public int getLevel() {
        return level;
    }

    public String getType() {
        return type;
    }

    public String getPlace() {
        return place;
    }

}
