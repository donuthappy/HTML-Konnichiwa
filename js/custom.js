//Page Loading Content
if( $('.pgLoad').length > 0 )
{
	$(window).on('load',function(){
		$('.pgLoad').hide();
	})
}



$(document).ready(function(){

	// Toggle .headerSticky class to #header when page is scrolled		
	$(window).scroll(function() {
		if ($(this).scrollTop() > 70) {
		  $('.hdrFd').addClass('headerSticky');
		} else {
		  $('.hdrFd').removeClass('headerSticky');
		}
	});		
	stickyHead();	
	function stickyHead() {
		if ($(window).scrollTop() > 70) {
			$('.hdrFd').addClass('headerSticky');
		} else {
			$('.hdrFd').removeClass('headerSticky');
		}
	}	

	//Side Menu Toggle
	$('.btnSbMuTg').on('click',function(){
		$('body').toggleClass("sbMenu");
	})

	$('.smClose').on('click',function() {
		$(this).toggleClass('active');
		$('body').toggleClass("sbMenu");
	});




	//Go to page top
	if( $('#pgTop').length > 0 )
	{
		var scrollToTopBtn = document.getElementById("pgTop");
		var rootElement = document.documentElement;

		function scrollToTop() {
		  	rootElement.scrollTo({
				top: 0,
				behavior: "smooth"
		  	});
		}
		scrollToTopBtn.addEventListener("click", scrollToTop);

		$(window).scroll(function() {
			pgTop();
		});
	}
	function pgTop()
	{
		if ($(window).scrollTop() > 300) {
			$('#pgTop').addClass('show');
		} else {
			$('#pgTop').removeClass('show');
		}
	}



	/* For Single window scroll */
	$(".hdNavMenu a").on('click',function(event) {		
		if ( (this.hash !== "") && ($(this.hash).length > 0)) {
			event.preventDefault();			  
			var hash = this.hash;
				$('html, body').animate({
					scrollTop: $(hash).offset().top - 130
				}, 500, function(){
			});
			// $(".hdNavMenu li a").removeClass('active');
			// $(this).addClass('active');
			//window.location.hash = hash;
		}
	});	

});