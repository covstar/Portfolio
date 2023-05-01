$(document).ready(function() {


             // for about section 
        let shadow = '.About_section > div > div, .About_section > div > p';

        // for resume section 
        let resumeBg = '.resume_button';
        // for project 
        let projectBg = '.project_container';
        let projectLink = '.project_section > div > div> ul > li';
      // current time switch 
      let currentTime = new Date().getHours();

  
      if (currentTime >= 6 && currentTime < 18) {
        // Execute code between 6:00 AM and 6:00 PM
        $('.toggle').addClass('fa-cloud-sun text-yellow-500');
        $('.toggle').removeClass('fa-moon text-gray-700');
        // body overlay 
        $('.body_overlay').removeClass('bg-army-green');
        $('.body_overlay').addClass('bg-white');
        // header_overlay 
        $('header').removeClass('border-b border-b-grey');
        $('.header_overlay').addClass('bg-dark-green bg-opacity-80');
        $('.header_overlay').removeClass('bg-darker-teal bg-opacity-90');

        // nav buttons 
        $('.nav_buttons > ul > li > button').addClass('bg-maroon');
        $('.nav_buttons > ul > li > button').removeClass('bg-darker-teal');
        $('.nav_buttons').removeClass('text-black');
        $('.nav_buttons').addClass('text-grey');

        // footer
        $('.footer').removeClass('border-t border-t-grey');


        // About section 
        // remove grey text color 
        let removeGreyText = '.About_section > div > ul > li, .About_section > div > p, .About_section > div > div, .About_section > div > div > ul';
        // add blackhey text color 
        let addBlackhey = '.About_section > div > p, .About_section > div > div, .About_section > div > div > ul';
        // add darker teal color 
        let addDarkerTeal = '.About_section > div > ul > li, .contact_header';

        $(shadow).addClass('shadow-red-200');
        $(shadow).removeClass('shadow-slate-700');
        $('my_image').removeClass('border-grey');
        $('my_image').addClass('border-darker-teal');
        $('.About_section > div').addClass('bg-white text-blackhey');
        $('.About_section > div').removeClass('bg-darker-teal');
        $(removeGreyText).removeClass('text-grey');
        $(addDarkerTeal).addClass('text-darker-teal');
        $(addBlackhey).addClass('text-blackhey');

        //  project section 
        $(projectBg).addClass('bg-white text-black');
        $(projectBg).removeClass('bg-choco text-grey');
        $(projectLink).addClass('bg-darker-teal');
        $(projectLink).removeClass('bg-maroon');

         // resume section 
        $(resumeBg).addClass('bg-darker-teal');
        $(resumeBg).removeClass('bg-maroon shadow-red-200');


        // contact section 
        $('.contact_header').removeClass('text-lighter-teal');


      } else {
        // Execute code between 6:00 PM and 6:00 AM
       $('.toggle').removeClass('fa-cloud-sun text-yellow-500');
        $('.toggle').addClass('fa-moon text-gray-700');
         // body overlay 
         $('.body_overlay').removeClass('bg-white');
         $('.body_overlay').addClass('bg-army-green');
         // header_overlay
         $('header').addClass('border-b border-b-grey');
         $('.header_overlay').addClass('bg-darker-teal bg-opacity-90');
         $('.header_overlay').removeClass('bg-dark-green bg-opacity-80'); 
         // nav buttons 
         $('.nav_buttons > ul > li > button').addClass('bg-dark-teal');
         $('.nav_buttons > ul > li > button').removeClass('bg-maroon');
         $('.nav_buttons').removeClass('text-grey');
         $('.nav_buttons').addClass('text-black');
         // footer
         $('.footer').addClass('border-t border-t-grey');
         

         // About section 
         // remove grey text color 
         let addGreyText = '.About_section > div > ul > li, .About_section > div > p, .About_section > div > div, .About_section > div > div > ul';
          // add blackhey text color 
         let removeBlackhey = '.About_section > div > p, .About_section > div > div, .About_section > div > div > ul';
         // add darker teal color 
         let removeDarkerTeal = '.About_section > div > ul > li, .contact_header';
         
         $(shadow).removeClass('shadow-red-200');
         $(shadow).addClass('shadow-red-200');
         $('.my_image').removeClass('border-darker-teal');
         $('.my_image').addClass('border-grey');
         $('.About_section > div').addClass('bg-darker-teal text-white');
         $('.About_section > div').removeClass('bg-white');
         $(removeDarkerTeal).removeClass('text-darker-teal');
         $(addGreyText).addClass('text-grey');
          $(removeBlackhey).removeClass('text-blackhey');
 
         //  project section 
         $(projectBg).removeClass('bg-white text-black');
         $(projectBg).addClass('bg-choco text-grey');
         $(projectLink).removeClass('bg-darker-teal');
         $(projectLink).addClass('bg-maroon');


         // contact section 
         $('.contact_header').addClass('text-lighter-teal');

         // resume section 
         $(resumeBg).removeClass('bg-darker-teal');
         $(resumeBg).addClass('bg-maroon shadow-red-200');
      } 

  });
  
