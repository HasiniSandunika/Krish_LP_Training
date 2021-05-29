package prototype_design_pattern;

public class VideoGame extends Video{

    private final static int VIDEO_GAME_ADD=50;
    private double VideoGamePrice;

    @Override
    public String toString() {
        return "VideoGame{" +
                "quality='" + quality + '\'' +
                ", time=" + time +
                ", VideoGamePrice=" + VideoGamePrice +
                '}';
    }

    @Override
    protected void calculatePrice() {
        VideoGamePrice=BASE+VIDEO_GAME_ADD;
    }
}
