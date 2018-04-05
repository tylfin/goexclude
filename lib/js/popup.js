document.addEventListener('DOMContentLoaded', function () {
  var link = document.getElementById('exclude');
  link.addEventListener('click', function () {
        chrome.tabs.executeScript(null, {file: "/lib/js/jquery.min.js" }, function() {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
        }
        chrome.tabs.executeScript(null, { file: "/lib/js/do.js" }, function () {
          if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
            return
          }
        })
    });
  });
});
