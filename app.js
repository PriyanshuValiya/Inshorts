const home = document.getElementById("home");
const business = document.getElementById("business");
const sport = document.getElementById("sports");
const technologie = document.getElementById("technologies");
const entertainment = document.getElementById("entertainments");
const newsType = document.getElementById("newsType");
const newsDetails = document.getElementById("newsDetails");

const API_KEY = "7c881d6acb7d452fa588bdc9c30226f7";
const HEADLINES_NEWS =
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=";
const GENERAL_NEWS =
  "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=";
const BUSINESS_NEWS =
  "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=";
const SPORTS_NEWS =
  "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";
const ENTERTAINMENT_NEWS =
  "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=";
const TECHNOLOGY_NEWS =
  "https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=8&apiKey=";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";

let newsDataArray = [];

const fetchGeneralNews = async () => {
  const res = await fetch(GENERAL_NEWS + API_KEY);
  const data = await res.json();
  newsDataArray = data.articles;
  displayNews();
};

const fetchBusinessNews = async () => {
  const res = await fetch(BUSINESS_NEWS + API_KEY);
  const data = await res.json();
  newsDataArray = data.articles;
  displayNews();
};

const fetchSportsNews = async () => {
  const res = await fetch(SPORTS_NEWS + API_KEY);
  const data = await res.json();
  newsDataArray = data.articles;
  displayNews();
};

const fetchTechnologyNews = async () => {
  const res = await fetch(TECHNOLOGY_NEWS + API_KEY);
  const data = await res.json();
  newsDataArray = data.articles;
  displayNews();
};

const fetchEntertainmentNews = async () => {
  const res = await fetch(ENTERTAINMENT_NEWS + API_KEY);
  newsDataArray = [];
  const data = await res.json();
  newsDataArray = data.articles;
  console.log(data);
  displayNews();
};

const fetchQueryNews = async () => {
  if (newsQuery.value == null) {
    return;
  }
  const responce = await fetch(
    SEARCH_NEWS + encodeURIComponent(newsQuery.value) + "&apikey=" + API_KEY
  );
  newsDataArray = [];
  try {
    const data = await res.json();
    newsDataArray = data.articles;
  } catch (e) {
    console.log(e);
  }
  displayNews();
};

const displayNews = () => {
  newsDetails.innerHTML = "";

  newsDataArray.forEach((news) => {
    var date = news.publishedAt.split("T");

    var col = document.createElement("div");
    col.className = "col-sm-2 col-md-4 col-lg-3 p-2 card";

    var card = document.createElement("div");
    card.className = "p-2";

    var image = document.createElement("img");
    image.setAttribute("height", "matchparnt");
    image.setAttribute("width", "100%");
    image.src = news.urlToImage;

    var cardBody = document.createElement("div");

    var newsHeading = document.createElement("h5");
    newsHeading.className = "card-title";
    newsHeading.innerHTML = news.title;

    var dateHeading = document.createElement("h6");
    dateHeading.className = "text-primary";

    var discription = document.createElement("p");
    discription.className = "text-muted";
    discription.innerHTML = news.description;

    var link = document.createElement("a");
    link.className = "btn btn-dark";
    link.setAttribute("target", "_blank");
    link.href = news.url;
    link.innerHTML = "Read more...";

    cardBody.appendChild(newsHeading);
    cardBody.appendChild(dateHeading);
    cardBody.appendChild(discription);
    cardBody.appendChild(link);

    card.appendChild(image);
    card.appendChild(cardBody);

    col.appendChild(card);

    newsDetails.appendChild(col);
  });
};

home.addEventListener("click", () => {
  fetchGeneralNews();
});

business.addEventListener("click", () => {
  fetchBusinessNews();
});

sport.addEventListener("click", () => {
  fetchSportsNews();
});

technologie.addEventListener("click", () => {
  fetchTechnologyNews();
});

entertainment.addEventListener("click", () => {
  fetchEntertainmentNews();
});
