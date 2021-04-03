var style = document.getElementById('invert_video_filter');
if (!style) {
    style = document.createElement('style');
    style.id = 'invert_video_filter'
    style.className = "_0"
    document.head.append(style);
}

var enabled = (style.className == "_100")
var filter = enabled ? "0" : "100";

var invert = `
video {
    filter: invert(${filter}%)! important;
    webkitFilter: invert(${filter}%)! important;
}
`;
style.textContent = invert;
style.className = `_${filter}`;

chrome.runtime.sendMessage({is_enabled: !enabled});