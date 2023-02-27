//Made By BioShot\\


$(document).ready(function() {
  $(document).keypress(function(e) {
    if (e.which == 101) {

      document.getElementById("game").requestFullscreen();
    } else {

    }
  });
  if(document.getElementsByClassName("header").length != 0){
    $(".header").text(document.title.replace('Epik Math 2 | ', '')); //Replace the epik math 2 because i just don't want it there :/
  }else{
    $('body').append(`<h1 class="header">${document.title.replace('Epik Math 2 | ', '')}</h1>`)
    //Get the iframe code:
    var iframeEl = document.getElementById("game").outerHTML;
    console.log(iframeEl);
    $('#game').remove();
    $('body').append(iframeEl);
  }

})
