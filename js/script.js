$(document).ready(function() {
  $('#tweetMe').click(function() {
    var str = document.getElementById('quote').textContent + " -Henry David Thoreau";
    var addToHref = encodeURIComponent(str);
    $(this).attr("href", "https://twitter.com/intent/tweet?text=" + addToHref);
  });
});

var el = document.getElementById("btnClick");
if(el){
el.addEventListener("click", modifyText, false);
}
var i = 0;
var quotes = ["\"I am grateful for what I am and have. My thanksgiving is perpetual.\"", "\"The universe is wider than our views of it.\"", "\"Things do not change; we change.\"", "\"None are so old as those who have outlived enthusiasm.\"", "\"Goodness is the only investment that never fails.\"", "\"Any fool can make a rule, and any fool will mind it.\"", "\"Do not be too moral. You may cheat yourself out of much life so.\""]

function modifyText() {
  var t2 = document.getElementById("quote");
  if (i < 7) {
    t2.textContent = quotes[i];
    i++;
  } else {
    t2.textContent = "\"An early-morning walk is a blessing for the whole day.\"";
    i = 0;
  }
}

//http://viratgaywala.blogspot.in/2014/05/how-to-create-facebook-app-for-website.html
//http://viratgaywala.blogspot.com/search?q=share+button+facebook

/*rgb 255, 252, 197
rgb 127, 126 106
rgb 127, 127, 113
rgb 204, 202, 170*/