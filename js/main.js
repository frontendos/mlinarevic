
$('.js-toggleMenu').click(function() {
	$('.js-header').toggleClass('is-open');
});

$('.js-nav__link').click(function() {
	$('.js-header').removeClass('is-open');
});