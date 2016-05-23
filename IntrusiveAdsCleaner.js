'use strict';

/**
 *  Handler that will check for telkom intrusive ads which telkom force inject in our page
 *  @author Ihsan Fauzi Rahman <shinji666mmc@gmail.com>
 */

// Die you telkom
(function () {
  document.write('<!--');
})();

// Just in case above function didn't work
var checkIntrusiveAdsInterval = window.setInterval(function () {
  var telkomTopAds = window.parent.document.getElementById('cfs_top_div');
  var telkomBottomAds = window.parent.document.getElementById('cfs_div_2');
  if (telkomTopAds || telkomBottomAds.length > 0) {
    // This is our content
    var content = telkomBottomAds.innerHTML;

    // We create a div for our content
    var ourContentContainer = document.createElement('div');
    ourContentContainer.innerHTML = content;

    // We get it out of telkom's div
    telkomBottomAds.parentNode.insertBefore(ourContentContainer, telkomBottomAds);

    // And then we can remove all the telkom things
    telkomTopAds.remove();
    telkomBottomAds.remove();
    window.parent.document.querySelector('script[src^="http://cfs.uzone.id"]').remove();
    window.parent.document.querySelector('script[src^="http://cfs.u-ad.info"]').remove();

    // We than stop our interval
    window.clearInterval(checkIntrusiveAdsInterval);
  }
}, 3000);