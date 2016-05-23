'use strict';

var cfs_jq = null;
var cfs_top_w = '320px';
var cfs_top_h = '50px';
var cfs_closed = 0;

function getScript(url, success) {
  var script = document.createElement('script');
  script.src = url;
  var head = document.getElementsByTagName('head')[0], done = false;
  script.onload = script.onreadystatechange = function () {
    if (!done && (!this.readyState
      || this.readyState === 'loaded'
      || this.readyState === 'complete')) {
      done = true;
      success();
      script.onload = script.onreadystatechange = null;
      head.removeChild(script);
    }
  };
  head.appendChild(script);
}

getScript('http://cfs.uzone.id/assets/js/jquery-1.11.2.min.js', function () {
  if (typeof jQuery === 'undefined') {
    // Do nothing. jQuery not loaded.
  } else {
    cfs_jq = jQuery.noConflict(true);
    cfs_script_r();
  }
});

function cfs_script() {
  // Empty
}

function cfs_script_r() {
  cfs_jq('#cfs_top_div').removeAttr('style');
  cfs_jq('#cfs_top_div').css({
    position: 'relative',
    'z-index': 999999999,
    width: '100%',
    height: cfs_top_h,
    'text-align': 'center',
    border: '0px',
    padding: '0px'
  });

  cfs_jq('body').children(':not(var, script, #cfs_top_div)').wrapAll('<div id="cfs_div_2">');
  cfs_jq('#cfs_div_2').css({position: 'relative', width: '100%', border: '0px', padding: '0px'});
  var has_fixed_css = 0;
  cfs_jq('#cfs_div_2').find('*').each(function (i, v) {
    var t = cfs_jq(this);
    if (t.css('position') === 'fixed') {
      if (t.css('top') === '0px') {
        has_fixed_css = 1;
      }
      t.css('top', '+=' + cfs_top_h);
    }
  });

  if (has_fixed_css) {
    cfs_jq('#cfs_top_div').css({position: 'fixed', top: '0px', 'background-color': '#FFFFFF'});
    cfs_jq('#cfs_div_2').css({top: cfs_top_h});
  }

  cfs_jq('#cfs_top_close').off('click');
  cfs_jq('#cfs_top_close').click(function () {
    cfs_jq('#cfs_top_div').slideToggle('slow');
    cfs_jq('#cfs_div_2').css({top: '0px'});
    cfs_jq('#cfs_div_2').find('*').each(function (i, v) {
      var t = cfs_jq(this);
      if (t.css('position') === 'fixed') {
        t.css('top', '-=' + cfs_top_h);
      }
    });
  });
}