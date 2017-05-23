var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov',
  'Dec'
];
var re = /(.*)\((.* UTC)\)(.*)/;

[].forEach.call(
    document.querySelectorAll('#messages tr.comment_title td:nth-of-type(3)'),
    function(el, i) {
      if (i === 0) {
        el.width = 160;
      } else {
        var found = el.innerHTML.replace(/[\r\n]+/g, ' ').match(re);
        if (found && found[2]) {
          var d = new Date(found[2]);
          el.innerHTML = found[1] + '(' + days[d.getDay()] + ' ' +
              months[d.getMonth()] + ' ' + (d.getDate() < 10 ? '0' : '') +
              d.getDate() + ', ' +
              (d.getHours() > 12 ?
                   (d.getHours() - 12 === 0 ? '12' : d.getHours() - 12) :
                   (d.getHours() === 0 ? '12' : d.getHours())) +
              ':' + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes() + ' ' +
              (d.getHours() > 12 ? 'p' : 'a') + 'm)' + found[3];
        }
      }
    });
