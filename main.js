const api = {
    key: "4a8a755ec7663688a7e68e70b6d471c7",
    baseurl: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    //getResults(searchbox.value);
    console.log("Hello");
    console.log(searchbox.nodeValue);
    console.log(searchbox.value);
  }
}