"use strict";

var sources = [{ "name": "Ars Technica", "source": "ars-technica" }, { "name": "Engadget", "source": "engadget" }, { "name": "Hacker News", "source": "hacker-news" }, { "name": "Mashable", "source": "mashable" }, { "name": "Recode", "source": "recode" }, { "name": "TechCrunch", "source": "techcrunch" }, { "name": "TechRadar", "source": "techradar" }, { "name": "The Next Web", "source": "the-next-web" }, { "name": "The Verge", "source": "the-verge" }, { "name": "Wired", "source": "wired" }];
var feedCards = document.querySelector('.feed-cards');

var card = '';

for (var i in sources) {

  var name = sources[i].name;
  var source = sources[i].source;
  var newsApi = 'https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=096d5f7701364ed691b9141cc48f736a';

  fetch(newsApi).then(function (response) {
    return response.json();
  }).then(function (data) {

    var articles = data.articles;

    for (var j in articles) {
      var url = articles[j].url;
      var image = articles[j].urlToImage;
      var title = articles[j].title;
      var description = articles[j].description;
      var sourceName = articles[j].source.name;
      var date = articles[j].publishedAt;

      card += "\n        <div class=\"feed-card\">\n          <a href=\"" + url + "\" target=\"_blank\" class=\"card-inner\">\n      ";
      if (image) {
        card += "\n          <img src=\"" + image + "\" alt=\"" + title + "\" class=\"image\">\n        ";
      }
      card += "\n        <h2 class=\"title\">" + title + "</h2>\n      ";
      if (description) {
        card += "\n          <p class=\"description\">" + description + "</p>\n        ";
      }
      card += "\n            <p class=\"source-name\">" + sourceName + "</p>\n          </a>\n        </div>\n      ";
    }
    feedCards.innerHTML = card;
  });
}

// to the top
var toTop = document.querySelector('#to-top');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 1000) {
    toTop.classList.remove('hidden');
  } else {
    toTop.classList.add('hidden');
  }
});
