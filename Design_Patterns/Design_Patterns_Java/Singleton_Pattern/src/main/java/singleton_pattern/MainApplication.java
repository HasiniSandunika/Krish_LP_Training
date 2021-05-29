package singleton_pattern;
import com.itextpdf.text.Document;
import java.awt.*;
import java.io.File;
import java.io.IOException;

public class MainApplication {

    public static void main(String[] args) throws IOException {

        long start;
        long end;

        start=System.currentTimeMillis();
        Document doc=SingletonImplementation.createLogger();
        end=System.currentTimeMillis();
        System.out.println("Document 1: "+doc);
        System.out.println("Executed Time: "+ (end-start));

        start=System.currentTimeMillis();
        Document doc1=SingletonImplementation.createLogger();
        end=System.currentTimeMillis();
        System.out.println("Document 2: "+doc1);
        System.out.println("Executed Time: "+ (end-start));

        Entity entity1=new Entity(1, "A", doc);
        Entity entity2=new Entity(2, "B", doc);
        Entity entity3=new Entity(-1, "C", doc);
        Entity entity4=new Entity(-2, "D", doc);
        Entity entity5=new Entity(3, "E", doc);
        doc.close();
        doc1.close();
        File f = new File(SingletonImplementation.getPath());
        Desktop.getDesktop().open(f);
    }
}

