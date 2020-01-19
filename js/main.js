$(document).ready(function() {

	/* Call plugins hrere ...*/


	// owlCarousel - карусель
	$('#owl-carousel').owlCarousel({

		// Most important owl features
		items : 1,
		itemsCustom : false,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [980,3],
		itemsTablet: [768,2],
		itemsTabletSmall: false,
		itemsMobile : [479,1],
		
		singleItem : true,

		itemsScaleUp : false,

		// BasicSpeeds
		navSpeed : 1500,
				
		
		//Autoplay
		autoPlay : false,
		stopOnHover : false,
		
		// Navigation
		nav : true,
		navText : ["<img src=\"usercontent/img/vector-left.png\">","<img src=\"usercontent/img/vector-right.png\">"],
		rewindNav : true,
		scrollPerPage : false,
		
		
		// CSS Styles
		baseClass : "owl-carousel",
		theme : "owl-theme",
		
		
		//Transitions
		// slideTransition : "fade",
		// transitionStyle : "fade"

	});

		$('#owl-carousel-mobile').owlCarousel({

		// Most important owl features
		items : 1,
		itemsCustom : false,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [980,3],
		itemsTablet: [768,2],
		itemsTabletSmall: false,
		itemsMobile : [479,1],
		
		singleItem : true,

		itemsScaleUp : false,

		// BasicSpeeds
		navSpeed : 1500,
				
		
		//Autoplay
		autoPlay : false,
		stopOnHover : false,
		
		// Navigation
		nav : true,
		navText : ["<img src=\"usercontent/img/vector-left-white.png\">","<img src=\"usercontent/img/vector-right-white.png\">"],
		rewindNav : true,
		scrollPerPage : false,
		
		
		// CSS Styles
		baseClass : "owl-carousel",
		theme : "owl-theme",
		
		
		//Transitions
		// slideTransition : "fade",
		// transitionStyle : "fade"

	});


	// owlCarousel - карусель
	$('#owl-carousel-group').owlCarousel({

		// Most important owl features
		items : 1,
		itemsCustom : false,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [980,3],
		itemsTablet: [768,2],
		itemsTabletSmall: false,
		itemsMobile : [479,1],
		
		singleItem : true,

		itemsScaleUp : false,

		// BasicSpeeds
		navSpeed : 1500,
				
		
		//Autoplay
		autoPlay : false,
		stopOnHover : false,
		
		// Navigation
		nav : true,
		navText : ["<img src=\"usercontent/img/vector-left-white.png\">","<img src=\"usercontent/img/vector-right-white.png\">"],
		rewindNav : true,
		scrollPerPage : false,
		
		
		// CSS Styles
		baseClass : "owl-carousel",
		theme : "owl-theme",
		
		
		//Transitions
		// slideTransition : "fade",
		// transitionStyle : "fade"

	});

	// owlCarousel - карусель
	$('#owl-carousel-private').owlCarousel({

		// Most important owl features
		items : 1,
		itemsCustom : false,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [980,3],
		itemsTablet: [768,2],
		itemsTabletSmall: false,
		itemsMobile : [479,1],
		
		singleItem : true,

		itemsScaleUp : false,

		// BasicSpeeds
		navSpeed : 1500,
				
		
		//Autoplay
		autoPlay : false,
		stopOnHover : false,
		
		// Navigation
		nav : true,
		navText : ["<img src=\"usercontent/img/vector-left-white.png\">","<img src=\"usercontent/img/vector-right-white.png\">"],
		rewindNav : true,
		scrollPerPage : false,
		
		
		// CSS Styles
		baseClass : "owl-carousel",
		theme : "owl-theme",
		
		
		//Transitions
		// slideTransition : "fade",
		// transitionStyle : "fade"

	});

		// FancyBox - galery
	$(".fancybox").fancybox({
			// Default - with fix from scroll to top
            helpers: {
                overlay: {
                    locked: false
                }
            }
    });
	// End of FancyBox - galery

	
	//slide2id - плавная прокрутка по ссылкам внутри страницы
	$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    highlightSelector:"nav a"
	});

	// jQuery Validate JS
	$("#reserve-form").validate({
		rules: {
			name: { required: true },
			email: { required: true, email: true },
			// skype:  { required: true },
			phone:  { required: true },
			personal: { required: true }
		},

		messages: {
			name: "Please enter your name",
			email: {
				required: "Please enter your email",
				email: "Email address must be in the format name@domain.com . You may have entered an email with an error."
			},
			phone: "Format +79213512661",
			personal: "You must consent"
		},

		submitHandler: function(form) {
		  ajaxFormSubmit();
		}


	})

	// Функция AJAX запроса на сервер
	function ajaxFormSubmit(){
		var string = $("#reserve-form").serialize(); // Соханяем данные введенные в форму в строку. 

		// Формируем ajax запрос
		$.ajax({
			type: "POST", // Тип запроса - POST
			url: "php/mail.php", // Куда отправляем запрос
			data: string, // Какие даные отправляем, в данном случае отправляем переменную string
			
			// Функция если все прошло успешно
			success: function(html){
				$("#reserve-form").slideUp(800);
				$('#answer').html(html);
			}
		});

		// Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
		return false; 
	}


	// Отмена горизонтальной прокрутки
	// $(document).scroll(function(){
	// 		$('#menu-m').css({
	// 			left: $(document).scrollLeft()
	// 		});
	// });
	
});

// Menu - при нажатии выдвигает адаптивное меню

$('#toggle').click( function(){
	console.log('Click!');
	$('.nav-holder__adaptive').toggleClass('nav-holder__adaptive--active');
	$('.navigation__menu').toggleClass('navigation__menu--index');

})

$('#useful-toggle').click( function(){
	console.log('Click!');
	$('.useful__inner').toggleClass('useful__inner-none');
	// $('.navigation__menu').toggleClass('navigation__menu--index');

})

