 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

// Custom Donation Statistics Animation
function animateDonationStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach((stat, index) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add animation class
                    stat.style.opacity = '0';
                    stat.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        stat.style.transition = 'all 0.8s ease';
                        stat.style.opacity = '1';
                        stat.style.transform = 'translateY(0)';
                    }, index * 100);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5
        });
        
        observer.observe(stat);
    });
}

// Initialize donation stats animation when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    animateDonationStats();
    initCounterAnimation();
});

// Counter Animation Function
function initCounterAnimation() {
    const counters = document.querySelectorAll('.counter');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16); // 60fps
                let current = 0;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current).toLocaleString();
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target.toLocaleString();
                    }
                };
                
                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, {
        threshold: 0.5
    });
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

(function($) {

	"use strict";

	$(window).stellar({
    responsive: false,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();

	var carousel = function() {
		$('.carousel-cause').owlCarousel({
			autoplay: true,
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding:0,
			nav: true,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1,
					stagePadding: 0
				},
				600:{
					items: 2,
					stagePadding: 50
				},
				1000:{
					items: 3,
					stagePadding: 100
				}
			}
		});

	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	
	var counter = function() {
		
		$('#section-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	// navigation
	var OnePageNav = function() {
		$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
		 	e.preventDefault();

		 	var hash = this.hash,
		 			navToggler = $('.navbar-toggler');
		 	$('html, body').animate({
		    scrollTop: $(hash).offset().top
		  }, 700, 'easeInOutExpo', function(){
		    window.location.hash = hash;
		  });


		  if ( navToggler.is(':visible') ) {
		  	navToggler.click();
		  }
		});
		$('body').on('activate.bs.scrollspy', function () {
		  console.log('nice');
		})
	};
	OnePageNav();

	// Enhanced Cause Cards Functionality
	var initializeCauseCards = function() {
		// Animate progress bars on page load
		$('.animated-progress').each(function() {
			var $this = $(this);
			var target = $this.data('target');
			setTimeout(function() {
				$this.css('width', target + '%');
			}, 500);
		});

		// Generate random donor counts (20-40)
		$('.donor-count').each(function() {
			var randomCount = Math.floor(Math.random() * 21) + 20; // 20-40
			$(this).text(randomCount);
		});
	};

	// Rotating Donation Popup
	var initializeDonationPopup = function() {
		var messages = [
			"Anita just donated ₹500.",
			"Ravi sponsored 10 meals.",
			"Meera helped 3 families get clean water.",
			"Sanjay funded education for a child.",
			"Priya contributed ₹1,000 for health care."
		];
		
		var currentIndex = 0;
		var popup = $('#donation-popup');
		var popupText = $('.popup-text');
		
		// Show popup after 3 seconds
		setTimeout(function() {
			popup.addClass('show');
		}, 3000);
		
		// Rotate messages every 5 seconds
		setInterval(function() {
			popup.removeClass('show');
			
			setTimeout(function() {
				currentIndex = (currentIndex + 1) % messages.length;
				popupText.text(messages[currentIndex]);
				popup.addClass('show');
			}, 500);
		}, 5000);
		
		// Close popup functionality
		$('.popup-close').click(function() {
			popup.removeClass('show');
			setTimeout(function() {
				popup.addClass('show');
			}, 10000); // Show again after 10 seconds
		});
	};

	// Premium Latest Donations Functionality
	function initializeLatestDonations() {
		// Enhanced donations data with more realistic Indian donors
		const donationsData = [
			{
				id: 1,
				donorName: "Priya Sharma",
				donorImage: "images/person_1.jpg",
				amount: 5000,
				cause: "Children Education Support",
				timeAgo: "2 minutes ago"
			},
			{
				id: 2,
				donorName: "Rajesh Kumar",
				donorImage: "images/person_2.jpg",
				amount: 3500,
				cause: "Clean Water Initiative",
				timeAgo: "5 minutes ago"
			},
			{
				id: 3,
				donorName: "Anita Patel",
				donorImage: "images/person_3.jpg",
				amount: 7500,
				cause: "Healthcare for All",
				timeAgo: "8 minutes ago"
			},
			{
				id: 4,
				donorName: "Vikram Singh",
				donorImage: "images/person_1.jpg",
				amount: 2500,
				cause: "Skill Development Program",
				timeAgo: "12 minutes ago"
			},
			{
				id: 5,
				donorName: "Meera Gupta",
				donorImage: "images/person_2.jpg",
				amount: 4200,
				cause: "Emergency Food Relief",
				timeAgo: "15 minutes ago"
			},
			{
				id: 6,
				donorName: "Arjun Reddy",
				donorImage: "images/person_3.jpg",
				amount: 6800,
				cause: "Women Empowerment",
				timeAgo: "18 minutes ago"
			},
			{
				id: 7,
				donorName: "Kavya Nair",
				donorImage: "images/person_1.jpg",
				amount: 3200,
				cause: "Disaster Relief Fund",
				timeAgo: "22 minutes ago"
			},
			{
				id: 8,
				donorName: "Rohit Agarwal",
				donorImage: "images/person_2.jpg",
				amount: 5500,
				cause: "Senior Care Support",
				timeAgo: "25 minutes ago"
			}
		];

		// Live stats data
		const statsData = {
			totalRaised: 245750,
			totalDonors: 127,
			activeCampaigns: 8
		};

		let currentBatch = 0;
		let donationInterval;
		const cardsPerBatch = 3;

		// DOM elements
		const donationCards = [
			document.getElementById('donation-card-1'),
			document.getElementById('donation-card-2'),
			document.getElementById('donation-card-3')
		];

		// Check if elements exist
		if (!donationCards[0]) {
			console.log('Latest Donations section not found on this page');
			return;
		}

		// Update live stats with animation
		function updateStats() {
			const totalRaisedEl = document.getElementById('total-raised');
			const totalDonorsEl = document.getElementById('total-donors');
			const activeCampaignsEl = document.getElementById('active-campaigns');

			if (totalRaisedEl) {
				totalRaisedEl.textContent = `₹${statsData.totalRaised.toLocaleString('en-IN')}`;
			}
			if (totalDonorsEl) {
				totalDonorsEl.textContent = statsData.totalDonors;
			}
			if (activeCampaignsEl) {
				activeCampaignsEl.textContent = statsData.activeCampaigns;
			}
		}

		// Update individual donation card
		function updateDonationCard(cardElement, donation) {
			if (!cardElement || !donation) return;

			const donorImg = cardElement.querySelector('.donor-img');
			const donorName = cardElement.querySelector('.donor-name');
			const donationAmount = cardElement.querySelector('.donation-amount');
			const donationCause = cardElement.querySelector('.donation-cause');
			const donationTime = cardElement.querySelector('.donation-time');

			if (donorImg) {
				donorImg.src = donation.donorImage;
				donorImg.alt = donation.donorName;
			}
			if (donorName) donorName.textContent = donation.donorName;
			if (donationAmount) donationAmount.textContent = `₹${donation.amount.toLocaleString('en-IN')}`;
			if (donationCause) donationCause.textContent = donation.cause;
			if (donationTime) donationTime.textContent = donation.timeAgo;
		}

		// Show current batch of donations
		function showDonationBatch() {
			const startIndex = currentBatch * cardsPerBatch;
			
			donationCards.forEach((card, index) => {
				const donationIndex = (startIndex + index) % donationsData.length;
				const donation = donationsData[donationIndex];
				
				// Add fade out effect
				card.style.opacity = '0.7';
				card.style.transform = 'translateY(10px)';
				
				setTimeout(() => {
					updateDonationCard(card, donation);
					// Fade back in
					card.style.opacity = '1';
					card.style.transform = 'translateY(0)';
				}, 300);
			});
		}

		// Auto-rotate donation batches
		function startRotation() {
			donationInterval = setInterval(() => {
				currentBatch = (currentBatch + 1) % Math.ceil(donationsData.length / cardsPerBatch);
				showDonationBatch();
				
				// Simulate live stats updates
				statsData.totalRaised += Math.floor(Math.random() * 1000) + 500;
				statsData.totalDonors += Math.floor(Math.random() * 3);
				updateStats();
			}, 6000); // 6 seconds for premium feel
		}

		// Stop rotation
		function stopRotation() {
			if (donationInterval) {
				clearInterval(donationInterval);
			}
		}

		// Initialize the premium donations display
		function init() {
			// Set initial stats
			updateStats();
			
			// Show first batch of donations
			showDonationBatch();
			
			// Add transition styles to cards
			donationCards.forEach(card => {
				if (card) {
					card.style.transition = 'all 0.4s ease';
				}
			});
			
			// Start auto-rotation after initial display
			setTimeout(startRotation, 3000);

			// Pause rotation on hover over the entire donations grid
			const donationsGrid = document.getElementById('donations-grid');
			if (donationsGrid) {
				donationsGrid.addEventListener('mouseenter', stopRotation);
				donationsGrid.addEventListener('mouseleave', startRotation);
			}
		}

		// Start the premium donations display
		init();
	}

	// Initialize cause cards functionality
	initializeCauseCards();
	initializeDonationPopup();
	
	// Initialize latest donations
	initializeLatestDonations();

	// Mobile Menu Functionality
	function initializeMobileMenu() {
		const mobileToggle = document.getElementById('mobile-menu-toggle');
		const mobileOverlay = document.getElementById('mobile-overlay');
		const mobileCloseBtn = document.getElementById('mobile-close-btn');
		const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');

		// Open mobile menu
		if (mobileToggle) {
			mobileToggle.addEventListener('click', function(e) {
				e.preventDefault();
				mobileOverlay.classList.add('active');
				document.body.style.overflow = 'hidden';
			});
		}

		// Close mobile menu
		if (mobileCloseBtn) {
			mobileCloseBtn.addEventListener('click', function(e) {
				e.preventDefault();
				mobileOverlay.classList.remove('active');
				document.body.style.overflow = '';
			});
		}

		// Close menu when clicking overlay background
		if (mobileOverlay) {
			mobileOverlay.addEventListener('click', function(e) {
				if (e.target === mobileOverlay) {
					mobileOverlay.classList.remove('active');
					document.body.style.overflow = '';
				}
			});
		}

		// Handle dropdown toggles in mobile menu
		mobileDropdownToggles.forEach(function(toggle) {
			toggle.addEventListener('click', function(e) {
				e.preventDefault();
				const dropdown = this.closest('.mobile-dropdown');
				const isActive = dropdown.classList.contains('active');
				
				// Close all other dropdowns
				document.querySelectorAll('.mobile-dropdown').forEach(function(item) {
					item.classList.remove('active');
				});
				
				// Toggle current dropdown
				if (!isActive) {
					dropdown.classList.add('active');
				}
			});
		});

		// Close mobile menu on window resize if desktop
		window.addEventListener('resize', function() {
			if (window.innerWidth >= 992) {
					mobileOverlay.classList.remove('active');
					document.body.style.overflow = '';
				}
		});
	}

	// Initialize mobile menu
	initializeMobileMenu();


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


  $('#appointment_date').datepicker({
	  'format': 'm/d/yyyy',
	  'autoclose': true
	});

	$('#appointment_time').timepicker();

})(jQuery);

// Testimonials Slider Functions
let currentTestimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial-item');
const dots = document.querySelectorAll('.dot');

function changeTestimonial(direction) {
  testimonials[currentTestimonialIndex].classList.remove('active');
  dots[currentTestimonialIndex].classList.remove('active');
  
  currentTestimonialIndex += direction;
  
  if (currentTestimonialIndex >= testimonials.length) {
    currentTestimonialIndex = 0;
  } else if (currentTestimonialIndex < 0) {
    currentTestimonialIndex = testimonials.length - 1;
  }
  
  testimonials[currentTestimonialIndex].classList.add('active');
  dots[currentTestimonialIndex].classList.add('active');
}

function currentTestimonial(index) {
  testimonials[currentTestimonialIndex].classList.remove('active');
  dots[currentTestimonialIndex].classList.remove('active');
  
  currentTestimonialIndex = index - 1;
  
  testimonials[currentTestimonialIndex].classList.add('active');
  dots[currentTestimonialIndex].classList.add('active');
}

// Auto-rotate testimonials every 5 seconds
setInterval(() => {
  changeTestimonial(1);
}, 5000);

// Testimonial Form Functions
function openTestimonialForm() {
  // Create modal for testimonial form
  const modal = document.createElement('div');
  modal.className = 'testimonial-modal';
  modal.innerHTML = `
    <div class="testimonial-modal-content">
      <div class="testimonial-modal-header">
        <h3>Share Your Story</h3>
        <button class="close-modal" onclick="closeTestimonialForm()">&times;</button>
      </div>
      <form class="testimonial-form" onsubmit="submitTestimonial(event)">
        <div class="form-group">
          <label for="testimonial-name">Your Name *</label>
          <input type="text" id="testimonial-name" required>
        </div>
        <div class="form-group">
          <label for="testimonial-location">Your Location</label>
          <input type="text" id="testimonial-location" placeholder="City, State">
        </div>
        <div class="form-group">
          <label for="testimonial-message">Your Testimonial *</label>
          <textarea id="testimonial-message" rows="4" required placeholder="Share your experience with Angry Youth NGO..."></textarea>
        </div>
        <div class="form-actions">
          <button type="button" class="btn-cancel" onclick="closeTestimonialForm()">Cancel</button>
          <button type="submit" class="btn-submit">Submit Testimonial</button>
        </div>
      </form>
    </div>
  `;
  
  // Add modal styles
  const style = document.createElement('style');
  style.textContent = `
    .testimonial-modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
      backdrop-filter: blur(5px);
    }
    
    .testimonial-modal-content {
      background: white;
      border-radius: 20px;
      padding: 2rem;
      max-width: 500px;
      width: 90%;
      max-height: 80vh;
      overflow-y: auto;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    }
    
    .testimonial-modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
      padding-bottom: 1rem;
      border-bottom: 2px solid #f0f0f0;
    }
    
    .testimonial-modal-header h3 {
      margin: 0;
      color: #333;
      font-size: 1.5rem;
    }
    
    .close-modal {
      background: none;
      border: none;
      font-size: 2rem;
      cursor: pointer;
      color: #999;
      padding: 0;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: all 0.3s ease;
    }
    
    .close-modal:hover {
      background: #f0f0f0;
      color: #333;
    }
    
    .testimonial-form .form-group {
      margin-bottom: 1.5rem;
    }
    
    .testimonial-form label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 600;
      color: #333;
    }
    
    .testimonial-form input,
    .testimonial-form textarea {
      width: 100%;
      padding: 0.8rem;
      border: 2px solid #e0e0e0;
      border-radius: 10px;
      font-size: 1rem;
      transition: all 0.3s ease;
    }
    
    .testimonial-form input:focus,
    .testimonial-form textarea:focus {
      outline: none;
      border-color: #4facfe;
      box-shadow: 0 0 0 3px rgba(79, 172, 254, 0.1);
    }
    
    .form-actions {
      display: flex;
      gap: 1rem;
      justify-content: flex-end;
      margin-top: 2rem;
    }
    
    .btn-cancel,
    .btn-submit {
      padding: 0.8rem 1.5rem;
      border-radius: 25px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      border: none;
    }
    
    .btn-cancel {
      background: #f0f0f0;
      color: #666;
    }
    
    .btn-cancel:hover {
      background: #e0e0e0;
      color: #333;
    }
    
    .btn-submit {
      background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
      color: white;
    }
    
    .btn-submit:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(79, 172, 254, 0.4);
    }
  `;
  
  document.head.appendChild(style);
  document.body.appendChild(modal);
  
  // Focus on first input
  setTimeout(() => {
    document.getElementById('testimonial-name').focus();
  }, 100);
}

function closeTestimonialForm() {
  const modal = document.querySelector('.testimonial-modal');
  if (modal) {
    modal.remove();
  }
}

function submitTestimonial(event) {
  event.preventDefault();
  
  const name = document.getElementById('testimonial-name').value;
  const location = document.getElementById('testimonial-location').value;
  const message = document.getElementById('testimonial-message').value;
  
  // Here you would typically send the data to your backend
  // For now, we'll just show a success message and close the form
  
  // Create success message
  const successMessage = document.createElement('div');
  successMessage.className = 'success-message';
  successMessage.innerHTML = `
    <div class="success-content">
      <div class="success-icon">✓</div>
      <h4>Thank You!</h4>
      <p>Your testimonial has been submitted successfully. We'll review it and add it to our testimonials section.</p>
      <button class="btn-ok" onclick="closeTestimonialForm()">OK</button>
    </div>
  `;
  
  // Add success message styles
  const style = document.createElement('style');
  style.textContent = `
    .success-message {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10001;
      backdrop-filter: blur(5px);
    }
    
    .success-content {
      background: white;
      border-radius: 20px;
      padding: 2rem;
      text-align: center;
      max-width: 400px;
      width: 90%;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    }
    
    .success-icon {
      width: 60px;
      width: 60px;
      background: linear-gradient(135deg, #28a745, #20c997);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      color: white;
      margin: 0 auto 1rem;
    }
    
    .success-content h4 {
      color: #333;
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }
    
    .success-content p {
      color: #666;
      margin-bottom: 1.5rem;
      line-height: 1.5;
    }
    
    .btn-ok {
      background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
      color: white;
      border: none;
      padding: 0.8rem 2rem;
      border-radius: 25px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .btn-ok:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(79, 172, 254, 0.4);
    }
  `;
  
  document.head.appendChild(style);
  document.body.appendChild(successMessage);
  
  // In a real application, you would send this data to your backend:
  console.log('Testimonial submitted:', { name, location, message });
  
  // You could also add the testimonial to the testimonials list dynamically
  // addTestimonialToList(name, location, message);
}

// Function to add new testimonial to the list (for future use)
function addTestimonialToList(name, location, message) {
  const testimonialsSlider = document.querySelector('.testimonials-slider');
  const newTestimonial = document.createElement('div');
  newTestimonial.className = 'testimonial-item';
  newTestimonial.innerHTML = `
    <div class="testimonial-content">
      <p>"${message}"</p>
      <div class="testimonial-author">
        <div class="author-avatar">${name.charAt(0).toUpperCase()}</div>
        <div class="author-info">
          <div class="author-name">${name}</div>
          <div class="author-location">${name.charAt(0).toUpperCase()}</div>
        </div>
      </div>
    </div>
  `;
  
  testimonialsSlider.appendChild(newTestimonial);
  
  // Update dots
  const dotsContainer = document.querySelector('.testimonial-dots');
  const newDot = document.createElement('span');
  newDot.className = 'dot';
  newDot.onclick = () => currentTestimonial(testimonials.length);
  dotsContainer.appendChild(newDot);
  
  // Update total count
  testimonials.length++;
}

