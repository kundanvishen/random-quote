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
},{
  "from": "#000000",
  "to": "#53346D"
},{
  "from": "#4b6cb7",
  "to": "#182848"
},{
  "from": "#5f2c82",
  "to": "#49a09d"
},{
  "from": "#DC2424",
  "to": "#4A569D"
},{
  "from": "#24C6DC",
  "to": "#514A9D"
},{
  "from": "#5C258D",
  "to": "#4389A2"
},{
  "from": "#134E5E",
  "to": "#71B280"
},{
  "from": "#085078",
  "to": "#85D8CE"
}];

var quoteContainer = $("#quoteContainer");
var quote = '';
var author = '';

$(document).ready(function(){
	getQuote();
  $(document).on("click", "#newQuoteButton", function(){
    getQuote();
  });
  $(document).on("click", "#tweetButton", function(){
	  openLink('https://twitter.com/intent/tweet?hashtags=quotes&related=kundanvishen&text=' + encodeURIComponent('"' + quote + '" ' + author));
  });
  $(document).on("click", "#tumblrButton", function(){
	  openLink('https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,kundanvishen,kundan,kundan.me&caption='+encodeURIComponent(author)+'&content=' + encodeURIComponent(quote)+'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');
  });

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

		quote = res.quote;
		author = res.author;
		
		$(".card-block").animate({opacity:0},500, function(){
			$(this).animate({opacity:1}, 500);

			var random = getRandomBackground();
			var property  = 'linear-gradient(to right, '+random.from+', ' +random.to+')';
			console.log(property);
			
			$('meta[name=theme-color]').attr('content', random.from);
			$('body').animate({
				background: "-webkit-gradient(linear, left top, right top, from("+random.from+"), to("+random.to+"))"}).css({
				background: "-moz-linear-gradient(left, "+random.from+" 0%, "+random.to+" 100%)"});

			$("#quoteContainer").html(res.quote);
			$("#author").html("~"+res.author);
		})

			
//		var dom = document.getElementsByTagName("body")[0];
//		dom.style.backgroundImage = 'linear-gradient(to right, ' + random.from + ', ' + random.to + ')';

//		$("body").css({
//			'background': property
//		},2000);

    }
  }); // ajax request
} // getQuote()

function getRandomBackground(){
  return backgrounds[Math.floor(Math.random() * backgrounds.length)];
} // getRandomBackground()

function openLink(link) {
	window.open(link);
} // openLink()