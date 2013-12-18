$(document).ready(function() {

    var items = ["hey", "hello","Namastē", "hola", "Nǐ hǎo", "bonjour", "geiá sou", "privet", "chào", "ahoj"],
        $text = $( '#languages span' ),
        delay = 2; //seconds
     
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

    var items = ["a Photoshop freak.", "a technology enthusiast.", "an avid Apple fanboy.", "an obsessive Googler.", "a learning electric guitarist.", "a soccer freestyler.", "a wannabe iOS application developer.", "a YouTube fanatic.", "a lone code-a-thoner.", "a follower of Jesus.", "an overindulgent Oreo consumer.", "a fascinated tinkerer.", "a creative thinker.", "a passionate learner of new things.", "a Comic Sans hater.", "out of witty remarks."],
        $text = $( '#switch span' ),
        delay = 2; //seconds
     
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
