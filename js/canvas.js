$(document).ready(function() {
	// Hide browser top bar in mobiles
	$('body').scrollTop(0);

	$('.icon-nav').on('click', function(){
		$('#nav').slideToggle();
		$(this).toggleClass('active');
	});
	// Function to fade in image sprites
  	$('.sprite').fadeSprite();
	// Function to animate when leaving page
	$('.transition, #nav a, #nav-footer a, #thumbs a, #next a, #prev a, #face a').leavePage();
	// Preload the page with jPreLoader
	$('body').jpreLoader({
		showSplash: true
	}, function() {	
		//Show the page once images are loaded
		// Animate the header first			
		$('#nav').stop().animate({'opacity': '1', 'top':'0'}, 1000);
			$('#face').animateHome();
			$('#face').resizeFace();
	});
});

$(function() {
    // Stick the #nav to the top of the window
    var nav = $('#nav');
    var navHomeY = nav.offset().top;
    var isFixed = false;
    var $w = $(window);
    $w.scroll(function() {
        var scrollTop = $w.scrollTop();
        var shouldBeFixed = scrollTop > navHomeY;
        if (shouldBeFixed && !isFixed) {
            nav.css({
                position: 'fixed',
                top: 0,
                left: nav.offset().left,
                width: nav.width()
            });
            isFixed = true;
        }
        else if (!shouldBeFixed && isFixed)
        {
            nav.css({
                position: 'static'
            });
            isFixed = false;
        }
    });
});
var scrolltotop={

    //startline: Integer. Number of pixels from top of doc scrollbar is scrolled before showing control

    //scrollto: Keyword (Integer, or "Scroll_to_Element_ID"). How far to scroll document up when control is clicked on (0=top).

    setting: {startline:200, scrollto: 0, scrollduration:1000, fadeduration:[500, 100]},

    controlHTML: '<img src="images/top.png" width="35px" height="35px" id="top"/>', //HTML for control, which is auto wrapped in DIV w/ ID="topcontrol"

    controlattrs: {offsetx:4, offsety:-1}, //offset of control relative to right/ bottom of window corner

    anchorkeyword: '#top', //Enter href value of HTML anchors on the page that should also act as "Scroll Up" links

 state: {isvisible:false, shouldvisible:false},


    scrollup:function(){

        if (!this.cssfixedsupport) //if control is positioned using JavaScript

            this.$control.css({opacity:0}) //hide control immediately after clicking it

        var dest=isNaN(this.setting.scrollto)? this.setting.scrollto : parseInt(this.setting.scrollto)

        if (typeof dest=="string" && jQuery('#'+dest).length==1) //check element set by string exists

            dest=jQuery('#'+dest).offset().top

        else

            dest=0

        this.$body.animate({scrollTop: dest}, this.setting.scrollduration);

    },


    keepfixed:function(){

        var $window=jQuery(window)

        var controlx=$window.scrollLeft() + $window.width() - this.$control.width() - this.controlattrs.offsetx

        var controly=$window.scrollTop() + $window.height() - this.$control.height() - this.controlattrs.offsety

        this.$control.css({left:controlx+'px', top:controly+'px'})

    },


    togglecontrol:function(){



        var scrolltop=jQuery(window).scrollTop()

        if (!this.cssfixedsupport)

            this.keepfixed()

        this.state.shouldvisible=(scrolltop>=this.setting.startline)? true : false

        if (this.state.shouldvisible && !this.state.isvisible){

            this.$control.stop().animate({opacity:1}, this.setting.fadeduration[0])

            this.state.isvisible=true

        }

        else if (this.state.shouldvisible==false && this.state.isvisible){

            this.$control.stop().animate({opacity:0}, this.setting.fadeduration[1])

            this.state.isvisible=false

        }
    },
   
    init:function(){
        jQuery(document).ready(function($){
            var mainobj=scrolltotop
            var iebrws=document.all
            mainobj.cssfixedsupport=!iebrws || iebrws && document.compatMode=="CSS1Compat" && window.XMLHttpRequest //not IE or IE7+ browsers in standards mode
            mainobj.$body=(window.opera)? (document.compatMode=="CSS1Compat"? $('html') : $('body')) : $('html,body')
            mainobj.$control=$('<div id="topcontrol">'+mainobj.controlHTML+'</div>')
                .css({position:mainobj.cssfixedsupport? 'fixed' : 'absolute', bottom:mainobj.controlattrs.offsety, right:mainobj.controlattrs.offsetx, opacity:0, cursor:'pointer'})
                .attr({title:''})
                .click(function(){mainobj.scrollup(); return false})
                .appendTo('body')
            if (document.all && !window.XMLHttpRequest && mainobj.$control.text()!='') //loose check for IE6 and below, plus whether control contains any text
                mainobj.$control.css({width:mainobj.$control.width()}) //IE6- seems to require an explicit width on a DIV containing text
            mainobj.togglecontrol()

$('a[href="' + mainobj.anchorkeyword +'"]').click(function(){
                mainobj.scrollup()
                return false
            })
            $(window).bind('scroll resize', function(e){
                mainobj.togglecontrol()
            })
        })
    }
}
scrolltotop.init()

function scaleDown() {

	$('.og-grid > li').removeClass('current').addClass('not-current');
	$('nav > ul > li').removeClass('current-li');

}

function show(category) {

	scaleDown();

	$('#' + category).addClass('current-li');
	$('.' + category).removeClass('not-current');
	$('.' + category).addClass('current');

	if (category == "all") {
		$('nav > ul > li').removeClass('current-li');
		$('#all').addClass('current-li');
		$('.og-grid > li').removeClass('current, not-current');
	}

}

$(document).ready(function(){

	$('#all').addClass('current-li');

	$("nav > ul > li").click(function(){
		show(this.id);
	});

});




