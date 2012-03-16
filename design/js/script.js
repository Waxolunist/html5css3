/* Author: Christian Sterzl
*/

$(window).bind('hashchange', function() {
	inActivateSearch();
	activateArea(window.location.hash);
});

function activateSearch() {
		$('#search').addClass('searchactive');
		setTimeout(function() { $('#searchinput').focus(); }, 2000);
}

function inActivateSearch() {
		$('#search').removeClass('searchactive');
}

function activateArea(areaid) {
	console.log(areaid);
	if(areaid === "#search") {
		activateSearch();
	} else {
		$('#content')[0].className = $('#content')[0].className.replace(/\bactivecontent.*?\b/g, '');	
		$('.activecontent').removeClass('activecontent');
		var activeArea = $(areaid + '-content');
		var index = activeArea.parent().children().index(activeArea);
		activeArea.addClass('activecontent');	
		activeArea.parent().addClass('activecontent_' + index);
	}
}

function getActiveIndex() {
		var activeArea = $('.activecontent');
		return activeArea.parent().children().index(activeArea);
}

//0-based
function getAreaIdByNumber(idx) {
	return '#' + $('nav ul li:nth-child(' + (idx + 1) + ')').attr('id');
}

function getNextArea() {
	var idx = getActiveIndex() + 1;
	if(idx < 0) idx = 0;
	else if(idx > 3) idx = 3;
	return getAreaIdByNumber(idx);
}

function getLastArea() {
	var idx = getActiveIndex() - 1;
	if(idx < 0) idx = 0;
	else if(idx > 3) idx = 3;
	return getAreaIdByNumber(idx);
}

function resetAllAreas() {
	inActivateSearch();
	$('#content')[0].className = $('#content')[0].className.replace(/\bactivecontent.*?\b/g, '');	
	$('.activecontent').removeClass('activecontent');
}

$(document).ready(function() {
	console.log("Document ready");

	// Reset all to default
	resetAllAreas();

	// If no target is given choose home target
	if(window.location.hash === "") {
		window.location.hash = "#home";
		activateArea("#home");
	} else if (window.location.hash === "#search") {
		activateArea("#home");
	}



	// Prefill all forms
	var qs = $.deparam.querystring();	
	$.each(qs, function(k,v) {
		$('[name=' + k + ']').val(v);	
	});

	activateArea(window.location.hash);
	
	//bind keys
	$(document).bind('keydown', 'left', function() { 
			window.location.hash = getLastArea(); 
	});
	$(document).bind('keydown', 'right', function() { 
			window.location.hash = getNextArea(); 
	});
});
