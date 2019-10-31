// transition from login page to register page without reloading the document
function show(elementID) {
    var ele = document.getElementById(elementID);
    if (!ele) {
        alert("no such element");
        return;
    }
    var pages = document.getElementsByClassName('page');
    for(var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    ele.style.display = 'block';
}

//side navigation js
function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
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

  
 