document.addEventListener('DOMContentLoaded', function() {
  
  const giphy = {
  baseURL: "https://api.giphy.com/v1/gifs/",
  apiKey: "0KVBqAG5lyQBSE7xLAPqyxSixw0OuFXF",
  tag: "positivity",
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

function createURL(tag) {
  giphyURL = encodeURI(
  giphy.baseURL +
    giphy.type +
    "?api_key=" +
    giphy.apiKey +
    "&tag=" +
    tag +
    "&rating=" +
    giphy.rating
);
}

function renderGif(giphyData) {
  console.log(giphyData);
  const gifWrap = document.getElementById("gif-wrap");

  gifWrap.style.backgroundImage = "url('" + giphyData.data.images.original.url + "')";

}

fetch(giphyURL)
  .then(response => response.json())
  .then(data => {renderGif(data);
    console.log(data);});

  const form = document.querySelector("form");
  const submission = document.querySelector("#submit_button")
  // submission.addEventListener('click', e => {
  // e.preventDefault();
  // const formData = new FormData(form);
  // const value = formData.get()
  // // console.log(formData);
  // //giphy.tag = values[1];
  // console.log(giphy.tag);
  // }, false)
  form.onsubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    
    for (const obj of formData) {
      createURL(obj[1]);
    }
    fetch(giphyURL)
    .then(response => response.json())
    .then(data => {renderGif(data);
    console.log(data);});

  }
})




function selectChoice() {
  var data = new FormData(form);
  const formChoice = document.querySelector('category');
  var output = "";
  // for (const entry of data) {
  //   output = output + entry[0] + "=" + entry[1] + "\r";
  // };
  // log.innerText = output;
  event.preventDefault();
  console.log(formChoice);
}