function scaleDown() {

	$('.blog > article').removeClass('current').addClass('not-current');
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
		$('.blog > article').removeClass('current, not-current');
	}

}

$(document).ready(function(){

	$('#all').addClass('current-li');

	$("nav > ul > li").click(function(){
		show(this.id);
	});

});