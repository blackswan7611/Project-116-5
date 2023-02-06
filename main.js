mustacheX = 0;
mustacheY = 0;

function preload()
{
    mustache_image = loadImage("https://i.postimg.cc/8cKFHx6B/moustache.png");
}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        mustacheX = results[0].pose.nose.x;
        mustacheY = results[0].pose.nose.y;
    }
}
function modelLoaded()
{
    console.log("PoseNet is initiallised");
}

function draw()
{
    image(video, 0,0,300,300);
    image(mustache_image, mustacheX-40, mustacheY-2, 80, 40);
}

function take_snapshot()
{
    save("myFilter.png");
}