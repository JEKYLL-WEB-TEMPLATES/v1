
<div class="talkandstalk">
  <ul id="social-icons">
    <li><a href="http://www.gplus.to/joshuaraichur" target="_blank"><img src="<?php bloginfo('template_directory');?>/img/icons/google+.png"></a></li>
    <li><a href="http://www.twitter.com/JoshuaRaichur" target="_blank"><img src="<?php bloginfo('template_directory');?>/img/icons/twitter.png"></a></li>
    <li><a href="http://www.instagram.com/herestothegeeks" target="_blank"><img src="<?php bloginfo('template_directory');?>/img/icons/instagram.png"></a></li>
    <li><a href="http://www.dribbble.com/geek" target="_blank"><img src="<?php bloginfo('template_directory');?>/img/icons/dribbble.png"></a></li>
    <li><a href="mailto:hello@joshuaraichur.com" target="_blank"><img src="<?php bloginfo('template_directory');?>/img/icons/mailicon.png"></a></li>
  </ul>
  <h1>Talk&Stalk</h1>
</div>
<footer>
  <div id="footer-img"></div>
  <span id="footer-big" class="center"><span id="pixels">0</span> pixels and XX lines of code by <a href="#">Joshua Raichur</a>.</span> <br>
  <a href="http://creativecommons.org/licenses/by-sa/3.0/deed.en_US" target="_blank">Some rights reserved. </a></footer>
<?php wp_footer(); ?>
</body>
<script type="text/javascript">
var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
$('#top-img').css({'background-image': 'url(<?php bloginfo('template_directory');?>/img/header-images/' + images[Math.floor(Math.random() * images.length)] + ')'});
</script>
</html>