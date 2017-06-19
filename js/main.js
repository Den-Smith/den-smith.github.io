

// preloader
$(window).on('load', function(){
	$('.preloader').fadeOut('slow',function(){
		$(this).remove();
	});
	// start animation
	setTimeout(function() {
		$('.card').addClass('in');
	}, 300);
});
// main js
$(document).ready(function(){
	// set links to a new tab
	$('a').attr('target', '_blank');

	// load imgs
	setTimeout(function() {
		$('img[data-src]').each(function() {
			$(this).attr('data-src', 'src');
		});
	}, 3000);
	



	// copy phone to buffer
	var copyPhoneBtn = $('.phone span');
	copyPhoneBtn.click(function(event) {
		var phoneNumber = document.querySelector('.phone span');
	  var range = document.createRange();
	  range.selectNode(phoneNumber);
	  window.getSelection().addRange(range);

	  try {
	    var successful = document.execCommand('copy');
	    $('.buffer-message').addClass('active');
	    var msg = successful ? 'successful' : 'unsuccessful';
	    console.log('Copy phone was ' + msg);
	    setTimeout(function() {
	      $('.buffer-message').removeClass('active');
	    }, 1600);
	  } catch (err) {
	    console.log('unable to copy');
	  }
	  window.getSelection().removeAllRanges();
	});

	// LNG switch
	$('.lng-switch').click(function(event) {
		$('.card').toggleClass(function(){
	    return $('.card').is('.flip-front, .flip-back') ? 'flip-front flip-back' : 'flip-back';
	  });
		if ($('.card').hasClass('flip-front')) {
			$('nav ul.eng-lng').removeClass('active');
			$('nav ul.ru-lng').addClass('active');
			// portfolio switch
			$('figcaption li:first-child a').html('PSD макет');
			$('figcaption li:last-child a').html('Перейти на сайт');
			// phone copy switch
			$('.buffer-message').html('Номер скопирован в буфер обмена');
		} else if ($('.card').hasClass('flip-back')) {
			$('nav ul.ru-lng').removeClass('active');
			$('nav ul.eng-lng').addClass('active');
			// portfolio switch
			$('figcaption li:first-child a').html('PSD template');
			$('figcaption li:last-child a').html('Go to website');
			// phone copy switch
			$('.buffer-message').html('Number copied to clipboard');
		}
	});


	// nav switch
	$('.to-about').click(function(event) {
		$('.to-about').addClass('active');
		$('.to-portfolio').removeClass('active');
		$('.portfolio-block-wrap').removeClass('active');
		$('.card-block-wrap').addClass('active');
	});
	$('.to-portfolio').click(function(event) {
		$('.to-portfolio').addClass('active');
		$('.to-about').removeClass('active');
		$('.card-block-wrap').removeClass('active');
		$('.portfolio-block-wrap').addClass('active');
	});

	// popup init
	$("#modal-init-01").animatedModal({
    modalTarget: 'modal-01',
    animatedIn: 'bounceInUp',
    animatedOut: 'bounceOutDown'
  });

  $("#modal-init-02").animatedModal({
    modalTarget: 'modal-02',
		animatedIn: 'bounceInUp',
    animatedOut: 'bounceOutDown'
  });

	$("#modal-init-03").animatedModal({
    modalTarget: 'modal-03',
		animatedIn: 'bounceInUp',
    animatedOut: 'bounceOutDown'
  });

	$("#modal-init-04").animatedModal({
    modalTarget: 'modal-04',
		animatedIn: 'bounceInUp',
    animatedOut: 'bounceOutDown'
  });

	$("#modal-init-05").animatedModal({
    modalTarget: 'modal-05',
		animatedIn: 'bounceInUp',
    animatedOut: 'bounceOutDown'
  });

	$("#modal-init-06").animatedModal({
    modalTarget: 'modal-06',
		animatedIn: 'bounceInUp',
    animatedOut: 'bounceOutDown'
  });

	// container to fluid
	function widthControl() {
		var w = window.innerWidth
		if ( w < 1200) {
			$('#main-container').removeClass().addClass('container-fluid');
		} else {
			$('#main-container').removeClass().addClass('container');
		}
	};
	$(document).ready(widthControl);
	$(window).resize(widthControl);

	

	// canvas bg animate
	(function() {

	    var width, height, largeHeader, canvas, ctx, points, target, animateHeader = true;

	    // Main
	    initHeader();
	    initAnimation();
	    addListeners();

	    function initHeader() {
	        width = window.innerWidth;
	        height = window.innerHeight;
	        target = {x: width/2, y: height/2};

	        largeHeader = document.getElementById('body-inner');
	        largeHeader.style.height = height+'px';

	        canvas = document.getElementById('canvas-bg');
	        canvas.width = width;
	        canvas.height = height;
	        ctx = canvas.getContext('2d');

	        // create points
	        points = [];
	        for(var x = 0; x < width; x = x + width/20) {
	            for(var y = 0; y < height; y = y + height/20) {
	                var px = x + Math.random()*width/20;
	                var py = y + Math.random()*height/20;
	                var p = {x: px, originX: px, y: py, originY: py };
	                points.push(p);
	            }
	        }

	        // for each point find the 5 closest points
	        for(var i = 0; i < points.length; i++) {
	            var closest = [];
	            var p1 = points[i];
	            for(var j = 0; j < points.length; j++) {
	                var p2 = points[j]
	                if(!(p1 == p2)) {
	                    var placed = false;
	                    for(var k = 0; k < 5; k++) {
	                        if(!placed) {
	                            if(closest[k] == undefined) {
	                                closest[k] = p2;
	                                placed = true;
	                            }
	                        }
	                    }

	                    for(var k = 0; k < 5; k++) {
	                        if(!placed) {
	                            if(getDistance(p1, p2) < getDistance(p1, closest[k])) {
	                                closest[k] = p2;
	                                placed = true;
	                            }
	                        }
	                    }
	                }
	            }
	            p1.closest = closest;
	        }

	        // assign a circle to each point
	        for(var i in points) {
	            var c = new Circle(points[i], 2+Math.random()*2, 'rgba(255,255,255,0.3)');
	            points[i].circle = c;
	        }
	    }

	    // Event handling
	    function addListeners() {
	        if(!('ontouchstart' in window)) {
	            window.addEventListener('mousemove', mouseMove);
	        }
	        window.addEventListener('scroll', scrollCheck);
	        window.addEventListener('resize', resize);
	    }

	    function mouseMove(e) {
	        var posx = posy = 0;
	        if (e.pageX || e.pageY) {
	            posx = e.pageX;
	            posy = e.pageY;
	        }
	        else if (e.clientX || e.clientY)    {
	            posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
	            posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
	        }
	        target.x = posx;
	        target.y = posy;
	    }

	    function scrollCheck() {
	        if(document.body.scrollTop > height) animateHeader = false;
	        else animateHeader = true;
	    }

	    function resize() {
	        width = window.innerWidth;
	        height = window.innerHeight;
	        largeHeader.style.height = height+'px';
	        canvas.width = width;
	        canvas.height = height;
	    }

	    // animation
	    function initAnimation() {
	        animate();
	        for(var i in points) {
	            shiftPoint(points[i]);
	        }
	    }

	    function animate() {
	        if(animateHeader) {
	            ctx.clearRect(0,0,width,height);
	            for(var i in points) {
	                // detect points in range
	                if(Math.abs(getDistance(target, points[i])) < 4000) {
	                    points[i].active = 0.3;
	                    points[i].circle.active = 0.6;
	                } else if(Math.abs(getDistance(target, points[i])) < 20000) {
	                    points[i].active = 0.1;
	                    points[i].circle.active = 0.3;
	                } else if(Math.abs(getDistance(target, points[i])) < 40000) {
	                    points[i].active = 0.02;
	                    points[i].circle.active = 0.1;
	                } else {
	                    points[i].active = 0;
	                    points[i].circle.active = 0;
	                }

	                drawLines(points[i]);
	                points[i].circle.draw();
	            }
	        }
	        requestAnimationFrame(animate);
	    }

	    function shiftPoint(p) {
	        TweenLite.to(p, 1+1*Math.random(), {x:p.originX-50+Math.random()*100,
	            y: p.originY-50+Math.random()*100, ease:Circ.easeInOut,
	            onComplete: function() {
	                shiftPoint(p);
	            }});
	    }

	    // Canvas manipulation
	    function drawLines(p) {
	        if(!p.active) return;
	        for(var i in p.closest) {
	            ctx.beginPath();
	            ctx.moveTo(p.x, p.y);
	            ctx.lineTo(p.closest[i].x, p.closest[i].y);
	            ctx.strokeStyle = 'rgba(65,81,107,'+ p.active+')';
	            ctx.stroke();
	        }
	    }

	    function Circle(pos,rad,color) {
	        var _this = this;

	        // constructor
	        (function() {
	            _this.pos = pos || null;
	            _this.radius = rad || null;
	            _this.color = color || null;
	        })();

	        this.draw = function() {
	            if(!_this.active) return;
	            ctx.beginPath();
	            ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
	            ctx.fillStyle = 'rgba(65,81,107,'+ _this.active+')';
	            ctx.fill();
	        };
	    }

	    // Util
	    function getDistance(p1, p2) {
	        return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
	    }

	})();
});
