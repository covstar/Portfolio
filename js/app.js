$(document).ready(function(){

    


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

    AOS.init();
});

