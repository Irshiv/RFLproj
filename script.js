// navbar sticky
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY >20){
            $('.navbar').addClass("sticky")
        }else{
            $('.navbar').removeClass("sticky")
        }
    })
})
$(document).ready(function(){
  $(window).scroll(function(){
      if(this.scrollY >20){
          $('.logo1').addClass("disp")
      }else{
          $('.logo1').removeClass("disp")
      }
  })
})



// typing animation script
var typed = new Typed(".typing",{
    strings: ["Life", "Love", "You"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})
function byID(id) {
    return document.getElementById(id);
  }
  
  byID("toggle").onclick = function() {
    if (byID("container").classList.contains("closed")) {
      byID("container").classList.remove("closed");
    } else {
      byID("container").classList.add("closed");
    }
  }
  byID("toggle2").onclick = function() {
    if (byID("container2").classList.contains("closed2")) {
      byID("container2").classList.remove("closed2");
    } else {
      byID("container2").classList.add("closed2");
    }
  }
  byID("toggle3").onclick = function() {
    if (byID("container3").classList.contains("closed3")) {
      byID("container3").classList.remove("closed3");
    } else {
      byID("container3").classList.add("closed3");
    }
  }