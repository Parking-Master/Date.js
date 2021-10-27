# Date.js
A date API to get all dates, including Seconds, Minutes, Hours, Days, DOM (Day Of the Month), Weeks, Months, Years, Current time (Formatted AM/PM), ETC.
## But first, you'll need to get it
1. Embed it with a Content Delivery Network (CDN/js)
```
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/Parking-Master/Date.js@latest/date.js"></script>
```
_Place it in between the `<head>` tag._
For the minified version, replace `.js` with `.min.js`:
```
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/Parking-Master/Date.js@latest/date.min.js"></script>
```

## Now you can use it.
What would you do with it? Let's find out next.

### Documentation
#### Milliseconds
```
date.js.millisecond(); // 0.00
```
#### Seconds
```
date.js.second(); // 58
```
#### Minutes
```
date.js.minute(); // 31
```
#### Hours
```
date.js.hour(); // 6  (PM)
```
#### Days
```
date.js.day(); // Monday
```
#### Weeks
```
date.js.week(); // (Week Of the Month / WOM) => 2
```
#### Month
```
date.js.month(); // (Month) => November
```
#### TLM (Three-Letter-Month)
```
date.js.tlmonth(); // (Month) => Dec
```
#### Year
```
date.js.year(); // (Year / String: "") => "2021"
```
#### Season
```
date.js.season(); // (Fall / Season: seasons) => "fall"
```
#### Current Time in AM/PM
```
date.js.time(); // (Time / Zone: "PDT/EDT etc.") => 10:04 AM
```

## License
MIT
