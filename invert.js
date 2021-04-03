chrome.browserAction.onClicked.addListener(tab => {
    chrome.tabs.executeScript(tab.id, {file: 'content-script.js', allFrames: true});
});

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) 
{
    var icon = msg.is_enabled ? "off" : "on";
    chrome.tabs.query({active:true, windowType:"normal", currentWindow: true},function(d){
        var tabId = d[0].id;
        chrome.browserAction.setIcon({path: {"38":`${icon}_38.png`}, tabId: tabId});
    })
})