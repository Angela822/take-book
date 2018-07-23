/*
	Strongly Typed by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel
		.breakpoints({
			desktop: '(min-width: 737px)',
			tablet: '(min-width: 737px) and (max-width: 1200px)',
			mobile: '(max-width: 736px)'
		})
		.viewport({
			breakpoints: {
				tablet: {
					width: 1080
				}
			}
		});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Dropdowns.
			$('#nav > ul').dropotron({
				mode: 'fade',
				noOpenerFade: true,
				hoverDelay: 150,
				hideDelay: 350
			});

		// Off-Canvas Navigation.

			// Title Bar.
				$(
					'<div id="titleBar">' +
						'<a href="#navPanel" class="toggle"></a>' +
					'</div>'
				)
					.appendTo($body);

			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						'<nav>' +
							$('#nav').navList() +
						'</nav>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'navPanel-visible'
					});

			// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#titleBar, #navPanel, #page-wrapper')
						.css('transition', 'none');

	});
	// Get the modal
	var modal = document.getElementById('login');
	
	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
	
	//sidebar
	$(function(){
	　$(window).load(function(){
	　　$(window).bind('scroll resize', function(){
	　　var $this = $(this);
	　　var $this_Top=$this.scrollTop();
	  //var $this_Bottom=$this.scrollBottom();
	
	　　//當高度小於300時，區塊... 
	　　if($this_Top < 100){
	　　　$('#sidenav').stop().animate({top:"175px"});
	　　　}
	　　　　if($this_Top > 100){
	　　　　$('#sidenav').stop().animate({top:"30px"});
	　　　 }
	
		/*if($this_Bottom > 200){
	　　　　$('#sidenav').stop().animate({top:"100px"});
	　　　 }*/
	　　}).scroll();
	
	　});
	});
	
	//search
	function myFunction() {
		// Declare variables
		var input, filter, ul, li, a, i, h3;
		input = document.getElementById('query');
		filter = input.value.toUpperCase();
		ul = document.getElementById("serch");
		li = ul.getElementsByTagName('li');
		h3 = li.getElementsByTagName('h3');

		// Loop through all list items, and hide those who don't match the search query
		for (i = 0; i < li.length; i++) {
			a = li[i].getElementsByTagName("a")[0];
			if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
				li[i].style.display = "";
			} else {
				li[i].style.display = "none";
			}
		}
	}

	input.validity = {
		valid:false, // If the input is valid
		customError:false ,// If a custom error message has been set
		patternMismatch:false, // If the invalidity is against the pattern attribute
		rangeOverflow:false, // If the invalidity is against the max attribute
		rangeUnderflow:true, // If the invalidity is against the min attribute
		stepMismatch:true, // If the invalidity is against the step attribute
		tooLong:false ,// If the invalidity is against the maxlength attribute
		tooShort:false, // If the invalidity is against the minlength attribute
		typeMismatch:false ,// If the invalidity is against the type attribute
		valueMissing:false // If the input is required but empty
	}

	function CustomValidation() { }
		CustomValidation.prototype = {
			// Set default empty array of invalidity messages
			invalidities: [],

			// Function to check validity
			checkValidity: function(input) {

				var validity = input.validity;

				if ( validity.patternMismatch ) {
					this.addInvalidity('This is the wrong pattern for this field');
				}
				if ( validity.rangeOverflow ) {
					var max = getAttributeValue(input, 'max');
					this.addInvalidity('The maximum value should be ' + max);
				}
				if ( validity.rangeUnderflow ) {
					var min = getAttributeValue(input, 'min');
					this.addInvalidity('The minimum value should be ' + min);
				} 
				if ( validity.stepMismatch ) {
					var step = getAttributeValue(input, 'step');
					this.addInvalidity('This number needs to be a multiple of ' + step);
				}
				// Additional validity checks here...
			},

			// Add invalidity message to invalidities object
			addInvalidity: function(message) {
				this.invalidities.push(message);
			},

			// Retrieve the invalidity messages
			getInvalidities: function() {
				return this.invalidities.join('. \n');
			}
		};

		// On click of form submit buttons
		submit.addEventListener('click', function(e) {
			// Loop through all inputs
			for ( var i = 0; i < inputs.length; i++ ) {

				var input = inputs[i];

				// Use native JavaScript checkValidity() function to check if input is valid
				if ( input.checkValidity() == false ) {

					var inputCustomValidation = new CustomValidation(); // New instance of CustomValidation
					inputCustomValidation.checkValidity(input); // Check Invalidities
					var customValidityMessage = inputCustomValidation.getInvalidities(); // Get custom invalidity messages
					input.setCustomValidity( customValidityMessage ); // set as custom validity message

				} // end if
			} // end loop
		});

})(jQuery);


