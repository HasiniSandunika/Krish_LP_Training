package singleton_pattern;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.pdf.PdfWriter;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;

public class SingletonImplementation {

    private static volatile Document doc;
    private static final String path="./"+ "Log_report" + ".pdf";

    private SingletonImplementation(){
        if(doc!=null)
            throw new RuntimeException("use createLogger()");
    }

    public static Document createLogger() {
        if(doc==null){
            synchronized (SingletonImplementation.class){
                if(doc==null){
                    try {
                        doc = new Document();
                        PdfWriter.getInstance(doc, new FileOutputStream(path));
                        doc.open();
                    }
                    catch(FileNotFoundException | DocumentException ex){
                        ex.printStackTrace();
                    }
                }
            }
        }
        return doc;
    }

    public static Document createLogger1() {
        if(doc==null){
            try {
                doc = new Document();
                PdfWriter.getInstance(doc, new FileOutputStream(path));
                doc.open();
            }
            catch(FileNotFoundException | DocumentException ex){
                ex.printStackTrace();
            }
        }
        return doc;
    }

    public static String getPath(){
        return path;
    }

}
