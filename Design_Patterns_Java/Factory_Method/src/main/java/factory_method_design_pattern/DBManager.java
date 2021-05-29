package factory_method_design_pattern;
import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;

public class DBManager {

    private static volatile MongoCollection<Document> collection;

    private DBManager(){
        if(collection!=null)
            throw new RuntimeException("access the connect method");
    }

    protected static MongoCollection<Document> connect(){
        if(collection==null){
            synchronized (DBManager.class){
                if(collection==null){
                    MongoClient mongoClient=new MongoClient("localhost",27017);
                    MongoDatabase mongoDatabase = mongoClient.getDatabase("design_patterns");
                    collection = mongoDatabase.getCollection("factory_method_collection");
                    return collection;
                }
            }
        }
        return collection;
    }

}
