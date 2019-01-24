var requestPattern = "*://www.reddit.com/*"

var domainRegex = /^https?:\/\/www.reddit.com/;

function redirect(requestDetails) {
  return {
    redirectUrl: requestDetails.url.replace(domainRegex, "https://old.reddit.com")
  }
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  { urls: [requestPattern], types: ["main_frame"] },
  ["blocking"]
);
