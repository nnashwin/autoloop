chrome.browserAction.onClicked.addListener(function (tab) {
	alert("Yo brah");
	chrome.tabs.executeScript(null, {file: 'loopLogic.js'});
});
