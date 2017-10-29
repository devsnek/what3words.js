# w3w

Very small what3words library for node and browser

```javascript
const w3w = require('w3w')('key');

const { geometry } = await api.forward('index.home.raft');
console.log(geometry); // { lng: -0.203586, lat: 51.521251 }
```

## Methods

* `forward(address)`
* `reverse(lat, long)`
* `autoSuggest(address, { clip, count, ml })`
* `standardBlend(address, { lang, focus, ml })`
* `grid(nelat, nelong, swlat, swlong)`
* `languages()`

for more information see https://docs.what3words.com/api/v2/#overview
