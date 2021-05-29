var video=function(){
};

video.prototype.time=120;
video.prototype.quality="HD";
video.prototype.price=200;

video.prototype.time=200;
video.prototype.quality="1080p";
video.prototype.price=250;

video.prototype.print=function(){
    console.log(this.time+" "+this.quality+" "+this.price);
};

var newVideo=new video();
//newVideo.time=180;
newVideo.quality="720p";
newVideo.price=300;

console.log("time" in newVideo);
console.log(newVideo.hasOwnProperty("time"));

