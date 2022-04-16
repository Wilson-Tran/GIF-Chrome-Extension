// const giphy = {
//   baseURL: "https://api.giphy.com/v1/gifs/",
//   apiKey: "0KVBqAG5lyQBSE7xLAPqyxSixw0OuFXF",
//   tag: "fail",
//   type: "random",
//   rating: "pg-13"
// }; 

// let giphyURL = encodeURI(
//   giphy.baseURL +
//     giphy.type +
//     "?api_key=" +
//     giphy.apiKey +
//     "&tag=" +
//     giphy.tag +
//     "&rating=" +
//     giphy.rating
// );

// function renderGif(giphyData) {
//   console.log(giphyData);
//   const gifWrap = document.getElementById("gif_wrap");
//   gifWrap.style 
//   //gifWrap.style = 'background-image: url("' + giphyData.images.original.url + '")'
// };

// renderGif('abc');
// async function getCurrentTab() {
//   let queryOptions = { active: true, currentWindow: true };
//   let [tab] = await chrome.tabs.query(queryOptions);
//   return tab;
// }

chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.create({'url':"chrome://newtab"});
})

// try {
//   console.log("start");
//   throw new Error("lol");
//   console.log("end");
// } catch (e) {
//   console.error(e);
// }


// function getTabId() { /* ... */}
// function getTabBadge() { /* ... */}

// chrome.action.setBadgeText(
//   {
//     text: getTabBadge(tabId),
//     tabId: getTabId(),
//   },
//   () => { ... }
// );