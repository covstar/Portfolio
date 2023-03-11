$(document).ready(function(){

    // text colors and background colours toggle function 
    $('.toggle').click(function() {
        $(this).toggleClass('fa-cloud-sun fa-moon');

        if ($(this).hasClass('fa-cloud-sun')) {
            $(this).addClass('text-yellow-400');
            // body overlay 
            $('.body_overlay').removeClass('bg-darker-teal');
            $('.body_overlay').addClass('bg-lighter-teal');
            // header_overlay 
            $('header').removeClass('border-b border-b-grey');
            $('.header_overlay').addClass('bg-black bg-opacity-70');
            $('.header_overlay').removeClass('bg-darker-teal bg-opacity-90');

            // nav buttons 
            $('.nav_buttons > ul > li > button').addClass('bg-maroon');
            $('.nav_buttons > ul > li > button').removeClass('bg-darker-teal');
            $('.nav_buttons').removeClass('text-black');
            $('.nav_buttons').addClass('text-grey');

            // About section 
            $('.About_section > div > img').removeClass('border-lighter-teal');
            $('.About_section > div > img').addClass('border-darker-teal');
            $('.About_section > div').addClass('bg-white text-blackhey');
            $('.About_section > div').removeClass('bg-darker-teal');
            $('.About_section > div > ul > li').removeClass('text-grey');
            $('.About_section > div > ul > li').addClass('text-darker-teal');
             $('.About_section > div > p').removeClass('text-grey');
            $('.About_section > div > p').addClass('text-blackhey');
            $('.About_section > div > div').removeClass('text-grey');
            $('.About_section > div > div').addClass('text-blackhey');
            $('.About_section > div > div > ul').removeClass('text-grey');
            $('.About_section > div > div > ul').addClass('text-blackhey');

        }
        else if ($(this).hasClass('fa-moon')) {
            $(this).removeClass('text-yellow-400');
            $(this).addClass('text-gray-700');
            // body overlay 
            $('.body_overlay').removeClass('bg-lighter-teal');
            $('.body_overlay').addClass('bg-darker-teal');
            // header_overlay
            $('header').addClass('border-b border-b-grey');
            $('.header_overlay').addClass('bg-darker-teal bg-opacity-90');
            $('.header_overlay').removeClass('bg-black'); 
            // nav buttons 
            $('.nav_buttons > ul > li > button').addClass('bg-dark-teal');
            $('.nav_buttons > ul > li > button').removeClass('bg-maroon');
            $('.nav_buttons').removeClass('text-grey');
            $('.nav_buttons').addClass('text-black');

            // About section 
            $('.About_section > div > img').removeClass('border-darker-teal');
            $('.About_section > div > img').addClass('border-lighter-teal');
            $('.About_section > div').addClass('bg-darker-teal text-white');
            $('.About_section > div').removeClass('bg-white');
            $('.About_section > div > ul > li').removeClass('text-darker-teal');
            $('.About_section > div > ul > li').addClass('text-grey');
             $('.About_section > div > p').removeClass('text-blackhey');
            $('.About_section > div > p').addClass('text-grey');
            $('.About_section > div > div').removeClass('text-blackhey');
            $('.About_section > div > div').addClass('text-grey');
            $('.About_section > div > div > ul').removeClass('text-blackhey');
            $('.About_section > div > div > ul').addClass('text-grey');

            // Project section 
            $('.project_section').removeClass('');
            
        }
      });


    // scroll to top function 
    $('.scrollTop').click(function(){
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    })

    window.onscroll = function(){
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
            $('.scrollTop').css("display", "block");
        } else{
            $('.scrollTop').css("display", "none")
        }
    }


    // function for about page 
    $('.About').click(function(){
        $('.Project, .Resume, .Contact').removeClass('active');
        $('.About_section').fadeIn(300);
        $('.about_for_heading').show();
        $('.project_section, .resume_section, .contact_section').fadeOut(300);
        $('.project_for_heading, .resume_for_heading, .contact_for_heading').hide();
        $(this).addClass('active');
    });

    // function for project page 
    $('.Project').click(function(){
        $('.project_section').fadeIn(300);
        $('.About_section, .resume_section, .contact_section').fadeOut(300);
        $('.about_for_heading, .resume_for_heading, .contact_for_heading').hide();
        $ ('.project_for_heading').show();
        $(this).addClass('active');
        $('.About, .Contact, .Resume').removeClass('active');
    });

    // funtion for resume page 
    $('.Resume').click(function(){
        $('.About, .Project, .Contact').removeClass('active');
        $(this).addClass('active');
        $('.resume_section').fadeIn(300)
        $('.About_section, .project_section, .contact_section').fadeOut(300);
        $('.about_for_heading, .project_for_heading, .contact_for_heading').hide();
        $ ('.resume_for_heading').show();
    });

    // function for contact page 
    $('.Contact').click(function(){
        $('.About, .Project, .Resume').removeClass('active');
        $(this).addClass('active');
        $('.contact_section').fadeIn(300);
        $('.About_section, .project_section, .resume_section').fadeOut(300);
        $('.about_for_heading, .resume_for_heading, .project_for_heading').hide();
        $ ('.contact_for_heading').show();
    });

});

