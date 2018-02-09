const sources = [
  {"name": "Ars Technica", "source": "ars-technica"},
  {"name": "Engadget", "source": "engadget"},
  {"name": "Hacker News", "source": "hacker-news"},
  {"name": "Mashable", "source": "mashable"},
  {"name": "Recode", "source": "recode"},
  {"name": "TechCrunch", "source": "techcrunch"},
  {"name": "TechRadar", "source": "techradar"},
  {"name": "The Next Web", "source": "the-next-web"},
  {"name": "The Verge", "source": "the-verge"},
  {"name": "Wired", "source": "wired"}
]
const feedCards = document.querySelector('.feed-cards');

let card = '';

for (let i in sources) {

  let name = sources[i].name;
  let source = sources[i].source;
  let newsApi = 'https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey=096d5f7701364ed691b9141cc48f736a';

  fetch(newsApi)
  .then((response) => response.json())
  .then(function(data) {

    let articles = data.articles;

    for (let j in articles) {
      let url = articles[j].url;
      let image = articles[j].urlToImage;
      let title = articles[j].title;
      let description = articles[j].description;
      let sourceName = articles[j].source.name;
      let date = articles[j].publishedAt;

      card += `
        <div class="feed-card">
          <a href="${url}" target="_blank" class="card-inner">
      `;
      if (image) {
        card += `
          <img src="${image}" alt="${title}" class="image">
        `;
      }
      card += `
        <h2 class="title">${title}</h2>
      `;
      if (description) {
        card += `
          <p class="description">${description}</p>
        `;
      }
      card += `
            <p class="source-name">${sourceName}</p>
          </a>
        </div>
      `;
    }
    feedCards.innerHTML = card;
  })
}

// to the top
const toTop =  document.querySelector('#to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 1000) {
    toTop.classList.remove('hidden');
  } else {
    toTop.classList.add('hidden');
  }
});
