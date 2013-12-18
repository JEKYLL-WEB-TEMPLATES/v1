<!DOCTYPE html>
<!--
     ____.            .__                   __________        .__       .__                  
    |    | ____  _____|  |__  __ _______    \______   \_____  |__| ____ |  |__  __ _________ 
    |    |/  _ \/  ___/  |  \|  |  \__  \    |       _/\__  \ |  |/ ___\|  |  \|  |  \_  __ \
/\__|    (  <_> )___ \|   Y  \  |  // __ \_  |    |   \ / __ \|  \  \___|   Y  \  |  /|  | \/
\________|\____/____  >___|  /____/(____  /  |____|_  /(____  /__|\___  >___|  /____/ |__|   
                    \/     \/           \/          \/      \/        \/     \/              
is watching you.*


*not really.
-->
<html>
<head>
<link type="text/css" rel="stylesheet" href="css/style.css">
<link rel="apple-touch-icon" href="<?php bloginfo('template_directory');?>/img/iosicon.PNG">
<link type="text/css" rel="stylesheet" href="<?php bloginfo('template_directory');?>css/animations.css">
<title><?php echo get_stylesheet_uri(); ?></title>
<link rel="icon" type="image/png" href="<?php bloginfo('template_directory');?>/img/favicon.ico">
</head>

<body>
<!-- Scripts --> 
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.3/jquery.min.js"></script> 
<script src="<?php bloginfo('template_directory');?>js/navbar.js"></script> 
<script src="<?php bloginfo('template_directory');?>js/floatingmenublog.js"></script> 
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"></script> 
<script type="text/javascript" src="<?php bloginfo('template_directory');?>js/jquery.jscroll.js"></script> 
<script>
        $(document).ready(function(){
                // scroll body to 0px on click
                $('#footer-img').click(function () {
                    $('body,html').animate({
                        scrollTop: 0
                    }, 800);
                    return false;
                });
            });
</script>  
<script>
  (function() {
    var cx = '002042857165603932064:chhcjoddbcw';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
        '//www.google.com/cse/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();
</script>
<div id="before-footer">
<div class="top" id="top-img">
  <h1 id="top-text" class="top-text"><span id="bold">JOSHUA</span> RAICHUR</h1>
</div>
<div align=right>
  <gcse:search></gcse:search>
</div>
<div id="nav">
  <nav>
    <ul id="nav-list" class=nav>
      <li class="active"><a href="index.html">blog</a></li>
      <li><a href="portfolio.html">portfolio</a></li>
      <li><a href="about.html">about</a></li>
      <li><a href="contact.html">contact</a></li>
    </ul>
  </nav>
</div>
</div>
