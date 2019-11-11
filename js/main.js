// transition from login page to register page without reloading the document
function show(elementID) {
    var ele = document.getElementById(elementID);
    if (!ele) {
        alert("no such element");
        return;
    }
    var pages = document.getElementsByClassName('page');
    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    ele.style.display = 'block';
}

//side navigation js
function openNav() {
    document.getElementById("mySidenav").style.width = "260px";
   // planned to make entire page slide right but it compromised style on mobile
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    // planned to make entire page slide right but it compromised style on mobile
}

//dropdown for filters and show details, hard coded for mvp
$(document).ready(function () {
    $("#btn-1").click(function () {
        $(".extra-filter").toggle(500);
    });
    $("#bar-1").click(function () {
        $("#detail-1").toggle(500);
        $("#arrow-1").toggleClass('rotation', 1000);
    });
    $("#bar-2").click(function () {
        $("#detail-2").toggle(500);
        $("#arrow-2").toggleClass('rotation', 1000);
    });
    $("#bar-3").click(function () {
        $("#detail-3").toggle(500);
        $("#arrow-3").toggleClass('rotation', 1000);
    });
    $("#bar-4").click(function () {
      $("#detail-4").toggle(500);
      $("#arrow-4").toggleClass('rotation', 1000);
  });

    
});


// make fraction utilization header sticky/fixed
// add this into search.js file for van2share bitbucket account when you are ready to add in the fraction pages
window.onscroll = function() {myFunction()};

var header = document.getElementById("header");
var sticky = header.offsetTop;
var map = document.getElementById('map');
var map2 = document.getElementById('map2')
// var ec1 = document.getElementsByClassName('ec1')

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    // ec1.classList.add('tops');
   
   
    map.classList.add("sticky", "map-height");

    // map2.classList.add("sticky", "map-height2");

  } else {
    header.classList.remove("sticky");
    // ec1.classList.remove('tops');
   
    
    map.classList.remove("sticky", "map-height");


    // map2.classList.remove("sticky", "map-height2");
  }
}


$('#c1').click(function() {
    $('.car-box1').addClass('new');
    $('.car-box2').removeClass('new');
    $('.car-box3').removeClass('new');
  });

  $('#c2').click(function() {
    $('.car-box2').addClass('new');
    $('.car-box1').removeClass('new');
    $('.car-box3').removeClass('new');
  });

  $('#c3').click(function() {
    $('.car-box3').addClass('new');
    $('.car-box1').removeClass('new');
    $('.car-box2').removeClass('new');
  });


  // making more filters button update to 'apply & search' on click
  function btnFunc() {
    document.getElementById("btn-1").innerHTML = '<div id="btn-text" style="margin-top: -6px"> <span style="font-weight: bold">Apply & Search</span></div>';



    // document.getElementById("btn-text").style.marginTop = -"-6px";
  }