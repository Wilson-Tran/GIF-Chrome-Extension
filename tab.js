const giphy = {
  baseURL: "https://api.giphy.com/v1/gifs/",
  apiKey: "0KVBqAG5lyQBSE7xLAPqyxSixw0OuFXF",
  tag: "happy",
  type: "random",
  rating: "pg-13"
}; 

let giphyURL = encodeURI(
  giphy.baseURL +
    giphy.type +
    "?api_key=" +
    giphy.apiKey +
    "&tag=" +
    giphy.tag +
    "&rating=" +
    giphy.rating
);

function renderGif(giphyData) {
  console.log(giphyData);
  const gifWrap = document.getElementById("gif-wrap");

  gifWrap.style.backgroundImage = "url('" + giphyData.data.images.original.url + "')";

}

fetch(giphyURL)
  .then(response => response.json())
  .then(data => renderGif(data));
