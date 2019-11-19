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

    $("#bar-5").click(function () {
        $("#detail-5").toggle(500);
        $("#arrow-5").toggleClass('rotation', 1000);
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


// // make fraction utilization header sticky/fixed
// // add this into search.js file for van2share bitbucket account when you are ready to add in the fraction pages
// window.onscroll = function() {myFunction()};

// var header = document.getElementById("header");
// var sticky = header.offsetTop;
// var map = document.getElementById('map');
// var map2 = document.getElementById('map2')
// // var ec1 = document.getElementsByClassName('ec1')

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//     // ec1.classList.add('tops');
  
//     map.classList.add("sticky", "map-height");

//     // map2.classList.add("sticky", "map-height2");

//   } else {
//     header.classList.remove("sticky");
//     // ec1.classList.remove('tops');
    
//     map.classList.remove("sticky", "map-height");

//     // map2.classList.remove("sticky", "map-height2");
//   }
// }







//


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


  // making the 'more filters' button update to 'apply & search' on click (search-details2 page)
  function btnFunc() {
    document.getElementById("btn-1").innerHTML = '<div id="btn-text" style="margin-top: -6px"> <span style="font-weight: bold">Apply & Search</span></div>';

  }


  

  //hard coded the change of photo icons once clicked, was not sure how you wanted to do them on backend.. this is just a quick fix/ example
  //so here is just something quick
  let photo1 = document.getElementById('photo1');
  let photoFunc = function() {
      photo1.innerHTML = "<img src='../assets/photo-24px.svg'>";
      photo1.style.backgroundColor = 'white';
  }
   photo1.addEventListener('click', photoFunc);
  

   let photo2 = document.getElementById('photo2');
  let photoFunc2 = function() {
      photo2.innerHTML = "<img src='../assets/photo-24px.svg'>"
      photo2.style.backgroundColor = 'white';
  }
   photo2.addEventListener('click', photoFunc2);
  
   let photo3 = document.getElementById('photo3');
  let photoFunc3 = function() {
      photo3.innerHTML = "<img src='../assets/photo-24px.svg'>"
      photo3.style.backgroundColor = 'white';
  }
   photo3.addEventListener('click', photoFunc3);
  
   let photo4 = document.getElementById('photo4');
  let photoFunc4 = function() {
      photo4.innerHTML = "<img src='../assets/photo-24px.svg'>"
      photo4.style.backgroundColor = 'white';
  }
   photo4.addEventListener('click', photoFunc4);
  
   let photo5 = document.getElementById('photo5');
  let photoFunc5 = function() {
      photo5.innerHTML = "<img src='../assets/photo-24px.svg'>"
      photo5.style.backgroundColor = 'white';
  }
   photo5.addEventListener('click', photoFunc5);

   let photo6 = document.getElementById('photo6');
   let photoFunc6 = function() {
       photo6.innerHTML = "<img src='../assets/photo-24px.svg'>"
       photo6.style.backgroundColor = 'white';
   }
    photo6.addEventListener('click', photoFunc6);
   

    let photo7= document.getElementById('photo7');
   let photoFunc7 = function() {
       photo7.innerHTML = "<img src='../assets/photo-24px.svg'>"
       photo7.style.backgroundColor = 'white';
   }
    photo7.addEventListener('click', photoFunc7);
   
    let photo8= document.getElementById('photo8');
   let photoFunc8 = function() {
       photo8.innerHTML = "<img src='../assets/photo-24px.svg'>"
       photo8.style.backgroundColor = 'white';
   }
    photo8.addEventListener('click', photoFunc8);
   
    
    let photo9= document.getElementById('photo9');
   let photoFunc9 = function() {
       photo9.innerHTML = "<img src='../assets/photo-24px.svg'>"
       photo9.style.backgroundColor = 'white';
   }
    photo9.addEventListener('click', photoFunc9);
   
   
    let photo10= document.getElementById('photo10');
   let photoFunc10 = function() {
       photo10.innerHTML = "<img src='../assets/photo-24px.svg'>"
       photo10.style.backgroundColor = 'white';
   }
    photo10.addEventListener('click', photoFunc10);
   
   
