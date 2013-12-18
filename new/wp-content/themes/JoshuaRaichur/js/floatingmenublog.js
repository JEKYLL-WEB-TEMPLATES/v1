var name = "#float-menu";  
var menuYloc = null;  
var footer = '.talkandstalk'; //Specify the ID for your footer.

 $(document).ready(
    function()
    {  
        menuYloc = parseInt($(name).css("top").substring(0,$(name).css("top").indexOf("px")))  
        $(window).scroll(
            function() 
            {   
                var offset = menuYloc + $(document).scrollTop();
                var anotherOffset = offset;

                var docTop = $(window).scrollTop();
                var footerTop = $(footer).offset().top;

                var maxOffset = footerTop - $(name).height() - 220;
                var minOffset = docTop;

                offset = offset > maxOffset ? maxOffset : offset;
                offset = offset < minOffset ? minOffset : offset;

                $(name).animate({top:offset + 'px'},{duration:0,queue:false});      
            }
        );  
    }
);
