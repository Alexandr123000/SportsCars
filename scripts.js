window.onscroll = function() {functionScroll()};

function functionScroll()
{
	var button = document.getElementById("scroll-top-button");

	if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500)
	{
		button.style.display = "block";
	}
	else
	{
		button.style.display = "none";
	}
}

var btn = document.getElementById("scroll-top-button");

function topFunction() //scrolling the page
{
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}