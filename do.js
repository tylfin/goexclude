'use-strict';

$(document).ready(function () {
  function removeVendoredFiles() {
    $('.file').each(function(idx, file) {
      var fileHeader = file.children[0];
      var child = fileHeader.children[0];
      if (child.innerHTML.includes("/vendor/")) {
        file.remove();
      }
    });
  }
  removeVendoredFiles();
  var interval = setInterval(removeVendoredFiles, 500);
  setTimeout(function() { 
    clearInterval(interval)
  }, 5000);
});
