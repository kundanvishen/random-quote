// Modern color palettes for gradients - clean and complementary
var gradients = [{
  "from": "#3a7bd5",
  "to": "#00d2ff"
},{
  "from": "#4568dc",
  "to": "#b06ab3"
},{
  "from": "#02aab0",
  "to": "#00cdac"
},{
  "from": "#8e2de2",
  "to": "#4a00e0"
},{
  "from": "#1a2980",
  "to": "#26d0ce"
},{
  "from": "#667db6",
  "to": "#0082c8"
},{
  "from": "#5f2c82",
  "to": "#49a09d"
}];

// Predefined quotes
var quotes = [
  {
    quote: "The artist is nothing without the gift, but the gift is nothing without work.",
    author: "Emile Zola"
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    quote: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost"
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu"
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    quote: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins"
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius"
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West"
  },
  {
    quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison"
  },
  {
    quote: "If you want to live a happy life, tie it to a goal, not to people or things.",
    author: "Albert Einstein"
  },
  {
    quote: "Never let the fear of striking out keep you from playing the game.",
    author: "Babe Ruth"
  },
  {
    quote: "Money and success don't change people; they merely amplify what is already there.",
    author: "Will Smith"
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs"
  },
  {
    quote: "The best way to predict the future is to create it.",
    author: "Abraham Lincoln"
  },
  {
    quote: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu"
  },
  {
    quote: "The mind is everything. What you think you become.",
    author: "Buddha"
  },
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    quote: "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa"
  },
  {
    quote: "When you reach the end of your rope, tie a knot in it and hang on.",
    author: "Franklin D. Roosevelt"
  },
  {
    quote: "Always remember that you are absolutely unique. Just like everyone else.",
    author: "Margaret Mead"
  },
  {
    quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    author: "Robert Louis Stevenson"
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    author: "Benjamin Franklin"
  },
  {
    quote: "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
    author: "Helen Keller"
  },
  {
    quote: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle"
  },
  {
    quote: "Whoever is happy will make others happy too.",
    author: "Anne Frank"
  },
  {
    quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "You will face many defeats in life, but never let yourself be defeated.",
    author: "Maya Angelou"
  },
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    quote: "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln"
  },
  {
    quote: "Never let the fear of striking out keep you from playing the game.",
    author: "Babe Ruth"
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller"
  },
  {
    quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison"
  },
  {
    quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    author: "Dr. Seuss"
  },
  {
    quote: "If life were predictable it would cease to be life and be without flavor.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "Life is a succession of lessons which must be lived to be understood.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "Life is never fair, and perhaps it is a good thing for most of us that it is not.",
    author: "Oscar Wilde"
  },
  {
    quote: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins"
  },
  {
    quote: "In this life we cannot do great things. We can only do small things with great love.",
    author: "Mother Teresa"
  },
  {
    quote: "Only a life lived for others is a life worthwhile.",
    author: "Albert Einstein"
  },
  {
    quote: "The purpose of our lives is to be happy.",
    author: "Dalai Lama"
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West"
  },
  {
    quote: "Live in the sunshine, swim the sea, drink the wild air.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "Go confidently in the direction of your dreams! Live the life you've imagined.",
    author: "Henry David Thoreau"
  },
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    quote: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius"
  },
  {
    quote: "May you live all the days of your life.",
    author: "Jonathan Swift"
  },
  {
    quote: "Life itself is the most wonderful fairy tale.",
    author: "Hans Christian Andersen"
  },
  {
    quote: "Do not let making a living prevent you from making a life.",
    author: "John Wooden"
  },
  {
    quote: "Life is ours to be spent, not to be saved.",
    author: "D. H. Lawrence"
  },
  {
    quote: "Keep smiling, because life is a beautiful thing and there's so much to smile about.",
    author: "Marilyn Monroe"
  },
  {
    quote: "Life is a long lesson in humility.",
    author: "James M. Barrie"
  },
  {
    quote: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost"
  },
  {
    quote: "Love the life you live. Live the life you love.",
    author: "Bob Marley"
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller"
  },
  {
    quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    author: "Dr. Seuss"
  },
  {
    quote: "Life is made of ever so many partings welded together.",
    author: "Charles Dickens"
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs"
  },
  {
    quote: "Life is trying things to see if they work.",
    author: "Ray Bradbury"
  },
  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    quote: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau"
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    quote: "If you really look closely, most overnight successes took a long time.",
    author: "Steve Jobs"
  },
  {
    quote: "The secret of success is to do the common thing uncommonly well.",
    author: "John D. Rockefeller Jr."
  },
  {
    quote: "I find that the harder I work, the more luck I seem to have.",
    author: "Thomas Jefferson"
  },
  {
    quote: "The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.",
    author: "Barack Obama"
  },
  {
    quote: "Don't be distracted by criticism. Remember — the only taste of success some people get is to take a bite out of you.",
    author: "Zig Ziglar"
  },
  {
    quote: "I never dreamed about success, I worked for it.",
    author: "Estée Lauder"
  },
  {
    quote: "Success seems to be connected with action. Successful people keep moving. They make mistakes but they don't quit.",
    author: "Conrad Hilton"
  },
  {
    quote: "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
    author: "Colin Powell"
  },
  {
    quote: "The only place where success comes before work is in the dictionary.",
    author: "Vidal Sassoon"
  },
  {
    quote: "The road to success and the road to failure are almost exactly the same.",
    author: "Colin R. Davis"
  },
  {
    quote: "Success is not how high you have climbed, but how you make a positive difference to the world.",
    author: "Roy T. Bennett"
  },
  {
    quote: "I owe my success to having listened respectfully to the very best advice, and then going away and doing the exact opposite.",
    author: "G. K. Chesterton"
  },
  {
    quote: "Success is stumbling from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill"
  },
  {
    quote: "Opportunities don't happen. You create them.",
    author: "Chris Grosser"
  },
  {
    quote: "Try not to become a man of success. Rather become a man of value.",
    author: "Albert Einstein"
  },
  {
    quote: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller"
  },
  {
    quote: "Always bear in mind that your own resolution to success is more important than any other one thing.",
    author: "Abraham Lincoln"
  },
  {
    quote: "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill"
  },
  {
    quote: "You know you are on the road to success if you would do your job and not be paid for it.",
    author: "Oprah Winfrey"
  },
  {
    quote: "If you want to achieve greatness stop asking for permission.",
    author: "Anonymous"
  },
  {
    quote: "Things work out best for those who make the best of how things work out.",
    author: "John Wooden"
  },
  {
    quote: "If you are not willing to risk the usual, you will have to settle for the ordinary.",
    author: "Jim Rohn"
  },
  {
    quote: "All our dreams can come true if we have the courage to pursue them.",
    author: "Walt Disney"
  },
  {
    quote: "Success is liking yourself, liking what you do, and liking how you do it.",
    author: "Maya Angelou"
  },
  {
    quote: "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
    author: "David Brinkley"
  },
  {
    quote: "If you genuinely want something, don't wait for it — teach yourself to be impatient.",
    author: "Gurbaksh Chahal"
  },
  {
    quote: "The difference between who you are and who you want to be is what you do.",
    author: "Unknown"
  },
  {
    quote: "The question isn't who is going to let me; it's who is going to stop me.",
    author: "Ayn Rand"
  },
  {
    quote: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt"
  },
  {
    quote: "It is better to fail in originality than to succeed in imitation.",
    author: "Herman Melville"
  },
  {
    quote: "Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better.",
    author: "Jim Rohn"
  },
  {
    quote: "The successful warrior is the average man, with laser-like focus.",
    author: "Bruce Lee"
  },
  {
    quote: "There is no traffic jam along the extra mile.",
    author: "Roger Staubach"
  },
  {
    quote: "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
    author: "Dale Carnegie"
  },
  {
    quote: "If you don't design your own life plan, chances are you'll fall into someone else's plan. And guess what they have planned for you? Not much.",
    author: "Jim Rohn"
  },
  {
    quote: "The whole secret of a successful life is to find out what is one's destiny to do, and then do it.",
    author: "Henry Ford"
  },
  {
    quote: "What seems to us as bitter trials are often blessings in disguise.",
    author: "Oscar Wilde"
  },
  {
    quote: "The distance between insanity and genius is measured only by success.",
    author: "Bruce Feirstein"
  },
  {
    quote: "Don't let yesterday take up too much of today.",
    author: "Will Rogers"
  },
  {
    quote: "You learn more from failure than from success. Don't let it stop you. Failure builds character.",
    author: "Unknown"
  }
];

