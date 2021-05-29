package prototype_design_pattern;

public class MainApplication {

    public static void main(String[] args) throws CloneNotSupportedException {
        VideoRegistry videoRegistry=new VideoRegistry();
        Movie movie= (Movie) videoRegistry.getVideo(VideoType.MOVIE);
        System.out.println(movie);
        movie.setQuality("1080p");
        movie.setTime(200);
        System.out.println(movie);
        Movie movie1= (Movie) videoRegistry.getVideo(VideoType.MOVIE);
        System.out.println(movie1);

    }
}
