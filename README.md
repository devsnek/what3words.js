# w3w

```javascript
import w3w from 'w3w';

const api = w3w('key');

const { geometry } = await api.forward('index.home.raft');
console.log(geometry); // { lng: -0.203586, lat: 51.521251 }
```

* `forward(address)`
* `reverse(lat, long)`
* `autoSuggest(address, { clip, count, ml })`
* `standardBlend(address, { lang, focus, ml })`
* `grid(nelat, nelong, swlat, swlong)`
* `languages()`
