$(document).ready(function() {

    // text colors and background colours toggle function 
    $('.toggle').click(function() {
        $(this).toggleClass('fa-cloud-sun fa-moon');
        // for about section 
        let shadow = '.About_section > div > div, .About_section > div > p';

        // for resume section 
        let resumeBg = '.resume_section > div > a';
        // for project 
        let projectBg = '.project_section > div';
        let projectLink = '.project_section > div > div> ul > li';


        if ($(this).hasClass('fa-cloud-sun')) {
            $(this).addClass('text-lighter-teal');
            // body overlay 
            $('.body_overlay').removeClass('bg-darker-teal');
            $('.body_overlay').addClass('bg-lighter-teal');
            // header_overlay 
            $('header').removeClass('border-b border-b-grey');
            $('.header_overlay').addClass('bg-black bg-opacity-80');
            $('.header_overlay').removeClass('bg-darker-teal bg-opacity-90');

            // nav buttons 
            $('.nav_buttons > ul > li > button').addClass('bg-maroon');
            $('.nav_buttons > ul > li > button').removeClass('bg-darker-teal');
            $('.nav_buttons').removeClass('text-black');
            $('.nav_buttons').addClass('text-grey');

            // About section 
            // remove grey text color 
            let removeGreyText = '.About_section > div > ul > li, .About_section > div > p, .About_section > div > div, .About_section > div > div > ul';
            // add blackhey text color 
            let addBlackhey = '.About_section > div > p, .About_section > div > div, .About_section > div > div > ul';
            // add darker teal color 
            let addDarkerTeal = '.About_section > div > ul > li, .contact_header';

            $(shadow).addClass('shadow-red-200');
            $(shadow).removeClass('shadow-slate-700');
            $('.About_section > div > img').removeClass('border-lighter-teal');
            $('.About_section > div > img').addClass('border-darker-teal');
            $('.About_section > div').addClass('bg-white text-blackhey');
            $('.About_section > div').removeClass('bg-darker-teal');
            $(removeGreyText).removeClass('text-grey');
            $(addDarkerTeal).addClass('text-darker-teal');
            $(addBlackhey).addClass('text-blackhey');

            //  project section 
            $(projectBg).addClass('bg-white text-blackhey');
            $(projectBg).removeClass('bg-darker-teal text-grey');
            $(projectLink).addClass('bg-darker-teal');
            $(projectLink).removeClass('bg-maroon');

             // resume section 
            $(resumeBg).addClass('bg-darker-teal');
            $(resumeBg).removeClass('bg-maroon');


            // contact section 
            $('.contact_header').removeClass('text-lighter-teal');

        }
        else if ($(this).hasClass('fa-moon')) {
            $(this).removeClass('text-lighter-teal');
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
            // remove grey text color 
            let addGreyText = '.About_section > div > ul > li, .About_section > div > p, .About_section > div > div, .About_section > div > div > ul';
             // add blackhey text color 
            let removeBlackhey = '.About_section > div > p, .About_section > div > div, .About_section > div > div > ul';
            // add darker teal color 
            let removeDarkerTeal = '.About_section > div > ul > li, .contact_header';
            
            $(shadow).removeClass('shadow-red-200');
            $(shadow).addClass('shadow-slate-700');
            $('.About_section > div > img').removeClass('border-darker-teal');
            $('.About_section > div > img').addClass('border-lighter-teal');
            $('.About_section > div').addClass('bg-darker-teal text-white');
            $('.About_section > div').removeClass('bg-white');
            $(removeDarkerTeal).removeClass('text-darker-teal');
            $(addGreyText).addClass('text-grey');
             $(removeBlackhey).removeClass('text-blackhey');
    
            //  project section 
            $(projectBg).removeClass('bg-white text-blackhey');
            $(projectBg).addClass('bg-darker-teal text-grey');
            $(projectLink).removeClass('bg-darker-teal');
            $(projectLink).addClass('bg-maroon');


            // contact section 
            $('.contact_header').addClass('text-lighter-teal');

            // resume section 
            $(resumeBg).removeClass('bg-darker-teal');
            $(resumeBg).addClass('bg-maroon');
            
            
        }
      });
});