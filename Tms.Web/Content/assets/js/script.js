var App = function () {

	var currentPage = ''; // current page
	var collapsed = false; //sidebar collapsed
	var is_mobile = false; //is screen mobile?
	var is_mini_menu = false; //is mini-menu activated
	var is_fixed_header = false; //is fixed header activated
	var responsiveFunctions = []; //responsive function holder
	
	/*-----------------------------------------------------------------------------------*/
	/*	Runs callback functions set by App.addResponsiveFunction()
	/*-----------------------------------------------------------------------------------*/
    var runResponsiveFunctions = function () {
        // reinitialize other subscribed elements
        for (var i in responsiveFunctions) {
            var each = responsiveFunctions[i];
            each.call();
        }
    }
	/*-----------------------------------------------------------------------------------*/
	/*	To get the correct viewport width based on  http://andylangton.co.uk/articles/javascript/get-viewport-size-javascript/
	/*-----------------------------------------------------------------------------------*/
    var getViewPort = function () {
        var e = window, a = 'inner';
        if (!('innerWidth' in window)) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        return {
            width: e[a + 'Width'],
            height: e[a + 'Height']
        }
    }
	/*-----------------------------------------------------------------------------------*/
	/*	Check layout size
	/*-----------------------------------------------------------------------------------*/
	var checkLayout = function() {
		//Check if sidebar has mini-menu
		is_mini_menu = $('#sidebar').hasClass('mini-menu');
		//Check if fixed header is activated
		is_fixed_header = $('#header').hasClass('navbar-fixed-top');
	}
	/*-----------------------------------------------------------------------------------*/
	/*	Sidebar & Main Content size match
	/*-----------------------------------------------------------------------------------*/
	var handleSidebarAndContentHeight = function () {
        var content = $('#content');
        var sidebar = $('#sidebar');
        var body = $('body');
        var height;

        if (body.hasClass('sidebar-fixed')) {
            height = $(window).height() - $('#header').height() + 1;
        } else {
            height = sidebar.height() + 20;
        }
        if (height >= content.height()) {
            content.attr('style', 'min-height:' + height + 'px !important');
        }
    }
	/*-----------------------------------------------------------------------------------*/
	/*	Sidebar
	/*-----------------------------------------------------------------------------------*/
	var handleSidebar = function () {
	jQuery('.sidebar-menu .has-sub > a').click(function () {
            var last = jQuery('.has-sub.open', $('.sidebar-menu'));
            last.removeClass("open");
            jQuery('.arrow', last).removeClass("open");
            jQuery('.sub', last).slideUp(200);
            
			var thisElement = $(this);
			var slideOffeset = -200;
            var slideSpeed = 200;
			
            var sub = jQuery(this).next();
            if (sub.is(":visible")) {
                jQuery('.arrow', jQuery(this)).removeClass("open");
                jQuery(this).parent().removeClass("open");
				sub.slideUp(slideSpeed, function () {
					if ($('#sidebar').hasClass('sidebar-fixed') == false) {
						App.scrollTo(thisElement, slideOffeset);
					}
					handleSidebarAndContentHeight();
                });
            } else {
                jQuery('.arrow', jQuery(this)).addClass("open");
                jQuery(this).parent().addClass("open");
                sub.slideDown(slideSpeed, function () {
					if ($('#sidebar').hasClass('sidebar-fixed') == false) {
						App.scrollTo(thisElement, slideOffeset);
					}
					handleSidebarAndContentHeight();
                });
            }
        });
        		
	// Handle sub-sub menus
	jQuery('.sidebar-menu .has-sub .sub .has-sub-sub > a').click(function () {
            var last = jQuery('.has-sub-sub.open', $('.sidebar-menu'));
            last.removeClass("open");
            jQuery('.arrow', last).removeClass("open");
            jQuery('.sub', last).slideUp(200);
                
            var sub = jQuery(this).next();
            if (sub.is(":visible")) {
                jQuery('.arrow', jQuery(this)).removeClass("open");
                jQuery(this).parent().removeClass("open");
                sub.slideUp(200);
            } else {
                jQuery('.arrow', jQuery(this)).addClass("open");
                jQuery(this).parent().addClass("open");
                sub.slideDown(200);
            }
        });
	}
	
	/*-----------------------------------------------------------------------------------*/
	/*	Collapse Sidebar Programatically
	/*-----------------------------------------------------------------------------------*/
	var collapseSidebar = function () {
		var iconElem = document.getElementById("sidebar-collapse").querySelector('[class*="fa-"]');
		var iconLeft = iconElem.getAttribute("data-icon1");
		var iconRight = iconElem.getAttribute("data-icon2");
		/* For Navbar */
		jQuery('.navbar-brand').toggleClass("mini-menu");
		/* For sidebar */
		jQuery('#sidebar').toggleClass("mini-menu");
		jQuery('#main-content').toggleClass("margin-left-50");
		jQuery('.sidebar-collapse i').removeClass(iconLeft);
		jQuery('.sidebar-collapse i').addClass(iconRight);
		/* Remove placeholder from Search Bar */
		jQuery('.search').attr('placeholder', '');
		collapsed = true;
		/* Set a cookie so that mini-sidebar persists */
		$.cookie('mini_sidebar', '1');
	}
	/*-----------------------------------------------------------------------------------*/
	/*	Responsive Sidebar Collapse
	/*-----------------------------------------------------------------------------------*/
	var responsiveSidebar = function () {
		//Handle sidebar collapse on screen width
		var width = $(window).width();
		if ( width < 768 ) {
			is_mobile = true;
			//Hide the sidebar completely
			jQuery('#main-content').addClass("margin-left-0");
		}
		else {
			is_mobile = false;
			//Show the sidebar completely
			jQuery('#main-content').removeClass("margin-left-0");
			var menu = $('.sidebar');
			if (menu.parent('.slimScrollDiv').size() === 1) { // destroy existing instance before resizing
				menu.slimScroll({
					destroy: true
				});
				menu.removeAttr('style');
				$('#sidebar').removeAttr('style');
			}
		}
	}
	/*-----------------------------------------------------------------------------------*/
	/*	Sidebar Collapse
	/*-----------------------------------------------------------------------------------*/
	var handleSidebarCollapse = function () {
		var viewport = getViewPort();
        if ($.cookie('mini_sidebar') === '1') {
			/* For Navbar */
			jQuery('.navbar-brand').toggleClass("mini-menu");
			/* For sidebar */
			jQuery('#sidebar').toggleClass("mini-menu");
			jQuery('#main-content').toggleClass("margin-left-50");
			collapsed = true;
        }
		//Handle sidebar collapse on user interaction
		jQuery('.sidebar-collapse').click(function () {
			//Handle mobile sidebar toggle
			if(is_mobile && !(is_mini_menu)){
				//If sidebar is collapsed
				if(collapsed){
					jQuery('body').removeClass("slidebar");
					jQuery('.sidebar').removeClass("sidebar-fixed");
					//Add fixed top nav if exists
					if(is_fixed_header) {
						jQuery('#header').addClass("navbar-fixed-top");
						jQuery('#main-content').addClass("margin-top-100");
					}
					collapsed = false;
					$.cookie('mini_sidebar', '0');
				}
				else {
					jQuery('body').addClass("slidebar");
					jQuery('.sidebar').addClass("sidebar-fixed");
					//Remove fixed top nav if exists
					if(is_fixed_header) {
						jQuery('#header').removeClass("navbar-fixed-top");
						jQuery('#main-content').removeClass("margin-top-100");
					}
					collapsed = true;
					$.cookie('mini_sidebar', '1');
					handleMobileSidebar();
				}
			}
			else { //Handle regular sidebar toggle
				var iconElem = document.getElementById("sidebar-collapse").querySelector('[class*="fa-"]');
				var iconLeft = iconElem.getAttribute("data-icon1");
				var iconRight = iconElem.getAttribute("data-icon2");
				//If sidebar is collapsed
				if(collapsed){
					/* For Navbar */
					jQuery('.navbar-brand').toggleClass("mini-menu");
					/* For sidebar */
					jQuery('#sidebar').toggleClass("mini-menu");
					jQuery('#main-content').toggleClass("margin-left-50");
					jQuery('.sidebar-collapse i').removeClass(iconRight);
					jQuery('.sidebar-collapse i').addClass(iconLeft);
					/* Add placeholder from Search Bar */
					jQuery('.search').attr('placeholder', "Search");
					collapsed = false;
					$.cookie('mini_sidebar', '0');
				}
				else {
					/* For Navbar */
					jQuery('.navbar-brand').toggleClass("mini-menu");
					/* For sidebar */
					jQuery('#sidebar').toggleClass("mini-menu");
					jQuery('#main-content').toggleClass("margin-left-50");
					jQuery('.sidebar-collapse i').removeClass(iconLeft);
					jQuery('.sidebar-collapse i').addClass(iconRight);
					/* Remove placeholder from Search Bar */
					jQuery('.search').attr('placeholder', '');
					collapsed = true;
					$.cookie('mini_sidebar', '1');
				}
				$("#main-content").on('resize', function (e) {
					e.stopPropagation();
				});
			}
        });
	}
	/*-----------------------------------------------------------------------------------*/
	/*	Handle Fixed Sidebar on Mobile devices
	/*-----------------------------------------------------------------------------------*/
	var handleMobileSidebar = function () {
        var menu = $('.sidebar');
		if (menu.parent('.slimScrollDiv').size() === 1) { // destroy existing instance before updating the height
            menu.slimScroll({
                destroy: true
            });
            menu.removeAttr('style');
            $('#sidebar').removeAttr('style');
        }
        menu.slimScroll({
            size: '7px',
            color: '#a1b2bd',
            opacity: .3,
            height: "100%",
            allowPageScroll: false,
            disableFadeOut: false
        });
    }
	/*-----------------------------------------------------------------------------------*/
	/*	Handle Fixed Sidebar
	/*-----------------------------------------------------------------------------------*/
	var handleFixedSidebar = function () {
        var menu = $('.sidebar-menu');

        if (menu.parent('.slimScrollDiv').size() === 1) { // destroy existing instance before updating the height
            menu.slimScroll({
                destroy: true
            });
            menu.removeAttr('style');
            $('#sidebar').removeAttr('style');
        }

        if ($('.sidebar-fixed').size() === 0) {
            handleSidebarAndContentHeight();
            return;
        }

        var viewport = getViewPort();
        if (viewport.width >= 992) {
            var sidebarHeight = $(window).height() - $('#header').height() + 1;

            menu.slimScroll({
                size: '7px',
                color: '#a1b2bd',
                opacity: .3,
                height: sidebarHeight,
                allowPageScroll: false,
                disableFadeOut: false
            });
            handleSidebarAndContentHeight();
        }
    }
	/*-----------------------------------------------------------------------------------*/
	/*	Windows Resize function
	/*-----------------------------------------------------------------------------------*/
	jQuery(window).resize(function() {
		setTimeout(function () {
			checkLayout();
			handleSidebarAndContentHeight();
			responsiveSidebar();
			handleFixedSidebar();
			// handleNavbarFixedTop();
			runResponsiveFunctions(); 
		}, 50); // wait 50ms until window resize finishes.
	});

	/*-----------------------------------------------------------------------------------*/
	/*	Handle Box Sortable
	/*-----------------------------------------------------------------------------------*/
	var handleBoxSortable = function () {
		$('.box-container').sortable({
		    connectWith: '.box-container',
			items:'> .box',
			opacity:0.8,
			revert:true,
			forceHelperSize:true,
			placeholder: 'box-placeholder',
			forcePlaceholderSize:true,
			tolerance:'pointer'
		});
	}

	return {

        //Initialise theme pages
        init: function () {

			if (App.isPage("mini_sidebar")) {
				collapseSidebar();	//Function to display mini menu				
			}
			if (App.isPage("fixed_header_sidebar")) {
				handleFixedSidebar();	//Function to display fixed sidebar
			}
			checkLayout();	//Function to check if mini menu/fixed header is activated
			handleSidebar(); //Function to display the sidebar
			handleSidebarCollapse(); //Function to hide or show sidebar
			handleSidebarAndContentHeight();  //Function to hide sidebar and main content height
			responsiveSidebar();		//Function to handle sidebar responsively
        },
  

        //Set page
        setPage: function (name) {
            currentPage = name;
        },

        isPage: function (name) {
            return currentPage == name ? true : false;
        },

		// wrapper function to scroll(focus) to an element
        scrollTo: function (el, offeset) {
            pos = (el && el.size() > 0) ? el.offset().top : 0;
            jQuery('html,body').animate({
                scrollTop: pos + (offeset ? offeset : 0)
            }, 'slow');
        },

    };
}();
(window.jQuery);
