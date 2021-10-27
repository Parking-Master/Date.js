var date = {};
date.js = {};
date.js.month = function() {
    if (new Date().getMonth() == 0) {
    return 'January';
  } else if (new Date().getMonth() == 1) {
    return 'February';
  } else if (new Date().getMonth() == 2) {
    return 'March';
  } else if (new Date().getMonth() == 3) {
    return 'April';
  } else if (new Date().getMonth() == 4) {
    return 'May';
  } else if (new Date().getMonth() == 5) {
    return 'June';
  } else if (new Date().getMonth() == 6) {
    return 'July';
  } else if (new Date().getMonth() == 7) {
    return 'August';
  } else if (new Date().getMonth() == 8) {
    return 'September';
  } else if (new Date().getMonth() == 9) {
    return 'October';
  } else if (new Date().getMonth() == 10) {
    return 'November';
  } else if (new Date().getMonth() == 11) {
    return 'December';
  }
};
date.js.year = function() {
  const e = (new Date()).getFullYear().toString();
  return e || 0;
};
date.js.time = function() {
  var d = (new Date);
  var hours = d.getHours();
  var minutes = d.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
};
date.js.season = function() {
const md = (month, day) => ({month, day});
const toMd = date => md(date.getMonth(), date.getDate());
const before = (md1, md2) => (md1.month < md2.month) || ((md1.month === md2.month) && (md1.day <= md2.day)) ;
const after = (md1, md2) => !before(md1, md2)
const between = (mdX, mdLow, mdHigh) => after(mdX, mdLow) && before(mdX, mdHigh);
const season = (date, seasons) => ((md = toMd(date))  => Object.keys(seasons).find(season => seasons[season](md)))();
const MARCH_EQUINOX = md(2, 20);
const JUNE_SOLSTICE = md(5, 21);
const SEPTEMBER_EQUINOX = md(8, 23);
const DECEMBER_SOLSTICE = md(11, 21);
const NEW_YEAR = md(0, 1);
const seasons = {
  spring: d => between(d, MARCH_EQUINOX, JUNE_SOLSTICE),
  summer: d => between(d, JUNE_SOLSTICE, SEPTEMBER_EQUINOX),
  fall: d => between(d, SEPTEMBER_EQUINOX, DECEMBER_SOLSTICE),
  winter: d => between(d, DECEMBER_SOLSTICE, NEW_YEAR) || between(d, NEW_YEAR, MARCH_EQUINOX)
};
return (season(new Date(), seasons));
};
date.js.hour = function() {
  var d = (new Date);
  var hours = d.getHours();
  var minutes = d.getMinutes();
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours;
  return (strTime).toString();
};
date.js.minute = function() {
  var d = (new Date);
  var hours = d.getHours();
  var minutes = d.getMinutes();
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0'+minutes : minutes;
  const strTime = minutes;
  return (strTime).toString();
};
date.js.second = function() {
  return (new Date()).getSeconds().toString();
};
date.js.millisecond = function() {
  return (new Date()).getMilliseconds().toString();
};
date.js.constructor = function() {
  var d = new Date();
  var hours = d.getHours();
  var minutes = d.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  return ampm || undefined;
}
