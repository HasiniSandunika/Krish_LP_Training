package singleton_pattern;
import com.itextpdf.text.*;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Entity {
    private int id;
    private String name;
    private Document doc;

    public Entity(int id, String name, Document doc){
        this.id=id;
        this.name=name;
        this.doc=doc;
        setStatus();
    }

    public void setStatus(){
        try{
            if(id>=0){
                doc.add(Chunk.NEWLINE);
                doc.add(new Paragraph("Correct Input | "+"ID: "+id+" | Name: "+name+" | Logged Date and Time: "+
                        new SimpleDateFormat("yyyy-MM-dd hh:mm:ss.SSS").format(new Date()),
                        new Font(Font.FontFamily.HELVETICA, 10.0f, Font.NORMAL, BaseColor.BLACK)));
            }
            else{
                doc.add(Chunk.NEWLINE);
                doc.add(new Paragraph("Wrong Input | "+"ID: "+id+" | Name: "+name+" | Logged Date and Time: "+
                        new SimpleDateFormat("yyyy-MM-dd hh:mm:ss.SSS").format(new Date()),
                        new Font(Font.FontFamily.HELVETICA, 10.0f, Font.NORMAL, BaseColor.RED)));
            }
        }
        catch (DocumentException ex){
            ex.printStackTrace();
        }
    }

}

