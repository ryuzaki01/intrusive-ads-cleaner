'use strict';

/**
 *  Handler that will check for telkom intrusive ads which telkom force inject in our page
 *  @author Ihsan Fauzi Rahman <shinji666mmc@gmail.com>
 */

var win = window || global;

var doc = (win.top || win.parent) ? (win.top.document || win.parent.document) : document;
var checkCountDown = 5;

// Die you telkom
(function (w, d, s) {
  d.write('<!--');

  // Just in case above function didn't work
  var checkIntrusiveAdsInterval = w.setInterval(function () {
    var telkomTopAds = d.getElementById('cfs_top_div');
    var telkomBottomAds = d.getElementById('cfs_div_2');
    var head = d.getElementsByTagName('head')[0];
    if (telkomBottomAds) {
      var parent = telkomBottomAds.parentNode;

      while (telkomBottomAds.firstChild) {
        parent.insertBefore(telkomBottomAds.firstChild, telkomBottomAds);
      }

      // And then we can remove all the telkom things
      parent.removeChild(telkomTopAds);
      parent.removeChild(telkomBottomAds);
      head.removeChild(d.querySelector(s + '[src^="http://cfs.uzone.id"]'));

      // We than stop our interval
      w.clearInterval(checkIntrusiveAdsInterval);
    }

    if (checkCountDown <= 0) {
      // We than stop our interval
      w.clearInterval(checkIntrusiveAdsInterval);
    } else {
      checkCountDown--;
    }
  }, 3000);
})(win, doc, 'script');