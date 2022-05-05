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
  $('.link').each(function(){
      if ($(this).prop('href') == window.location.href) {
          $(this).css({
            "color":"#FC3990",
            "border-bottom":"2px solid #FC3990 "
            
          })
      }

      if(window.location.pathname === '/contact.html'){
        $('.nav-contact').css({
          "color":"#FFFFFF",
          "background":"#FC3990"

        })

        $('.nav-contact').hover(function(){
          $(this).css({
           

          "color": "#FFFFFF",
          "background":"#22C6F9"

          
          });
        }, 
        
        function(){
        $(this).css({
         
          "color":"#FFFFFF",
          "background":"#FC3990"

          
        });
      })
    }
  })
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
    items:4,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: true,
    navText: [
      "<img src='images/arrow-1.png'>",

      "<img src='images/arrow-2.png'>",
    ],
    
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
    nav: true,
    dots: true,
    navText: [
      "<img src='images/arrow-1.png'>",

      "<img src='images/arrow-2.png'>",
    ],
    
  });
});


$(function () {
  $("#association-members").owlCarousel({
    items:3,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: true,
    navText: [
      "<img src='images/arrow-1.png'>",

      "<img src='images/arrow-2.png'>",
    ],
    
  });
});


$(function () {
  $("#gallery-members").owlCarousel({
    items:4,
    autoplay: true,
    smartSpeed: 200,
    loop: true,
   
    autoplayHoverPause: true,
    nav: true,
    dots: true,
    navText: [
      "<img src='images/arrow-1.png'>",

      "<img src='images/arrow-2.png'>",
    ],
    
  });
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});


