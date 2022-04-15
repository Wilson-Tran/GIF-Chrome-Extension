
// chrome.runtime.onInstalled.addListener((reason) => {
//   if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
//     chrome.tabs.create({
//       url: 'index.html'
//     });
//   }
// });

async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.create({'url':"chrome://newtab"});
})



// function getTabId() { /* ... */}
// function getTabBadge() { /* ... */}

// chrome.action.setBadgeText(
//   {
//     text: getTabBadge(tabId),
//     tabId: getTabId(),
//   },
//   () => { ... }
// );