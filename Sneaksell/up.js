window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("upBtn").style.display = "block";
    } else {
        document.getElementById("upBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      }); // For Safari
    document.documentElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      }); // For Chrome, Firefox, IE and Opera
}