/* Author: Christian Sterzl

*/

$('#search a').click(function() {
	$(this).parent().toggleClass('searchactive');
	setTimeout(function() { $('#searchinput').focus(); }, 2000);
});

$('#searchinput').blur(function() {
	setTimeout(function() { $('#search').removeClass('searchactive'); }, 200);
});

$('#home a').click(function() {
	$('#home-content').parent().toggleClass('active');
});

$('#work a').click(function() {
	$('#work-content').parent().toggleClass('active');
});

$('#about a').click(function() {
	$('#about-content').parent().toggleClass('active');
});

$('#contact a').click(function() {
	$('#contact-content').parent().toggleClass('active');
});
