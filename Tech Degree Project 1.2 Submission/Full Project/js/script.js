// 'true' random number operator for a range from CodingTreeHouse with random background color added
function random (lower, upper)
{ return Math.floor(Math.random() * (upper - lower + 1 )) + lower; }
function randomBackgroundColor(){
  let r = '#';
  for (i = 0; i < 3; i++){
    r += getRandomHexNum();
  };
  document.body.style.background = r;
}
// random hexstring for background color as HTML colors are 256 hex based (hence upper 256)
function getRandomHexNum(){
  let hexString = random(0,256).toString(16);
  if (hexString.length % 2) {
    hexString = '0' + hexString;
  }
  return hexString;
} //1
//quotes array, similatr citation may be problem for future 
var quotes = [ 
{ quote: "No way, you guys all forgot your keys?",
source: "Spider-Man", 
citation: "Into the Spider-verse",
year: 2018 }, 
{  quote: "You don't get to like my hair.",
source: "Spider-Gwen", 
citation: "Into the Spider-verse",
year: 2018  }, 
{  quote: "Can you float when you smell a delicious pie?",
source: "Spider-Ham", 
citation: "Into the Spider-verse",
year: 2018  },
{  quote: "Do you let a match burn all the way down to feel something?",
source: "Spider-Man Noir", 
citation: "Into the Spider-verse",
year: 2018  },
{  quote: "Fhwip.",
source: "Spider-Man", 
citation: "Into the Spider-verse",
year: 2018  },
{  quote: "My name is Miles Morales. I’m the one and only Spider-Man. At least that’s what I thought...",
source: "Spider-Man", 
citation: "Into the Spider-verse",
year: 2018  }
 ];
// pulls a random quote from the array, quotes.length lets quotes be added
function getRandomQuote (array) {
return array[random(0,quotes.length)]
}
function printQuote() {
var displayedQuote = getRandomQuote(quotes);
randomBackgroundColor();
// concatenates the HTML sting based on template, vars should be changed to be more clear
var fullQuote = "<p class= 'quote'>";
fullQuote += displayedQuote.quote;
fullQuote += "</p> <p class='source'>";
fullQuote += displayedQuote.source;
// may not be necessary, of operator is defined, could be (true)
if (typeof displayedQuote.citation != "undefined") {
  fullQuote += "<span class='citation'>";
  fullQuote += displayedQuote.citation;
  fullQuote += "</span>";
};
// may not be necessary, of operator is defined, could be (true)
if (typeof displayedQuote.year != "undefined") {
  fullQuote += "<span class='year'>";
  fullQuote += displayedQuote.year;
  fullQuote += "</span>";
};
// may not be necessary, of operator is defined, could be (true)
if (typeof displayedQuote.category != "undefined") {
    fullQuote += "<span class='category'>";
    fullQuote += displayedQuote.category;
    fullQuote += "</span>";
};
fullQuote += "</p>"

  document.getElementById('quote-box').innerHTML = fullQuote;}
// innerhtml method below, verified functional   
//document.getElementById("quote").innerHTML = displayedQuote.quote;
//document.getElementById("source").innerHTML = displayedQuote.source;
//document.getElementById("citation").innerHTML = displayedQuote.citation;
//document.getElementById("year").innerHTML = displayedQuote.year;
  






document.getElementById('loadQuote').addEventListener("click", printQuote, false);


