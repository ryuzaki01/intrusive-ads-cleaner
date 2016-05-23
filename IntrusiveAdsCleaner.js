'use strict';

/**
 *  Handler that will check for telkom intrusive ads which telkom force inject in our page
 *  @author Ihsan Fauzi Rahman <shinji666mmc@gmail.com>
 */

var doc = (window.top || window.parent) ? (window.top.document || window.parent.document) : document;
var checkCountDown = 5;

// Die you telkom
(function (w, d, s) {
  d.write('<!--');

  // Just in case above function didn't work
  var checkIntrusiveAdsInterval = w.setInterval(function () {
    var telkomTopAds = d.getElementById('cfs_top_div');
    var telkomBottomAds = d.getElementById('cfs_div_2');
    var parent = telkomTopAds.parentNode;
    var head = d.getElementsByTagName('head')[0];

    if ((telkomTopAds && telkomTopAds.length > 0) && (telkomBottomAds && telkomBottomAds.length > 0)) {
      // This is our content
      var content = telkomBottomAds.innerHTML;

      // We create a div for our content
      var ourContentContainer = doc.createElement('div');
      ourContentContainer.innerHTML = content;

      // We get it out of telkom's div
      parent.insertBefore(ourContentContainer, telkomBottomAds);

      // And then we can remove all the telkom things
      parent.removeChild(telkomTopAds);
      parent.removeChild(telkomBottomAds);
      head.removeChild(d.querySelector(s + '[src^="http://cfs.uzone.id"]'));
      head.removeChild(d.querySelector(s + '[src^="http://cfs.u-ad.info"]'));

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
})(window, doc, 'script');