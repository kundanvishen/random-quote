var quoteContainer = $("#quoteContainer");

$(document).ready(function(){
  $(document).on("click", "#newQuoteButton", function(){
    getQuote();
  })
});

function getQuote() {
  $.ajax({
    headers: {
      "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
    success: function(res) {
      $("#quoteContainer").html(res.quote);
      $("#author").html("~"+res.author);
    }
  }); // ajax request
}