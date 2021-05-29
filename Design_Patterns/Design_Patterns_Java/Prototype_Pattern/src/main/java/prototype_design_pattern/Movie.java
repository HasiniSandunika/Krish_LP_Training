package prototype_design_pattern;

public class Movie extends Video{

    private final static int MOVIE_ADD=50;
    private double moviePrice;

    @Override
    public String toString() {
        return "Movie{" +
                "moviePrice=" + moviePrice +
                ", quality='" + quality + '\'' +
                ", time=" + time +
                '}';
    }

    @Override
    protected void calculatePrice() {
        moviePrice=BASE+MOVIE_ADD;
    }
}
