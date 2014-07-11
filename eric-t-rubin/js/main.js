$('.dropdown').hover( function(){
	//var dropdown = $('.navbar-fixed-top .navbar-collapse .dropdown .dropdown-menu li');
//	if ($('.navbar-fixed-top .navbar-collapse .dropdown .dropdown-menu li').hasClass('dropdown')) {
		$('.dropdown').toggleClass('open');
	// }; 
});

$('.dropdown').on("click", function(event){
	//var dropdown = $('.navbar-fixed-top .navbar-collapse .dropdown .dropdown-menu li');
//	if ($('.navbar-fixed-top .navbar-collapse .dropdown .dropdown-menu li').hasClass('dropdown')) {
		event.preventDefault;
	// }; 
});


