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
    nav: true,
    dots: true,
    navText: [
      "<img src='images/arrow-1.png'>",

      "<img src='images/arrow-2.png'>",
    ],
    responsive: {
      360: {
        items: 2,
        nav: true,
        dots:false
      },
      400: {
        items: 2,
        nav: true,
        dots:false
      },
    
      550: {
        items: 3,
        nav: true,
        dots:false
      },
      850: {
        items: 5,
        nav: true,
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
    responsive: {
      360: {
        items: 2,
        nav: true,
        dots:false
      },
      400: {
        items: 2,
        nav: true,
        dots:false
      },
    
      550: {
        items: 3,
        nav: true,
        dots:false
      },
      850: {
        items: 5,
        nav: true,
      }
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
    nav: true,
    dots: true,
    navText: [
      "<img src='images/arrow-1.png'>",

      "<img src='images/arrow-2.png'>",
    ],
    responsive:{
    360: {
        items: 1,
        nav: true,
        dots:false
      },
      400: {
        items: 2,
        nav: true,
        dots:false
      },
     
      650: {
        items: 3,
        nav: true,
      },
     
      850: {
        items: 5,
        nav: true,
      }
    }
    
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
  console.log("hii")
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});


