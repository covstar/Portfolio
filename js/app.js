$(document).ready(function(){


    // function for about page 
    $('.About').click(function(){
        $('.Project, .Resume, .Contact').removeClass('active');
        $('.About_section').fadeIn(300);
        $('.project_section').fadeOut(300);
        $(this).addClass('active');
    });

    // function for project page 
    $('.Project').click(function(){
        $('.project_section').fadeIn(300);
        $('.About_section').fadeOut(300);
        $(this).addClass('active');
        $('.About, .Contact, .Resume').removeClass('active');
    });

    // funtion for resume page 
    $('.Resume').click(function(){
        $('.About, .Project, .Contact').removeClass('active');
        $(this).addClass('active');
        $('.About_section, .project_section').fadeOut(300);
    });

    // function for contact page 
    $('.Contact').click(function(){
        $('.About, .Project, .Resume').removeClass('active');
        $(this).addClass('active');
        $('.About_section, .project_section').fadeOut(300);
    });

});