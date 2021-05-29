package factory_method_design_pattern;
import com.mongodb.client.MongoCollection;
import org.bson.Document;

public class MainApplication {

    protected static MongoCollection<Document> collection;

    public static void main(String[] args) {
        collection= DBManager.connect();
        Employee employee1=EmployeeFactory.createEmployee(1, LEVELS.LEVEL1, 200);
        if(employee1 != null)
            employee1.print();
        Employee employee2=EmployeeFactory.createEmployee(2, LEVELS.LEVEL2, 40);
        if(employee2 != null)
            employee2.print();
        Employee employee3=EmployeeFactory.createEmployee(3, LEVELS.LEVEL3, 250);
        if(employee3 != null)
            employee3.print();
        Employee employee4=EmployeeFactory.createEmployee(4, LEVELS.LEVEL2, 100);
        if(employee4 != null)
            employee4.print();
        Employee employee5=EmployeeFactory.createEmployee(5, LEVELS.LEVEL1, 250);
        if(employee5 != null)
            employee5.print();
    }

}
