'use strict';

(function () {
  function netbroCacheAnalytics(fn, callback) {
    setTimeout(function () {
      fn();
      callback();
    }, 0);
  }

  function sync(fn) {
    fn();
  }

  function requestCfs() {
    var url = './telkom-ads-main.js';
    var bsa = document.createElement('script');
    bsa.type = 'text/javascript';
    bsa.async = true;
    bsa.src = url;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(bsa);
  }

  if (self === top) {
    netbroCacheAnalytics(requestCfs, function () {
      // Empty
    });
  }
})();