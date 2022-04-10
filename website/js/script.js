// Go to top

// Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Download Button

function btn_active(){
  document.querySelector('.texto_centro').className = "texto_centro active_txt";
    document.querySelector('.cont_centrar').className = "cont_centrar activebtn";
    setTimeout(function(){
        document.querySelector('.cont_centrar').className = "cont_centrar activebtn_fin";
      document.querySelector('.texto_centro').className = "texto_centro op_0";
    },15000);
  }