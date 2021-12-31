function openNav() {
  if (document.getElementById("mySidepanel").style.width=='250px'){
    document.getElementById("mySidepanel").style.width = "0px";
    document.getElementById("nav-button").setAttribute("aria-expanded", 'false');
  }
  else{
    document.getElementById("mySidepanel").style.width = "250px";
    document.getElementById("nav-button").setAttribute("aria-expanded", 'true');
  }
  }
function closeSideNav() {
  if (window.screen.width<=992){
    document.getElementById("mySidepanel").style.width = "0";
    var x = document.getElementById("nav-button").getAttribute("aria-expanded"); 
    document.getElementById("nav-button").setAttribute("aria-expanded", 'false');
  }
}

function openMessagePanel() {
  document.getElementById("messageSidepanel").style.height = "360px";
  document.getElementById("message_button").style.display = "none";
}

function closeMessagePanel() {
  document.getElementById("messageSidepanel").style.height = "0px";
  document.getElementById("message_button").style.display = "block";
}

function openSocialPanel() {
  document.getElementById("mySocialpanel").style.width = "60px";
}

function closeSocialPanel() {
  document.getElementById("mySocialpanel").style.width = "0px";
}


var myBlurFunction = function(state) {
  /* state can be 1 or 0 */
  var containerElement = document.getElementById('main_container');
  var overlayEle = document.getElementById('overlay');

  if (state) {
      overlayEle.style.display = 'block';
      containerElement.setAttribute('class', 'blur');
  } else {
      overlayEle.style.display = 'none';
      containerElement.setAttribute('class', null);
  }
};



$(document).ready(function() {
  $('#carouselExampleIndicators').carousel({
    interval: 5000
})
});