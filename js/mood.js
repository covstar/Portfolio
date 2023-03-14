$(document).ready(function() {

    // text colors and background colours toggle function
$ ('.toggle').click (function () {
  $ (this).toggleClass ('fa-cloud-sun fa-moon');

  if ($ (this).hasClass ('fa-cloud-sun')) {
    $ (this).addClass ('text-yellow-400');
    // body overlay
    $ ('.body_overlay').removeClass ('bg-darker-teal');
    $ ('.body_overlay').addClass ('bg-lighter-teal');
    // header_overlay
    $ ('header').removeClass ('border-b border-b-grey');
    $ ('.header_overlay').addClass ('bg-black bg-opacity-70');
    $ ('.header_overlay').removeClass ('bg-darker-teal bg-opacity-90');

    // nav buttons
    $ ('.nav_buttons > ul > li > button').addClass ('bg-maroon');
    $ ('.nav_buttons > ul > li > button').removeClass ('bg-darker-teal');
    $ ('.nav_buttons').removeClass ('text-black');
    $ ('.nav_buttons').addClass ('text-grey');

    // About section
    $ ('.About_section > div > img').removeClass ('border-lighter-teal');
    $ ('.About_section > div > img').addClass ('border-darker-teal');
    $ ('.About_section > div').addClass ('bg-white text-blackhey');
    $ ('.About_section > div').removeClass ('bg-darker-teal');
    $ ('.About_section > div > ul > li').removeClass ('text-grey');
    $ ('.About_section > div > ul > li').addClass ('text-darker-teal');
    $ ('.About_section > div > p').removeClass ('text-grey');
    $ ('.About_section > div > p').addClass ('text-blackhey');
    $ ('.About_section > div > div').removeClass ('text-grey');
    $ ('.About_section > div > div').addClass ('text-blackhey');
    $ ('.About_section > div > div > ul').removeClass ('text-grey');
    $ ('.About_section > div > div > ul').addClass ('text-blackhey');
  } else if ($ (this).hasClass ('fa-moon')) {
    $ (this).removeClass ('text-yellow-400');
    $ (this).addClass ('text-gray-700');
    // body overlay
    $ ('.body_overlay').removeClass ('bg-lighter-teal');
    $ ('.body_overlay').addClass ('bg-darker-teal');
    // header_overlay
    $ ('header').addClass ('border-b border-b-grey');
    $ ('.header_overlay').addClass ('bg-darker-teal bg-opacity-90');
    $ ('.header_overlay').removeClass ('bg-black');
    // nav buttons
    $ ('.nav_buttons > ul > li > button').addClass ('bg-dark-teal');
    $ ('.nav_buttons > ul > li > button').removeClass ('bg-maroon');
    $ ('.nav_buttons').removeClass ('text-grey');
    $ ('.nav_buttons').addClass ('text-black');

    // About section
    $ ('.About_section > div > img').removeClass ('border-darker-teal');
    $ ('.About_section > div > img').addClass ('border-lighter-teal');
    $ ('.About_section > div').addClass ('bg-darker-teal text-white');
    $ ('.About_section > div').removeClass ('bg-white');
    $ ('.About_section > div > ul > li').removeClass ('text-darker-teal');
    $ ('.About_section > div > ul > li').addClass ('text-grey');
    $ ('.About_section > div > p').removeClass ('text-blackhey');
    $ ('.About_section > div > p').addClass ('text-grey');
    $ ('.About_section > div > div').removeClass ('text-blackhey');
    $ ('.About_section > div > div').addClass ('text-grey');
    $ ('.About_section > div > div > ul').removeClass ('text-blackhey');
    $ ('.About_section > div > div > ul').addClass ('text-grey');

    // Project section
    $ ('.project_section').removeClass ('');
  }
});

});