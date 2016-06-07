$(document).ready(function () {
  $(".responsive-calendar").responsiveCalendar({
    time: '2016-02',
    events: {
    //"2016-01-18": {"number": 5, "url": ""},
    "2016-01-18": {"url": "http://kreativeco.com"},
    "2016-02-01": {"url": "http://kreativeco.com"},
    "2016-06-12": {}}
  });
});
