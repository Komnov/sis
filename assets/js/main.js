particlesJS('header',
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.3,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }
);

$(function () {
  // Owl Carousel
  var owl1 = $(".owl-carousel.head-slide1");
  owl1.owlCarousel({
    items: 1,
    margin: 10,
    loop: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2700,
    smartSpeed: 1000
  });
  var owl2 = $(".owl-carousel.head-slide2");
  owl2.owlCarousel({
    items: 1,
    margin: 10,
    loop: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1000
  });
  var owl3 = $(".owl-carousel.head-slide3");
  owl3.owlCarousel({
    items: 1,
    margin: 10,
    loop: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000,
    smartSpeed: 1000
  });
  var owl4 = $(".owl-carousel.head-slide4");
  owl4.owlCarousel({
    items: 1,
    margin: 10,
    loop: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2300,
    smartSpeed: 1000
  });
  // карусель портфолио
  var owl4 = $(".owl-carousel.portfolio-slide");
  owl4.owlCarousel({
    items: 4,
    margin: 20,
    loop: true,
    nav: true,
    autoplay: false,
    autoplayTimeout: 2300,
    smartSpeed: 1000,
    navText: ["<img src='/assets/images/icons/arrow.svg'>","<img src='/assets/images/icons/arrow.svg'>"],
    navigation: true,
    responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:4
      }
    }
  });
});

$(function () {
  $("#services").tabs();
});


$('.service__about-cont > div').toggle();
$('.services__item_desc-more').on('click', function () {
  var attr = $(this).parent().parent().parent().attr('id');
  $('.service-develop-list').hide(300);
  var kk = $('.service__about-cont > div[iddata="' + attr + '"]').show().addClass('active');
});
$('.service__about-close').on('click', function () {
  $('.service__about-cont > div').hide(300).removeClass('active');
  $('.service-develop-list').show(400);
});

$('.service__container_nav li').on('click', function () {
  $('.service-develop-list').show(400);
  $('.service__about-cont > div').hide().removeClass('active');
});


$(function () {
  if ($(window).width() > 992) {
    $('.header__top').clone().appendTo('#header').addClass('fix');
    $('.header__container .send_order_container').clone().appendTo('.header__top.fix .header__top_social');
  }
})

var navinitpos = $('.header__top').offset().top;
$(function ($) {
  $(window).scroll(function () {
    if ($(this).scrollTop() > navinitpos + $('.header__top').height()) {
      $('.header__top.fix').addClass('any-fixed');
    }
    else {
      $('.header__top.fix').removeClass('any-fixed');
    }
  });
});

$( function() {
  $('body .header__container .send_order').clone().appendTo('.service__about_desc');
});

//мобильное меню
$(function () {
  $(document).on('click', '.burger', function () {
    $('.burger, .row.mob-nav, body').toggleClass('active');
    $('body').find('.burger-overlay').remove();
    //$('body').prepend('<div class="burger-overlay"></div>');
  });
  $(document).on('click', '.mob-nav a',  function () {
    $('.burger, .row.mob-nav, body').toggleClass('active');
  });
});

// timer
(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
    var fortnightAway = new Date(Date.now() + 12096e5);
  let birthday = fortnightAway,
    countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      let now = new Date().getTime(),
        distance = countDown - now;
      document.getElementById("days").innerText = Math.floor(distance / (day)),
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
      //do something later when date is reached
      if (distance < 0) {
        let headline = document.getElementById("headline"),
          countdown = document.getElementById("countdown"),
          content = document.getElementById("content");
          content.style.display = "block";
        clearInterval(x);
      }
      //seconds
    }, 0)
}());

//faq accordion
$( function() {
  $('#faq-accordion').accordion({
      collapsible: false, //чтобы аккордеоны автоматом были закрыты
      active: false,
      heightStyle: 'content'
  });
});


// Up button
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
      $('#toTop').fadeIn();
    } else {
      $('#toTop').fadeOut();
    }
  });
  $('#toTop').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 100);
  });
});


//кнопка вызова callback
$(function(){
  $('.callback-popup').on('click', function (e) {
    e.preventDefault(); //отменяем переход по
  })
  $(document).on('click', '.callback-popup', function() {
    $('#callback-popup').arcticmodal();
  });

  $(document).on('click', '.modal-form_button', function() {
    $('#modal-form').arcticmodal();
    $('#modal-form').removeClass('hidden');
  });
});

// анимации
var wow = new WOW(
  {
    boxClass:     'wow',      // класс, скрывающий элемент до момента отображения на экране (по умолчанию, wow)
    animateClass: 'animated', // класс для анимации элемента (по умолчанию, animated)
    offset:       0,          // расстояние в пикселях от нижнего края браузера до верхней границы элемента, необходимое для начала анимации (по умолчанию, 0)
    mobile:       true,       // включение/отключение WOW.js на мобильных устройствах (по умолчанию, включено)
    live:         true,       // поддержка асинхронно загруженных элементов (по умолчанию, включена)
    callback:     function(box) {
      // функция срабатывает каждый раз при старте анимации
      // аргумент box — элемент, для которого была запущена анимация
    },
    scrollContainer: null // селектор прокручивающегося контейнера (опционально, по умолчанию, window)
  }
);
wow.init();
$(function() {
  $('body').find('.wow').attr('data-wow-duration', '0.8s');
})


//lightbox
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true,
  'showImageNumberLabel': false
})


/*$(document).ready(function($){
   $('.extform-popup').exform({theme:'request'});
   $('.callback').exform({theme:'request', wrapper: "callback"});
});*/


// Отправка заявки footer
$(document).ready(function() {
  $('#form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.form.name.value == '' || document.form.phone.value == '' ) {
      valid = false;
      return valid;
    }
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
     // $('.js-overlay-thank-you').fadeIn();
      $(this).find('input').val('');
      //$('#form').trigger('reset');
      $('#form').prepend('<div class="form__submit">Форма успешно отправлена! Мы свяжемся с Вами в ближайшее время</div');
    });
    return false;
  });
});

// Отправка заявки fast
$(document).ready(function() {
  $('#formfast').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.formfast.name.value == '' || document.formfast.phone.value == '' ) {
      valid = false;
      return valid;
    }
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
     // $('.js-overlay-thank-you').fadeIn();
      $(this).find('input').val('');
     // $('#formfast').trigger('reset');
      $('#formfast').prepend('<div class="form__submit">Форма успешно отправлена! <br /> Мы свяжемся с Вами в ближайшее время</div');
    });
    return false;
  });
});

// Отправка заявки modalform
$(document).ready(function() {
  $('#formcallback').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.formcallback.name.value == '' || document.formcallback.phone.value == '' ) {
      valid = false;
      return valid;
    }
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
     // $('.js-overlay-thank-you').fadeIn();
      $(this).find('input').val('');
     // $('#formfast').trigger('reset');
      $('#formcallback').prepend('<div class="form__submit">Форма успешно отправлена! <br /> Мы свяжемся с Вами в ближайшее время</div');
    });
    return false;
  });
});

// Закрыть попап «спасибо»
$('.js-close-thank-you').click(function() { // по клику на крестик
  $('.js-overlay-thank-you').fadeOut();
});

$(document).mouseup(function (e) { // по клику вне попапа
    var popup = $('.popup');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.js-overlay-thank-you').fadeOut();
    }
});

$( function() { //для Мобильной версии
  if ($(window).width() < 992) {
    $('#body_message').on('click', function() {
      $(this).toggleClass('active');
    });
    $('.header__container .send_order_container').clone().appendTo('.mob-nav');
  }
});
