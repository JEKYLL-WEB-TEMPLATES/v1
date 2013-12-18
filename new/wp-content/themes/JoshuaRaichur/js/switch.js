$(document).ready(function() {

    var items = ["is a design freak", "is a technology enthusiast", "is an avid Apple fanboy", "is an obsessive Googler", "is a learning electric guitarist", "is a soccer freestyler", "is a wannabe iOS application developer", "is a YouTube fanatic", "is a lone code-a-thoner", "is a follower of Jesus", "is an overindulgent Oreo consumer", "is a fascinated tinkerer", "is a creative thinker", "is a passionate learner of new things", "is a Comic Sans hater", "refers to himself in third person", "is out of witty remarks"],
        $text = $( '#switch' ),
        delay = .7; //seconds
     
    function loop ( delay ) {
        $.each( items, function ( i, elm ){
            $text.delay( delay*1E3).fadeOut();
            $text.queue(function(){
                $text.html( items[i] );
                $text.dequeue();
            });
            $text.fadeIn();
            $text.queue(function(){
                if ( i == items.length -1 ) {
                    loop(delay);   
                }
                $text.dequeue();
            });
        });
    }

    loop( delay );
    
});

$(document).ready(function() {
	
	var abouttext = "Hi, I&rsquo;m Josh. I&rsquo;m a geek. Not enough for you?  Well, I started designing just a few years ago, but technology and art have been things I&rsquo;ve loved since I was a kid. At thirteen I had a weblog with over 500 tech-related posts and would go to malls just to collect flyers of the latest gadgets (No, I&rsquo;m not kidding!). I&rsquo;ve always enjoyed learning and increasing my human capital. There&rsquo;s always more to learn! I can proudly say that 85% of my education does not come from boring lectures in a classroom. It is through my passionate curiosity and eagerness to learn more. I spend some time everyday staring at a monitor reading, designing and coding. As of now I&rsquo;m pretty handy with Photoshop, Illustrator, InDesign and After Effects and can speak HTML, CSS and Javascript fluently. I am also learning Objective-C right now. Yes, right now.Away from my keyboard, I play guitar and football, sketch, iPodtouchograph, and enjoy a lazy Sunday afternoon with a good magazine or my Arduino kit. Now that you know a bit about me, go ahead and check out my portfolio or drop me an email. I am currently taking design enquiries if you have an interesting project we could work together on.",
	$aboutnumber = $('#number'),
	delay = 8;
	$aboutnumber.html(abouttext.length*8);
	});
	
function changeImage()
{
    var img = document.getElementById("#top");
    img.src = img/header-images/[x];
    x++;

    if(x >= images.length){
        x = 0;
    } 

    fadeImg(img, 100, true);
    setTimeout("changeImage()", 30000);
}

function fadeImg(el, val, fade){
    if(fade === true){
        val--;
    }else{
        val ++;
    }

    if(val > 0 && val < 100){
        el.style.opacity = val / 100;
        setTimeout(function(){fadeImg(el, val, fade);}, 10);
    }
}

var images = [],
x = 0;

images[0] = "1.jpg";
images[1] = "2.jpg";
images[2] = "3.jpg";
images[3] = "4.jpg";
images[4] = "5.jpg";
images[5] = "6.jpg";
images[6] = "7.jpg";


setTimeout("changeImage()", 30000);