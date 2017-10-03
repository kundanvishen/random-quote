var backgrounds = [{
  "from": "#00bf8f",
  "to": "#001510"
},
{
  "from": "#43cea2",
  "to": "#185a9d"
},{
  "from": "#FFA17F",
  "to": "#00223E"
},{
  "from": "#360033",
  "to": "#0b8793"
},{
  "from": "#948E99",
  "to": "#2E1437"
},{
  "from": "#70e1f5",
  "to": "#ffd194"
},{
  "from": "#556270",
  "to": "#FF6B6B"
},{
  "from": "#780206",
  "to": "#061161"
}];

var quoteContainer = $("#quoteContainer");


$(document).ready(function(){
  $(document).on("click", "#newQuoteButton", function(){
    getQuote();
  })
}); // document.ready()

function getQuote() {
  $.ajax({
    headers: {
      "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
    success: function(res) {
      console.log(res);
      $("#quoteContainer").html(res.quote);
      $("#author").html("~"+res.author);
      var random = getRandomBackground();
      console.log(random);

      $("html body").css({
        background: "linear-gradient(to right, "+random.from+", "+random.to+")"
      });
    }
  }); // ajax request
} // getQuote()

function getRandomBackground(){
  return backgrounds[Math.floor(Math.random() * backgrounds.length)];
}