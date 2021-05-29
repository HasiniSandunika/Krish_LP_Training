package prototype_design_pattern;

public abstract class Video implements Cloneable{
    protected String quality;
    protected final static int BASE=200;
    protected int time;

    public void setTime(int time) {
        this.time = time;
    }

    public void setQuality(String quality) {
        this.quality = quality;
    }

    protected abstract void calculatePrice();

    @Override
    protected Object clone() throws  CloneNotSupportedException{
        return super.clone();
    }

}