var quoteContainer = $("#quoteContainer");
var quote = '';
var author = '';

$(document).ready(function(){
	initBackgroundElements();
	initParticles();
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
  // Get a random quote from our predefined quotes
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  // Store the current quote and author
  quote = randomQuote.quote;
  author = randomQuote.author;
  
  // Animate the card
  $(".card-block").animate({opacity:0}, 500, function(){
    $(this).animate({opacity:1}, 500);
    
    // Update the background and content
    var random = getRandomBackground();
    updateBackground(random);
    $("#quoteContainer").html(quote);
    $("#author").html('~' + author);
  });
}

function getRandomBackground() {
	return gradients[Math.floor(Math.random() * gradients.length)];
}

function updateBackground(colors) {
    // Set theme color for mobile browsers
    $('meta[name=theme-color]').attr('content', colors.from);
    
    // Create a modern mesh gradient effect
    document.body.style.background = `
        radial-gradient(at 0% 0%, ${colors.from} 0%, transparent 50%),
        radial-gradient(at 100% 0%, ${colors.to} 0%, transparent 50%),
        radial-gradient(at 100% 100%, ${colors.from}aa 0%, transparent 70%),
        radial-gradient(at 0% 100%, ${colors.to}aa 0%, transparent 70%)
    `;
    
    // Update particle colors
    updateParticleColors(colors);
    
    // Update shapes colors
    updateShapesColors(colors);
}

function openLink(url) {
	window.open(url, '_blank');
}

// Initialize particles
function initParticles() {
    // Add particles container to body
    $('body').append('<div id="particles-js"></div>');
    
    // Load particles.js script if not already loaded
    if (typeof particlesJS === 'undefined') {
        $.getScript('https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js', function() {
            setupParticles();
        });
    } else {
        setupParticles();
    }
}

function setupParticles() {
    var defaultColors = getRandomBackground();
    
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 30,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": defaultColors.from
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 0.3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": defaultColors.to,
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 0.8
                    }
                },
                "push": {
                    "particles_nb": 3
                }
            }
        },
        "retina_detect": true
    });
}

