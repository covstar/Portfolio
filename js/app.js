$(document).ready(function(){

let about_img = 'https://covstar.sirv.com/Portfolio_imgs/D_About.jpg';
let project_img = 'https://covstar.sirv.com/Portfolio_imgs/D_project.jpg';
let contact_img = 'https://covstar.sirv.com/Portfolio_imgs/D_contact.jpg';


    // function for about page 
    $('.About').click(function(){
        $('header').css({
            'background': "url("+about_img+")",
            'background-size': 'cover',
            'background-repeat': 'no-repeat'
        });
        $('.Project, .Resume, .Contact').removeClass('active');
        $('.About_section').fadeIn(300);
        $(this).addClass('active');
    });

    // function for project page 
    $('.Project').click(function(){
        $('header').css({
            'background': "url("+project_img+")",
            'background-size': 'cover',
            'background-repeat': 'no-repeat'
        });
        $('.About_section').fadeOut(300);
        $(this).addClass('active');
        $('.About, .Contact, .Resume').removeClass('active');
    });

    // funtion for resume page 
    $('.Resume').click(function(){
        $('.About, .Project, .Contact').removeClass('active');
        $(this).addClass('active');
        $('.About_section').fadeOut(300);
    });

    // function for contact page 
    $('.Contact').click(function(){
        $('header').css({
            'background': "url("+contact_img+")",
            'background-size': 'cover',
            'background-repeat': 'no-repeat'
        });
        $('.About, .Project, .Resume').removeClass('active');
        $(this).addClass('active');
        $('.About_section').fadeOut(300);
    });

});