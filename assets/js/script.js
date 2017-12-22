(function() {

  var width = 0;
  var display = false;
  function windowsSize() {return $(window).width();}
  $(document).ready(function(){
    width = windowsSize();
    changeBackgroundColor();
  });
  $(window).resize(function() {
    //When page resize show the menue if is not responsive design
    width = windowsSize();
    if(width > 420) {
      $('#nav-mozilla-menu').css('display', 'inherit');
    } else {
      $('#nav-mozilla-menu').css('display', 'none');
    }
  });


  //Reduce the header when the page is scrolled
  $(document).scroll(function() {

    $('.sidebar').hide();
    $('.toggle').removeClass('close-mozillamx');
    $('.toggle').addClass('toggle-mozillamx');
    display = false;

    if(width > 420) {
      $('.nav-mozilla').addClass('mozilla-container-after');
      $('.mozilla_container .logo a').addClass('logo-after');
      $('header').css({'height': '1.0em', 'padding': '0.5em'});
      var height = $(this).scrollTop();
      if(height == 0) {
        $('.nav-mozilla').removeClass('mozilla-container-after');
        $('.mozilla_container .logo a').removeClass('logo-after');
        $('header').css({'height': '2.5em', 'padding': '0.5em 0em'});
      }
    }

  });

  //Toggle menu when is responsive desing
  $('.toggle-mozilla').click(function() {

    if(width <= 420) {
      $('.nav-mozilla-menu').toggle('fast', 'swing', function() {
      });
    }

  });

  //Only hide the menu when is reponsive design
  $('.nav-mozilla-menu li a').click(function(e) {
    if(width <= 420) {
      $(this).closest('ul').css('display', 'none');
    } else {
      $(this).closest('ul').css('display', 'inherit');
    }
  });


  $('.toggle').click(function(e) {

    if(display === false) {
      $('.sidebar').toggle('fast', function() {
          $('.toggle').addClass('close-mozillamx');
          $('.toggle').removeClass('toggle-mozillamx');
          display = true;
          console.log(display);
      });
    } else if(display === true) {
      $('.sidebar').toggle('fast', function() {
        $('.toggle').removeClass('close-mozillamx');
        $('.toggle').addClass('toggle-mozillamx');
        display = false;
      });

    }

  });


  $('.nav-mozilla-mexico-menu li a').click(function(e) {
    $('.sidebar').hide();
    $('.toggle').removeClass('close-mozillamx');
    $('.toggle').addClass('toggle-mozillamx');
    display = false;
  });

  function changeBackgroundColor() {
    console.log('Cambiar color..')
    var posts = $('.posts');
    var colors = ['#00ffff', '#000000', '#ff4f5e', '#54ffbd', '#6e008b', '#005e5e', '#00458b','#959595'];

    $('.posts').each(function(index) {
      var color = colors[Math.floor(Math.random()*colors.length)];
      $(this).css({'background-color': color});
    })
  }

})();
