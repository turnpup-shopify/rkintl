document.addEventListener('DOMContentLoaded', function(event) {
  
  // find all elements with this attribute and put in an array
  const headers = document.querySelectorAll('[js-accordion-header]');

  // take each element from array and assign below function with click event
  for (let i = 0; i < headers.length; i++) {
    headers[i].addEventListener("click", (event) => { toggleAccordion(event); });
  }

  function toggleAccordion(evt) {
    var $el = $(evt.currentTarget) // get dom element from click event
    if($el.attr('aria-expanded') == 'true'){ // IF EXPANDED
      //this stops the slide up triggering the parent;
      $el.siblings().slideUp(400, function() { //jquery method
        $(this).attr('aria-hidden', true);
      })
      // This is closing the children accordions when the parent accordion is closed.
      $el.siblings('[js-accordion-content]').find('[js-accordion-header]').each(function(){
            $(this).attr('aria-expanded', false);
            $(this).siblings('[js-accordion-content]').slideUp(400, function() {
                $(this).attr('aria-hidden', true);
            });
      })
      $el.attr('aria-expanded', false);
    } else {
      $el.parent().siblings().find('[js-accordion-content]').slideUp(400, function(){
        $(this).attr('aria-hidden', true);
      });
      $el.parent().siblings().find('[js-accordion-header]').attr('aria-expanded', false);
      $el.siblings('[js-accordion-content]').slideDown().attr('aria-hidden', false);
      $el.attr('aria-expanded', true);
    }
  }

  // faq section 
  $('.turnpup_question').click(function(){
    if($(this).next().hasClass('expanded')){
      $(this).next().toggleClass('visible');
      $(this).toggleClass('expanded');         
    } else {
      $(this).next().toggleClass('visible');
    $(this).toggleClass('expanded');         
    }
  });

  // same concept for bottom of PDP
  $('.pdp_bottom_header').click(function(){
    if ($(window).width() <= 600) {
      if($(this).next().hasClass('minus')){
        $(this).next().toggleClass('invisible');
        $(this).toggleClass('minus');
      } else {
        $(this).next().toggleClass('invisible');
        $(this).toggleClass('minus');
      }
    }
  });
  

})

