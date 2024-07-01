window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header_content").style.height = "50px";
    document.getElementById("site_name").style.fontSize = "15px";
  } else {
    document.getElementById("header_content").style.height = "100px";
    document.getElementById("site_name").style.fontSize = "30px";
  }
} 