(function($){
  $(document).ready(function(){
    /* Tooltip RRSS */
    $('[data-toggle="tooltip"]').tooltip();
   
    /* Separación del Header */
    var $header = $("header#header");
    var altoHeader = $header.height();

    console.log("El alto del header es de "+altoHeader);


    var trigger = $('.hamburger'), overlay = $('.overlay'), isClosed = false;
    trigger.click(function (){ hamburger_cross(); });

    function hamburger_cross() {
        if (isClosed == true) {          
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        } else {   
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
    }
            
    $('[data-toggle="offcanvas"]').click(function () {
          $('#wrapper').toggleClass('toggled');
    });  
  });
})(jQuery);