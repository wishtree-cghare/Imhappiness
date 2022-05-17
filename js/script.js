const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");


/*-------------------------------------------------------
                Header Tabs
----------------------------------------------------------*/

$('.header-tabs').responsiveTabs({
    startCollapsed: 'accordion',
   
  });


// active nav links

$(function(){
  $('.link').click(function(){
   
      $('.nav-links .active').removeClass('active');
      $('.sidebar-links .active').removeClass('active');

      $(this).addClass('active');
   });
})
    
 
// collapsible on plus minus
var coll = document.getElementsByClassName("collapsible-div");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("collapsible-active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

// Slide the contents

$(function () {
  $("#ambassadors-members").owlCarousel({
    items:5,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    // nav: true,
    dots: true,
    // navText: [
    //   "<img src='images/arrow-1.png'>",

    //   "<img src='images/arrow-2.png'>",
    // ],
    responsive: {
      360: {
        items: 2,
        
      },
      400: {
        items: 2,
       
      },
    
      550: {
        items: 3,
       
        
      },
      850: {
        items: 5,
        
      }
    }
    
  });
});


// Slide the contents

$(function () {
  $("#team-members").owlCarousel({
    items:1,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    dots: true
  });
});


$(function () {
  $("#association-members").owlCarousel({
    items:3,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    dots: true,
    responsive: {
      360: {
        items: 2
       
      },
      400: {
        items: 2
      
      },
    
      550: {
        items: 3
       
      },
      
    }
  });
});


$(function () {
  $("#gallery-members").owlCarousel({
    items:5,
    autoplay: true,
    smartSpeed: 200,
    loop: true,
   
    autoplayHoverPause: true,
    dots: true,
    responsive:{
    360: {
        items: 1
      },
      400: {
        items: 2
      },
     
      650: {
        items: 3
      },
     
      850: {
        items: 5
      }
    }
    
  });
});

// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }

// close the sidebar on click of sidebar menu

$(".sidebar-links")[0].addEventListener("click", function () {
 document.getElementById("menuToggler").checked = false;
});









// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");


// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;

    console.log('section height')
    console.log(sectionHeight)
    console.log(sectionTop)
    sectionId = current.getAttribute("id");
    
    
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".navbar a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navbar a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}



/*  smooth scrolling  */

//Function to mark an item from a section width a css class.

function menuOnScroll(mySection, myMenu, myClass) {
  $(window).scroll(function(){
    var elScroll = $(window).scrollTop();
    console.log('elsScroll')
    console.log(elScroll)
    $(mySection).each(function(i){
      if ($(this).offset().top <= elScroll ) {
        $(myMenu).removeClass(myClass);
        $(myMenu).eq(i).addClass(myClass);
      }
    });
  });
}

//Call function.
//First parameter will be the section that we want to go.
//Second will be the item that will change his css.
//Third will be the class css to add to the item( Our second parameter) Is IMPORTAT to note that we must to skip the dot of our class.
menuOnScroll('section','nav ul li a', 'inSection');
menuOnScroll('section','sidebar ul li a', 'inSection');




//Function to animate the scroll when click on a menu item.
//IMPORTANT. This function is only use for animate the scroll, you could skip it if you want.
function scrollToAnyPoint (navItem) {
  var getAttr;
  $(navItem).click(function(e){
    e.preventDefault();
    getAttr = $(this).attr('href');
    var toSection = $(getAttr).offset().top - 80;
    $("html, body").animate({scrollTop:toSection}, 1000)
  });
}
//Call Function
scrollToAnyPoint('nav ul li a');
scrollToAnyPoint('ul li a');



function scrollToTop() {

  window.scrollTo({top: 0 , behavior: 'smooth'});
  
  }