function updateParticleColors(colors) {
    if (typeof pJSDom !== 'undefined' && pJSDom.length > 0) {
        // Update particle colors
        pJSDom[0].pJS.particles.color.value = colors.from;
        pJSDom[0].pJS.particles.line_linked.color = colors.to;
        
        // Refresh particles
        pJSDom[0].pJS.fn.particlesRefresh();
    }
}

// Initialize background elements
function initBackgroundElements() {
    // Create container for background elements
    $('body').append('<div class="bg-elements"></div>');
    
    // Add grid lines
    $('.bg-elements').append('<div class="grid-lines"></div>');
    
    // Add dots pattern
    $('.bg-elements').append('<div class="dots-pattern"></div>');
    
    // Add geometric shapes
    addGeometricShapes();
    
    // Add design lines
    addDesignLines();
}

// Add geometric shapes to background
function addGeometricShapes() {
    const shapes = [
        { class: 'shape shape-1 circle', color: 'rgba(255, 255, 255, 0.2)' },
        { class: 'shape shape-2 circle', color: 'rgba(255, 255, 255, 0.2)' },
        { class: 'shape shape-3 circle', color: 'rgba(255, 255, 255, 0.2)' },
        { class: 'shape shape-4 circle', color: 'rgba(255, 255, 255, 0.2)' }
    ];
    
    shapes.forEach(shape => {
        $('.bg-elements').append(`<div class="${shape.class}"></div>`);
    });
}

// Add design lines to background
function addDesignLines() {
    const lines = [
        { class: 'design-line h-line-1' },
        { class: 'design-line h-line-2' },
        { class: 'design-line v-line-1' },
        { class: 'design-line v-line-2' }
    ];
    
    lines.forEach(line => {
        $('.bg-elements').append(`<div class="${line.class}"></div>`);
    });
}

// Update shapes with new colors
function updateShapesColors(colors) {
    // Apply colors to shapes
    $('.shape-1').css('background', colors.from);
    $('.shape-2').css('background', colors.to);
    $('.shape-3').css('background', colors.from + '88'); // With transparency
    $('.shape-4').css('background', colors.to + '88'); // With transparency
    
    // Update design lines color
    $('.h-line-1').css('background', colors.from + '33');
    $('.h-line-2').css('background', colors.to + '33');
    $('.v-line-1').css('background', colors.from + '33');
    $('.v-line-2').css('background', colors.to + '33');
    
    // Randomly reposition some elements for visual variety
    animateBackgroundElements();
}

// Add some subtle animation to background elements
function animateBackgroundElements() {
    // Move shapes slightly
    $('.shape-1').css({
        'transform': `translate(${randomOffset(20)}px, ${randomOffset(20)}px) scale(${0.8 + Math.random() * 0.4})`,
        'opacity': 0.1 + Math.random() * 0.3
    });
    
    $('.shape-2').css({
        'transform': `translate(${randomOffset(20)}px, ${randomOffset(20)}px) scale(${0.8 + Math.random() * 0.4})`,
        'opacity': 0.1 + Math.random() * 0.3
    });
    
    $('.shape-3').css({
        'transform': `translate(${randomOffset(20)}px, ${randomOffset(20)}px) scale(${0.8 + Math.random() * 0.4})`,
        'opacity': 0.1 + Math.random() * 0.3
    });
    
    $('.shape-4').css({
        'transform': `translate(${randomOffset(20)}px, ${randomOffset(20)}px) scale(${0.8 + Math.random() * 0.4})`,
        'opacity': 0.1 + Math.random() * 0.3
    });
}

// Generate random offset for animation
function randomOffset(max) {
    return Math.floor(Math.random() * max) - max/2;
}