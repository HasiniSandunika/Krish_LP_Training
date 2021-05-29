package factory_method_design_pattern;
import org.bson.Document;
import org.bson.types.ObjectId;

public abstract class  Employee  {

    protected static final double OVERTIME_ADD=0.3;
    protected static final int BASE_SALARY=5000;
    protected static final int THRESHOLD_TIME=180;
    protected int id;
    protected LEVELS levels;
    protected int hours;
    protected double salary;

    protected abstract void calculateSalary();

    public Employee(int id, LEVELS levels, int hours){
        this.id=id;
        this.levels=levels;
        this.hours=hours;
    }

    protected void save(){
        Document document = new Document("_id", new ObjectId());
        document.append("id", id);
        document.append("level", levels.toString());
        document.append("hours", hours);
        document.append("salary", salary);
        MainApplication.collection.insertOne(document);
    }

    protected void print() {
        System.out.println("Employee ID: "+this.id);
        System.out.println("Employee Level: "+this.levels);
        System.out.println("Hours Worked: "+this.hours);
        System.out.printf("Salary: %.2f\n\n", this.salary);
    }

}
