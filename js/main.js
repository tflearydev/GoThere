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
    // document.getElementById("main").style.marginLeft = "250px";
    // document.querySelector("body").style.backgroundColor = "rgba(0,0,0,0.4)";


    // planned to make entire page slide right but it compromised style on mobile
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    // document.getElementById("main").style.marginLeft= "0";
    // document.body.style.backgroundColor = "white";

    // planned to make entire page slide right but it compromised style on mobile
}

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
});




window.onscroll = function() {myFunction()};

var header = document.getElementById("header");
var sticky = header.offsetTop;
var map = document.getElementById('map')

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
   
    map.classList.add("fixed");
  

  } else {
    header.classList.remove("sticky");
    
    map.classList.remove("fixed");
  }
}

// let carBox = document.getElementsByClassName('car-box');
// let vanFunc = function() {
//     return carBox.style.bgColor = "#0092c0";
// }
// carBox.addEventListener('click', vanFunc())

// let carBox = document.getElementsByClassName('car-box');
// function change() {
// for (var i = 0; i < carBox.length; i++) {
//     carBox[i].style.backgroundColor = '#0092c0';
    
// }
// } 

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


//
//trying this jquery out for the plus/minus button.. not yet finished, moving on because of time

// $('.btn-number').click(function(e){
//     e.preventDefault();

//     fieldName = $(this).attr('data-field');
//     type      = $(this).attr('data-type');
//     var input = $("input[name='"+fieldName+"']");
//     var currentVal = parseInt(input.val());
//     if (!isNaN(currentVal)) {
//         if(type == 'minus') {

//             if(currentVal > input.attr('min')) {
//                 input.val(currentVal - 1).change();
//             } 
//             if(parseInt(input.val()) == input.attr('min')) {
//                 $(this).attr('disabled', true);
//             }

//         } else if(type == 'plus') {

//             if(currentVal < input.attr('max')) {
//                 input.val(currentVal + 1).change();
//             }
//             if(parseInt(input.val()) == input.attr('max')) {
//                 $(this).attr('disabled', true);
//             }

//         }
//     } else {
//         input.val(0);
//     }
// });
// $('.input-number').focusin(function(){
//    $(this).data('oldValue', $(this).val());
// });
// $('.input-number').change(function() {

//     minValue =  parseInt($(this).attr('min'));
//     maxValue =  parseInt($(this).attr('max'));
//     valueCurrent = parseInt($(this).val());

//     name = $(this).attr('name');
//     if(valueCurrent >= minValue) {
//         $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
//     } else {
//         alert('Sorry, the minimum value was reached');
//         $(this).val($(this).data('oldValue'));
//     }
//     if(valueCurrent <= maxValue) {
//         $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
//     } else {
//         alert('Sorry, the maximum value was reached');
//         $(this).val($(this).data('oldValue'));
//     }


// });
// $(".input-number").keydown(function (e) {
//         // Allow: backspace, delete, tab, escape, enter and .
//         if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
//              // Allow: Ctrl+A
//             (e.keyCode == 65 && e.ctrlKey === true) || 
//              // Allow: home, end, left, right
//             (e.keyCode >= 35 && e.keyCode <= 39)) {
//                  // let it happen, don't do anything
//                  return;
//         }
//         // Ensure that it is a number and stop the keypress
//         if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
//             e.preventDefault();
//         }
//     });




