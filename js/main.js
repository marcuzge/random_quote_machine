// function inIframe () { try { return window.self !== window.top; } catch (e) { return true; } }

var currentQuote = ''; 
var currentAuthor = '';
// var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

function openURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

// function changecolor() {
// 	var color = Math.floor(Math.random() * colors.length);
// 	  $(".textbox").animate({
//         backgroundColor: colors[color]
//       }, 1000);
// }

function getQuote() {
  $.ajax({
    headers: {
      "X-Mashape-Key": "RElYuHifQfmshiuEjqQVlRFMVEKsp1B4CZMjsnnodZVCkhf8sO",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=famous',
    success: function(res) {
//       var r = JSON.parse(res);
      currentQuote = res.quote;
      currentAuthor = res.author;
      

      $(".quote-text").animate({
          opacity: 0
        }, 1000,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $('#text').text(res.quote);
        });

      $(".quote-author").animate({
          opacity: 0
        }, 1000,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $('#author').html(res.author);
        });

      if ((currentQuote.length + currentAuthor.length + 1) > 140){
      	$("#tweet").hide();
	  } else {
	  	$("#tweet").show();
	  }

	  // var color = Math.floor(Math.random() * colors.length);
   //    $("html body").animate({
   //      backgroundColor: colors[color]
   //    }, 1000);
   //    $(".textbox").animate({
   //      backgroundColor: colors[color]
   //    }, 1000);

    }
  });
}


$(document).ready(function() {
  getQuote();
  $('#quoteButton').on('click', getQuote);
  $('#tweet').on('click', function() {
  openURL('https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));    
  });
  $('#fb').on('click', function() {
  openURL('http://www.facebook.com/sharer');
  });
  $('#tumblr').on('click', function() {
  openURL('https://www.tumblr.com/share');
  });
});



