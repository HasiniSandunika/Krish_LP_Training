package prototype_design_pattern;
import java.util.HashMap;
import java.util.Map;

public class VideoRegistry {

    private Map<VideoType, Video> videos = new HashMap<>();

    public VideoRegistry(){
        initialize();

    }

    private void initialize() {
        Video movie1=new Movie();
        movie1.setQuality("HD");
        movie1.setTime(180);
        movie1.calculatePrice();

        Video game1=new VideoGame();
        game1.setQuality("HD");
        game1.setTime(240);
        game1.calculatePrice();

        videos.put(VideoType.MOVIE,movie1);
        videos.put(VideoType.VIDEO_GAME, game1);
    }

    protected Video getVideo(VideoType videoType) throws CloneNotSupportedException {
        Video video= (Video) videos.get(videoType).clone();
        return video;
    }

}
